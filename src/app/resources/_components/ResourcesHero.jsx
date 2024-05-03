"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";

function ResourcesHero() {
  return (
    <section className="resources-hero">
      <div className="_container">
        <RevealWrapper origin="bottom" delay={0}>
          <h1>
            Crypto marketing resources: <br />
            Your knowledge and insights hub
          </h1>
        </RevealWrapper>
        <RevealWrapper origin="bottom" delay={0}>
          <p>
            Valuable insights, expert articles, platform tutorials, and industry
            news, <br />
            ensuring you stay ahead in the dynamic world of crypto marketing.
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default ResourcesHero;
