"use client";

import { useState } from "react";
import { submitDomainCheck } from "@/src/utils/submitForm";
import {
  formatDomainLabel,
  mapTrustToCheckResult,
} from "@/src/lib/domainCheckData";

export function useDomainCheckFlow({
  source,
  toolType,
  showSpamResult = true,
}) {
  const [checkedDomain, setCheckedDomain] = useState("");
  const [checkingOpen, setCheckingOpen] = useState(false);
  const [spamOpen, setSpamOpen] = useState(false);
  const [checkResults, setCheckResults] = useState(null);

  const handleDomainCheck = async (domain) => {
    const value = formatDomainLabel(domain);
    if (!value) return;

    setCheckedDomain(value);
    setCheckResults(null);
    setCheckingOpen(true);
    setSpamOpen(false);

    try {
      const result = await submitDomainCheck({
        domain: value,
        source,
        toolType,
      });

      setCheckResults(result);
      setCheckingOpen(false);

      if (showSpamResult) {
        setSpamOpen(true);
      }
    } catch (error) {
      console.error(error);
      setCheckingOpen(false);

      if (showSpamResult) {
        const fallback = mapTrustToCheckResult(value, null);
        fallback.sources = fallback.sources.map((item) =>
          item.source === "Scamadviser"
            ? { ...item, message: "Could not retrieve trust score" }
            : item
        );
        fallback.apiError = true;
        setCheckResults(fallback);
        setSpamOpen(true);
      }
    }
  };

  const handleCheckingClose = () => {
    setCheckingOpen(false);
  };

  const closeSpam = () => setSpamOpen(false);

  return {
    checkedDomain,
    checkingOpen,
    spamOpen,
    checkResults,
    handleDomainCheck,
    handleCheckingClose,
    closeSpam,
  };
}
