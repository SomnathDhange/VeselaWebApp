"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { localStorageUtil } from "@/utils/localStorageUtil";
import { USER_DETAILS, WELCOME_COMPLETED } from "@/constant";

// ─── Minimal full-screen loader ───────────────────────────────────────────────
// Rendered in place of the marketing page while we verify the session.
// Uses inline styles (no CSS import needed) so it's always correct regardless
// of which theme is active. Matches the app's dark background to avoid flashes.
function AuthCheckLoader() {
  return (
    <div
      aria-label="Authenticating…"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000", // matches the dark app shell
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "3px solid rgba(255,255,255,0.12)",
          borderTopColor: "rgba(255,255,255,0.72)",
          animation: "vesela-spin 0.75s linear infinite",
        }}
      />
      {/* Inject keyframes only once, globally */}
      <style>{`
        @keyframes vesela-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// ─── ClientRedirect ───────────────────────────────────────────────────────────

/**
 * ClientRedirect — mounted only on the "/" route.
 *
 * Decision flow (single source of truth):
 *
 *   Phase 1 — optimistic (before network session check):
 *     localStorage has a valid user  → render AuthCheckLoader (block marketing flash)
 *     localStorage is empty          → render null (show marketing page immediately)
 *
 *   Phase 2 — definitive (after isSessionChecked = true):
 *     isAuthenticated = true  → router.replace to /chat (returning) or /welcome (first visit)
 *     isAuthenticated = false → render null (marketing page is already visible or loads now)
 *
 * This pattern is identical to how ChatGPT, Claude, and Perplexity route users:
 * they never flash the marketing page to an authenticated user.
 */
export default function ClientRedirect() {
  const { isAuthenticated, isSessionChecked } = useAuth();
  const router = useRouter();

  // Optimistic: check localStorage synchronously on first render so we know
  // whether to block the marketing page before the network call resolves.
  const [hasOptimisticUser] = useState(() => {
    try {
      const stored = localStorageUtil.get(USER_DETAILS);
      return Boolean(stored && typeof stored === "object" && stored.pk);
    } catch {
      return false;
    }
  });

  useEffect(() => {
    // Not yet confirmed — keep showing the loader (if optimistic) or nothing.
    if (!isSessionChecked) return;

    // Session confirmed as unauthenticated — show marketing page.
    if (!isAuthenticated) return;

    // Session confirmed as authenticated.
    // Returning users (have already seen /welcome) go straight to /chat.
    // First-time users go to /welcome for the Hero Chat onboarding experience.
    try {
      const welcomeCompleted = localStorageUtil.get(WELCOME_COMPLETED);
      if (welcomeCompleted) {
        router.replace("/chat");
      } else {
        router.replace("/welcome");
      }
    } catch {
      // Fallback: always safe to send to /welcome
      router.replace("/welcome");
    }
  }, [isAuthenticated, isSessionChecked, router]);

  // Phase 1: optimistic user found → block the marketing page with a silent loader.
  // Phase 2: session confirmed unauthenticated → stop blocking (return null).
  if (hasOptimisticUser && (!isSessionChecked || isAuthenticated)) {
    return <AuthCheckLoader />;
  }

  return null;
}