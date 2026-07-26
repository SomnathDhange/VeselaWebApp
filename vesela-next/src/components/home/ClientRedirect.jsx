"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

/**
 * ClientRedirect — mounted only on the "/" route.
 *
 * Decision flow:
 *   NOT authenticated          → no-op (landing page is shown)
 *   authenticated              → /welcome 
 */
export default function ClientRedirect() {
  const { isAuthenticated, isSessionChecked } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Wait until the session is fully checked. If not authenticated, do nothing.
    if (!isSessionChecked || !isAuthenticated) return;

    // Since you want all authenticated users to go to /welcome, 
    // you don't need to check localStorage at all.
    router.replace("/welcome");

  }, [isAuthenticated, isSessionChecked, router]);

  return null;
}