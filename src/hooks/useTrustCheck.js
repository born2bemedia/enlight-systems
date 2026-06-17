"use client";

import { useState } from "react";
import { requestTrustCheck } from "@/src/lib/analysisApi";
import { formatDomainLabel } from "@/src/lib/domainCheckData";

/**
 * Drives the trust-check form: input normalization, async request, and the
 * loading / success / error states rendered below the form.
 *
 * @returns {{
 *   status: "idle"|"loading"|"success"|"error",
 *   result: import("@/src/lib/analysisApi").TrustCheckResponse | null,
 *   error: string | null,
 *   handleTrustCheck: (input: string) => Promise<void>,
 *   reset: () => void,
 * }}
 */
export function useTrustCheck() {
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleTrustCheck = async (input) => {
    const domain = formatDomainLabel(input);

    if (!domain) {
      setResult(null);
      setError("Enter a valid domain, e.g. example.com");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError(null);
    setResult(null);

    try {
      const data = await requestTrustCheck(domain);
      setResult(data);
      setStatus("success");
    } catch (err) {
      console.error("Trust check failed:", err);
      setError(err?.message || "Could not complete the trust check.");
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
    setResult(null);
    setError(null);
  };

  return { status, result, error, handleTrustCheck, reset };
}
