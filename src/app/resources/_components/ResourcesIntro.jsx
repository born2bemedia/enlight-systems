"use client";

import { RevealWrapper } from "next-reveal";

function ResourcesIntro() {
  return (
    <section className="resources-intro">
      <div className="_container">
        <div className="resources-intro__panel">
          <div className="resources-intro__coins" aria-hidden="true">
            <img
              className="resources-intro__coin resources-intro__coin--triangle"
              src="/images/home/calculator-cta/coin-triangle.png"
              alt=""
            />
            <img
              className="resources-intro__coin resources-intro__coin--btc"
              src="/images/home/calculator-cta/coin-btc.png"
              alt=""
            />
            <img
              className="resources-intro__coin resources-intro__coin--alt"
              src="/images/home/calculator-cta/coin-alt.png"
              alt=""
            />
            <img
              className="resources-intro__coin resources-intro__coin--eth"
              src="/images/home/calculator-cta/coin-eth.png"
              alt=""
            />
          </div>

          <div className="resources-intro__content">
            <RevealWrapper origin="bottom" delay={0}>
              <h2>
                Crypto marketing is expensive, fragile, and hard to control.
              </h2>
            </RevealWrapper>
            <RevealWrapper origin="bottom" delay={100}>
              <p>
                We&apos;ve built practical guides and checklists to improve trust,
                conversion, and performance across your funnel.
              </p>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResourcesIntro;
