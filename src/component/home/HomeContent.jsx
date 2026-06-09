"use client";

import Image from "next/image";
import DomainCheckForm from "./DomainCheckForm";
import { DomainCheckingModal } from "@/src/component/DomainCheckModals";
import { LandingAuditModal } from "@/src/component/LandingAuditModal";
import { useLandingAuditFlow } from "@/src/hooks/useLandingAuditFlow";

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
  const {
    checkedUrl,
    checkingOpen,
    reportOpen,
    reportUrl,
    handleLandingAudit,
    handleCheckingClose,
    closeReport,
  } = useLandingAuditFlow({
    source: "Home — Content",
    toolType: "landing-page-audit",
  });

  return (
    <>
    <section className="home-content">
      <div className="_container">
        <h2>Content means more than you think</h2>

        <div className="home-content__columns">
          {COLUMNS.map((column) => (
            <div key={column.title} className="home-content__column">
              <div className="home-content__card-head">
                <h3>{column.title}</h3>
                <p className="home-content__score">
                  {column.score} NEEDS WORK
                </p>
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
            onSubmit={handleLandingAudit}
          />
        </div>
      </div>
    </section>

      <DomainCheckingModal
        open={checkingOpen}
        loading={checkingOpen}
        onClose={handleCheckingClose}
      />
      <LandingAuditModal
        open={reportOpen}
        url={checkedUrl}
        reportUrl={reportUrl}
        onClose={closeReport}
      />
    </>
  );
}

export default HomeContent;
