"use client";

import { useEffect, useRef, useState } from "react";
import { getSiteReportStatus, resolveAssetUrl } from "@/src/lib/analysisApi";

const POLL_INTERVAL_MS = 2500;
// Stop polling after this long so a stuck/queued job doesn't hang the page forever.
const POLL_TIMEOUT_MS = 5 * 60 * 1000;
const ACTIVE_STATUSES = ["pending", "processing"];

/**
 * Polls an already-created site-report job (by id) until it is `done` or
 * `failed`. Used by the dedicated report page. Timers are cleared on unmount.
 *
 * @param {string} jobId
 * @returns {{
 *   status: "pending"|"processing"|"done"|"failed"|"error",
 *   isActive: boolean,
 *   report: import("@/src/lib/analysisApi").SiteReportResult | null,
 *   htmlUrl: string | null,
 *   pdfUrl: string | null,
 *   error: string | null,
 * }}
 */
export function useSiteReportPolling(jobId) {
  const [status, setStatus] = useState(jobId ? "pending" : "error");
  const [report, setReport] = useState(null);
  const [htmlUrl, setHtmlUrl] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [error, setError] = useState(jobId ? null : "Missing report id.");

  const timerRef = useRef(null);

  useEffect(() => {
    if (!jobId) return undefined;

    let active = true;
    const deadline = Date.now() + POLL_TIMEOUT_MS;

    const tick = async () => {
      try {
        const data = await getSiteReportStatus(jobId);
        if (!active) return;

        setStatus(data.status);

        if (data.status === "done") {
          const reportData = data.report || null;
          setReport(
            reportData
              ? {
                  ...reportData,
                  desktop_screenshot_url: resolveAssetUrl(
                    reportData.desktop_screenshot_url
                  ),
                  mobile_screenshot_url: resolveAssetUrl(
                    reportData.mobile_screenshot_url
                  ),
                }
              : null
          );
          setHtmlUrl(resolveAssetUrl(data.html_url));
          setPdfUrl(resolveAssetUrl(data.pdf_url));
          return;
        }

        if (data.status === "failed") {
          console.error("Site report failed:", data.error, data);
          setError(data.error || "The analysis could not be completed.");
          return;
        }

        if (Date.now() >= deadline) {
          setStatus("error");
          setError(
            data.status === "pending"
              ? "The analysis is still queued and hasn't started. Please try again in a moment."
              : "The analysis is taking longer than expected. Please try again."
          );
          return;
        }

        timerRef.current = setTimeout(tick, POLL_INTERVAL_MS);
      } catch (err) {
        if (!active) return;
        console.error("Site report polling failed:", err);
        setStatus("error");
        setError(err?.message || "Lost connection to the analysis service.");
      }
    };

    tick();

    return () => {
      active = false;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [jobId]);

  return {
    status,
    isActive: ACTIVE_STATUSES.includes(status),
    report,
    htmlUrl,
    pdfUrl,
    error,
  };
}
