"use client";

import { useEffect } from "react";

export function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return undefined;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [isLocked]);
}
