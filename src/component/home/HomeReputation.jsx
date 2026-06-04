"use client";

import DomainCheckForm from "./DomainCheckForm";
import { submitDomainCheck } from "@/src/utils/submitForm";

function HomeReputation() {
  const handleDomainCheck = (domain) =>
    submitDomainCheck({
      domain,
      source: "Home — Reputation",
      toolType: "domain-reputation",
    });
  return (
    <section className="home-reputation">
      <div className="_container">
        <div className="home-domain-panel">
          <div className="home-reputation__content">
            <h2>Reputation matters</h2>
            <p className="home-domain-panel__text">
              If your domain is flagged as spam or scam, users abandon
              registration, ad performance drops, and acquisition costs increase.
            </p>
          </div>
          <DomainCheckForm
            id="domain-check-reputation"
            onSubmit={handleDomainCheck}
          />
        </div>
      </div>
    </section>
  );
}

export default HomeReputation;
