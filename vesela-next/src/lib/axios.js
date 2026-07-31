"use client";

import axios from "axios";
import { getAuthTokenExpiration, saveAuthTokenExpiration } from "@/utils/authUtil";

// ─── Axios instance ───────────────────────────────────────────────────────────

const api = axios.create({
  baseURL: "/api/proxy",
  headers: {
    "Content-Type": "application/json",
  },
  // Send cookies (session, CSRF, etc.) automatically on every request
  withCredentials: true,
});

// ─── Refresh token state ──────────────────────────────────────────────────────

// Whether a refresh call is already in-flight
// This is module-level. In development (HMR) it may survive navigation.
// We reset it here at parse time so each fresh module evaluation starts clean.
let isRefreshing = false;

// Callbacks waiting for the refresh to complete
// Each item: { resolve, reject, config }
let refreshQueue = [];

// Safety timeout reference — if a refresh hangs (e.g. server unresponsive),
// we forcibly unlock after 10 s so queued requests are not blocked forever.
let refreshSafetyTimer = null;

function processQueue(error) {
  for (const item of refreshQueue) {
    if (error) {
      item.reject(error);
    } else {
      item.resolve(api(item.config));
    }
  }
  refreshQueue = [];
}

function releaseRefreshLock(error) {
  clearTimeout(refreshSafetyTimer);
  refreshSafetyTimer = null;
  processQueue(error);
  isRefreshing = false;
}

/**
 * Executes a token refresh call.
 * Centralized so both request and response interceptors can trigger it.
 */
async function performTokenRefresh() {
  // Arm the safety timer: if the refresh endpoint hangs for more than 10 s,
  // force-release the lock so queued requests are rejected rather than blocked forever.
  refreshSafetyTimer = setTimeout(() => {
    console.warn("[Auth] Token refresh timed out after 10 s. Force-releasing refresh lock.");
    releaseRefreshLock(new Error("Token refresh timed out"));
  }, 10_000);

  const refreshResponse = await axios.post(
    "/api/proxy/dj-rest-auth/token/refresh/",
    {},
    { withCredentials: true },
  );

  const newAccessToken =
    refreshResponse.data?.access ||
    refreshResponse.data?.access_token ||
    null;

  if (newAccessToken) {
    // Save expiration timestamp locally
    saveAuthTokenExpiration(newAccessToken);

    // Notify AuthContext so it gets the fresh in-memory wsToken
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("auth:sessionRefreshed", {
          detail: { token: newAccessToken },
        })
      );
    }
  }
}

// ─── Request interceptor — handles proactive refresh ─────────────────────────

api.interceptors.request.use(async (config) => {
  // Bypasses check for the refresh endpoint itself to prevent infinite loop
  if (config.url?.includes("/dj-rest-auth/token/refresh/")) {
    return config;
  }

  if (typeof window !== "undefined") {
    const expiresAt = getAuthTokenExpiration();
    if (expiresAt) {
      const oneHour = 60 * 60 * 1000;
      const isExpiringSoon = expiresAt - Date.now() < oneHour;

      if (isExpiringSoon) {
        if (isRefreshing) {
          // A refresh is already running — queue the request and wait
          return new Promise((resolve, reject) => {
            refreshQueue.push({ resolve, reject, config });
          });
        }

        isRefreshing = true;

        try {
          await performTokenRefresh();
          releaseRefreshLock(null);
        } catch (refreshError) {
          releaseRefreshLock(refreshError);

          // Force session logout and redirect on failure
          window.dispatchEvent(new CustomEvent("auth:sessionExpired"));
          window.location.href = "/";
          return Promise.reject(refreshError);
        }
      }
    }
  }
  return config;
});

// ─── Response interceptor — handles reactive 401 refresh ──────────────────────

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    // Only intercept 401 errors that haven't already been retried
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        // A refresh is already running — queue this request and wait
        return new Promise((resolve, reject) => {
          refreshQueue.push({ resolve, reject, config: originalRequest });
        });
      }

      isRefreshing = true;

      try {
        await performTokenRefresh();
        releaseRefreshLock(null);
        return api(originalRequest);
      } catch (refreshError) {
        releaseRefreshLock(refreshError);

        // Force session logout and redirect on failure
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("auth:sessionExpired"));
          window.location.href = "/";
        }

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
