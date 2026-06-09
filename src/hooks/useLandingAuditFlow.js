"use client";

import { useState } from "react";
import { submitLandingAudit } from "@/src/utils/submitForm";
import { formatPageUrl } from "@/src/lib/webAnatomy";

export function useLandingAuditFlow({ source, toolType }) {
  const [checkedUrl, setCheckedUrl] = useState("");
  const [checkingOpen, setCheckingOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [reportUrl, setReportUrl] = useState("");

  const handleLandingAudit = async (url) => {
    const value = formatPageUrl(url);
    if (!value) return;

    setCheckedUrl(value);
    setReportUrl("");
    setCheckingOpen(true);
    setReportOpen(false);

    try {
      const result = await submitLandingAudit({
        url: value,
        source,
        toolType,
      });

      setReportUrl(result.reportUrl);
      setCheckingOpen(false);
      setReportOpen(true);

      if (typeof window !== "undefined" && result.reportUrl) {
        window.open(result.reportUrl, "_blank", "noopener,noreferrer");
      }
    } catch (error) {
      console.error(error);
      setCheckingOpen(false);
    }
  };

  const handleCheckingClose = () => setCheckingOpen(false);
  const closeReport = () => setReportOpen(false);

  return {
    checkedUrl,
    checkingOpen,
    reportOpen,
    reportUrl,
    handleLandingAudit,
    handleCheckingClose,
    closeReport,
  };
}
