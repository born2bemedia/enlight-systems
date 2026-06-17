"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useSiteReportPolling } from "@/src/hooks/useSiteReportPolling";
import ReportLoader from "@/src/component/ReportLoader";
import ReportHero from "@/src/component/ReportHero";
import HomeCalculatorCta from "@/src/component/home/HomeCalculatorCta";

const PROGRESS_MESSAGES = [
  "Capturing desktop and mobile screenshots…",
  "Reading your hero and key sections…",
  "Scoring clarity, proof, and calls to action…",
  "Compiling your report…",
];

const BackLink = () => (
  <Link href="/" className="report-page__back">
    ← Back to home
  </Link>
);

function ReportView({ jobId }) {
  const { status, isActive, report, error } = useSiteReportPolling(jobId);
  const docRef = useRef(null);
  const [generating, setGenerating] = useState(false);

  // Generate a real PDF on demand, client-side, and hand it straight to the
  // user for download (no print dialog). Libraries are loaded lazily on click.
  const handleDownloadPdf = async () => {
    const node = docRef.current;
    if (!node || generating) return;

    setGenerating(true);
    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      const canvas = await html2canvas(node, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#0f0f0f",
        // Expand the scrollable screenshot frames in the clone so the full
        // page screenshots are captured, without touching the live DOM.
        onclone: (clonedDoc) => {
          clonedDoc
            .querySelectorAll(".report-page__shot-frame")
            .forEach((frame) => {
              frame.style.maxHeight = "none";
              frame.style.overflow = "visible";
            });
        },
      });

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const margin = 10; // mm of padding around the content on every page
      const imgWidth = pageWidth - margin * 2;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const usableHeight = pageHeight - margin * 2;
      const pageCount = Math.max(1, Math.ceil(imgHeight / usableHeight));
      const imgData = canvas.toDataURL("image/jpeg", 0.92);

      for (let page = 0; page < pageCount; page += 1) {
        if (page > 0) pdf.addPage();

        // Dark page background (matches the report theme) — fills the gutters.
        pdf.setFillColor(15, 15, 15);
        pdf.rect(0, 0, pageWidth, pageHeight, "F");

        // Slice the tall image by shifting it up one usable page per page.
        pdf.addImage(
          imgData,
          "JPEG",
          margin,
          margin - page * usableHeight,
          imgWidth,
          imgHeight
        );

        // Mask the top/bottom gutters so the padding stays clean at page breaks.
        pdf.setFillColor(15, 15, 15);
        pdf.rect(0, 0, pageWidth, margin, "F");
        pdf.rect(0, pageHeight - margin, pageWidth, margin, "F");
      }

      const safeName = (report?.domain || report?.url || "landing-page")
        .replace(/^https?:\/\//i, "")
        .replace(/[^a-z0-9.-]+/gi, "-")
        .replace(/^-+|-+$/g, "");
      pdf.save(`enlight-report-${safeName}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <>
      <ReportHero domain={report?.domain || report?.url} />
      <section className="report-page">
        <div className="_container">
          <div className="report-page__top">
            <BackLink />
          {status === "done" && report && (
            <button
              type="button"
              className="main-button report-page__pdf-btn"
              onClick={handleDownloadPdf}
              disabled={generating}
            >
              <span>{generating ? "Generating…" : "Download report"}</span>
            </button>
          )}
        </div>

        {isActive && (
          <ReportLoader
            title="Analyzing your landing page"
            messages={PROGRESS_MESSAGES}
            note="This usually takes about 2 minutes — feel free to keep this tab open."
          />
        )}

        {(status === "error" || status === "failed") && (
          <div className="report-page__error" role="alert">
            <h2>We couldn’t finish this report</h2>
            <p>{error || "The analysis could not be completed."}</p>
            <div className="report-page__actions">
              <Link href="/#domain-check-content" className="main-button">
                <span>Try another page</span>
              </Link>
            </div>
          </div>
        )}

        {status === "done" && report && (
          <>
            <div className="report-page__doc" ref={docRef}>
            <div className="report-page__head">
              <div>
                <span className="report-page__label">Landing page report</span>
                <h1>{report.domain || report.url}</h1>
                {report.summary && (
                  <p className="report-page__summary">{report.summary}</p>
                )}
              </div>
              <div className="report-page__score">
                <div
                  className="report-page__score-ring"
                  style={{ "--score": Math.round(report.overall_score) }}
                >
                  <span className="report-page__score-value">
                    {Math.round(report.overall_score)}
                    <small>/100</small>
                  </span>
                </div>
                <span className="report-page__score-caption">Overall score</span>
              </div>
            </div>

            {Array.isArray(report.sections) && report.sections.length > 0 && (
              <div className="report-page__sections">
                {report.sections.map((section, index) => (
                  <div
                    key={section.section_type || section.section_label}
                    className="report-page__section"
                  >
                    <div className="report-page__section-head">
                      <div className="report-page__section-title">
                        <span className="report-page__section-num">
                          {index + 1}
                        </span>
                        <h3>{section.section_label}</h3>
                      </div>
                      <span className="report-page__section-score">
                        {Math.round(section.score)}/100
                      </span>
                    </div>
                    {Array.isArray(section.top_issues) &&
                      section.top_issues.length > 0 && (
                        <div className="report-page__group">
                          <h4>Top issues</h4>
                          <ul>
                            {section.top_issues.map((issue, i) => (
                              <li key={i}>{issue}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    {Array.isArray(section.top_fixes) &&
                      section.top_fixes.length > 0 && (
                        <div className="report-page__group">
                          <h4>Top fixes</h4>
                          <ul>
                            {section.top_fixes.map((fix, i) => (
                              <li key={i}>{fix}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                ))}
              </div>
            )}

            {(report.desktop_screenshot_url || report.mobile_screenshot_url) && (
              <div className="report-page__shots">
                {report.desktop_screenshot_url && (
                  <figure>
                    <figcaption>Desktop</figcaption>
                    <div className="report-page__shot-frame">
                      <div className="report-page__shot-canvas">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={report.desktop_screenshot_url}
                          alt={`Desktop preview of ${report.domain || report.url}`}
                          loading="lazy"
                        />
                        {Array.isArray(report.markers) &&
                          report.markers.map((marker) => (
                            <span
                              key={marker.index}
                              className="report-page__shot-marker"
                              style={{ top: `${marker.top_percent}%` }}
                              title={marker.section_label}
                            >
                              {marker.index}
                            </span>
                          ))}
                      </div>
                    </div>
                  </figure>
                )}
                {report.mobile_screenshot_url && (
                  <figure>
                    <figcaption>Mobile</figcaption>
                    <div className="report-page__shot-frame">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={report.mobile_screenshot_url}
                        alt={`Mobile preview of ${report.domain || report.url}`}
                        loading="lazy"
                      />
                    </div>
                  </figure>
                )}
              </div>
            )}

            </div>

            <div className="report-page__actions">
              <Link href="/#domain-check-content" className="report-page__back">
                Analyze another page →
              </Link>
            </div>
          </>
        )}
        </div>
      </section>

      <HomeCalculatorCta
        showBadge={false}
        lead="Use Enlight to see where users are lost, where budgets are wasted, and where performance can be improved from one dashboard."
        title="Website issues are often symptoms of deeper marketing problems"
      />
    </>
  );
}

export default ReportView;
