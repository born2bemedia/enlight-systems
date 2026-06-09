"use client";

import DomainCheckForm from "./DomainCheckForm";
import {
  DomainCheckingModal,
  DomainSpamModal,
} from "@/src/component/DomainCheckModals";
import { useDomainCheckFlow } from "@/src/hooks/useDomainCheckFlow";

function HomeReputation() {
  const {
    checkedDomain,
    checkingOpen,
    spamOpen,
    checkResults,
    handleDomainCheck,
    handleCheckingClose,
    closeSpam,
  } = useDomainCheckFlow({
    source: "Home — Reputation",
    toolType: "domain-reputation",
    showSpamResult: true,
  });

  return (
    <>
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

      <DomainCheckingModal
        open={checkingOpen}
        loading={checkingOpen}
        onClose={handleCheckingClose}
      />
      <DomainSpamModal
        open={spamOpen}
        domain={checkResults?.domain || checkedDomain}
        sources={checkResults?.sources}
        status={checkResults?.status}
        statusLabel={checkResults?.statusLabel}
        onClose={closeSpam}
      />
    </>
  );
}

export default HomeReputation;
