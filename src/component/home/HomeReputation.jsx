"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DomainCheckForm from "./DomainCheckForm";
import { formatDomainLabel } from "@/src/lib/domainCheckData";

function HomeReputation() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleDomainCheck = (input) => {
    const domain = formatDomainLabel(input);

    if (!domain) {
      setError("Enter a valid domain, e.g. example.com");
      return;
    }

    setError(null);
    router.push(`/trust-report?domain=${encodeURIComponent(domain)}`);
  };

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

        {error && (
          <div
            className="home-reputation__status home-reputation__status--error"
            role="alert"
          >
            <p>{error}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default HomeReputation;
