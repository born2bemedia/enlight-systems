"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DomainCheckForm from "./DomainCheckForm";
import { createSiteReport } from "@/src/lib/analysisApi";
import { formatPageUrl } from "@/src/lib/webAnatomy";

const COLUMNS = [
  {
    title: "Value Proposition",
    score: "56",
    items: [
      "Add numbers or timeframes to core promise",
      "Support differentiators with stats, visuals, or evidence",
      "Explicitly contrast with spreadsheets and manual workflows",
    ],
  },
  {
    title: "Copywriting",
    score: "59",
    items: [
      "Address price, setup, security, integrations, switching concerns",
      "Show clear before-and-after transformation or comparison",
      "Add lower-commitment CTA like demo or case study",
    ],
  },
  {
    title: "Trust & Credibility",
    score: "9",
    items: [
      "Show quantified outcome metrics or improvement examples",
      "Add testimonials showing user pain and outcome",
      "Fix grammar, spacing, and duplicated headings",
    ],
  },
];

function HomeContent() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSiteReport = async (input) => {
    const url = formatPageUrl(input);

    if (!url) {
      setError("Enter a valid URL, e.g. https://example.com");
      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      const created = await createSiteReport(url);
      router.push(`/report/${created.job_id}`);
    } catch (err) {
      console.error("Site report request failed:", err);
      setError(err?.message || "Could not start the analysis.");
      setSubmitting(false);
    }
  };

  return (
    <section className="home-content">
      <div className="_container">
        <h2>Content means more than you think</h2>

        <div className="home-content__columns">
          {COLUMNS.map((column) => (
            <div key={column.title} className="home-content__column">
              <div className="home-content__card-head">
                <h3>{column.title}</h3>
                <p className="home-content__score">{column.score} NEEDS WORK</p>
              </div>
              <ul className="home-content__list">
                {column.items.map((item) => (
                  <li key={item}>
                    <Image
                      src="/images/home/content-item-icon.png"
                      width={24}
                      height={24}
                      alt=""
                      aria-hidden="true"
                    />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="home-domain-panel home-content__cta">
          <p className="home-domain-panel__text">
            Unclear messaging, weak CTAs, and confusing wording are among the main
            reasons crypto funnels fail to convert users.
          </p>
          <DomainCheckForm
            id="domain-check-content"
            placeholder="https://..."
            onSubmit={handleSiteReport}
          />
        </div>

        {submitting && (
          <p className="home-content__status" role="status">
            Submitting your page for analysis…
          </p>
        )}

        {error && (
          <div
            className="home-content__status home-content__status--error"
            role="alert"
          >
            <p>{error}</p>
            <p className="home-content__status-hint">
              Check the URL and try again.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default HomeContent;
