"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useTrustCheck } from "@/src/hooks/useTrustCheck";
import ReportLoader from "@/src/component/ReportLoader";

const RISK_LABELS = {
  low: "Low risk",
  medium: "Medium risk",
  high: "High risk",
};

const PROGRESS_MESSAGES = [
  "Checking blacklists and trust signals…",
  "Scoring SSL, domain age, and reputation…",
];

function formatFactorName(name) {
  if (!name) return "";
  return name
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function TrustReportView({ domain }) {
  const { status, result, error, handleTrustCheck } = useTrustCheck();

  useEffect(() => {
    if (domain) {
      handleTrustCheck(domain);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [domain]);

  const noDomain = !domain;

  return (
    <section className="report-page">
      <div className="_container">
        <div className="report-page__top">
          <Link href="/" className="report-page__back">
            ← Back to home
          </Link>
        </div>

        {(status === "idle" || status === "loading") && !noDomain && (
          <ReportLoader
            title="Checking domain reputation"
            messages={PROGRESS_MESSAGES}
            note="This only takes a moment."
          />
        )}

        {(noDomain || status === "error") && (
          <div className="report-page__error" role="alert">
            <h2>We couldn’t run this check</h2>
            <p>
              {noDomain
                ? "No domain was provided. Start a new check from the home page."
                : error || "The trust check could not be completed."}
            </p>
            <div className="report-page__actions">
              <Link href="/#domain-check-reputation" className="main-button">
                <span>Check a domain</span>
              </Link>
            </div>
          </div>
        )}

        {status === "success" && result && (
          <>
            <div className="report-page__head">
              <div>
                <span className="report-page__label">Domain trust report</span>
                <h1>{result.domain}</h1>
                <p className="report-page__summary">
                  <span
                    className={`report-trust__risk report-trust__risk--${result.risk_level}`}
                  >
                    {RISK_LABELS[result.risk_level] || result.risk_level}
                  </span>
                </p>
              </div>
              <div className="report-page__score">
                <div
                  className="report-page__score-ring"
                  style={{ "--score": Math.round(result.trust_score) }}
                >
                  <span className="report-page__score-value">
                    {Math.round(result.trust_score)}
                    <small>/100</small>
                  </span>
                </div>
                <span className="report-page__score-caption">Trust score</span>
              </div>
            </div>

            {Array.isArray(result.factors) && result.factors.length > 0 && (
              <div className="report-trust__factors">
                {result.factors.map((factor) => (
                  <div key={factor.name} className="report-trust__factor">
                    <div className="report-trust__factor-head">
                      <span className="report-trust__factor-name">
                        {formatFactorName(factor.name)}
                      </span>
                      <span className="report-trust__factor-score">
                        {Math.round(factor.score)}/100
                        <small>+{factor.contribution.toFixed(1)} pts</small>
                      </span>
                    </div>
                    {factor.explanation && (
                      <p className="report-trust__factor-text">
                        {factor.explanation}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="report-page__actions">
              <Link
                href="/#domain-check-reputation"
                className="report-page__back"
              >
                Check another domain →
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default TrustReportView;
