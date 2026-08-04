"use client";

import { useEffect } from "react";
import { useModal } from "@/context/ModalContext";
import { POST_LOGIN_NAVIGATE_TO, WELCOME_COMPLETED } from "@/constant";
import { useRouter } from "next/navigation";
import { localStorageUtil } from "@/utils/localStorageUtil";

/**
 * SuccessfulModal — shown immediately after a successful login or sign-up.
 *
 * Navigates instantly (no delay) to the correct post-login destination:
 *   - A previously-stored intended destination (POST_LOGIN_NAVIGATE_TO), or
 *   - /chat  if the user has already completed the welcome experience, or
 *   - /welcome for first-time users.
 *
 * The modal closes at the same time so the transition feels seamless.
 */
const SuccessfulModal = () => {
  const { closeModal } = useModal();
  const router = useRouter();

  useEffect(() => {
    // Determine destination — same logic as ClientRedirect for consistency.
    const redirectTo = localStorageUtil.get(POST_LOGIN_NAVIGATE_TO);
    if (redirectTo) {
      localStorageUtil.remove(POST_LOGIN_NAVIGATE_TO);
      router.push(redirectTo);
    } else {
      const welcomeCompleted = localStorageUtil.get(WELCOME_COMPLETED);
      router.push(welcomeCompleted ? "/chat" : "/welcome");
    }
    // Close the modal at the same tick so no stale overlay is left behind.
    closeModal();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Intentionally empty — run exactly once on mount.

  // Render nothing: the modal wrapper provided by AuthFlowManager gives the
  // visual container; we just need this component to trigger navigation.
  return null;
};

export default SuccessfulModal;
