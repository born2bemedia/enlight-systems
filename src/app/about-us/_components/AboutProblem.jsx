"use client";

import { RevealWrapper } from "next-reveal";

function AboutProblem() {
  return (
    <section className="about-problem">
      <div className="_container">
        <div className="about-problem__panel">
          <div className="about-problem__coins" aria-hidden="true">
            <img
              className="about-problem__coin about-problem__coin--triangle"
              src="/images/home/calculator-cta/coin-triangle.png"
              alt=""
            />
            <img
              className="about-problem__coin about-problem__coin--btc"
              src="/images/home/calculator-cta/coin-btc.png"
              alt=""
            />
            <img
              className="about-problem__coin about-problem__coin--eth"
              src="/images/home/calculator-cta/coin-eth.png"
              alt=""
            />
            <img
              className="about-problem__coin about-problem__coin--alt"
              src="/images/home/calculator-cta/coin-alt.png"
              alt=""
            />
          </div>

          <RevealWrapper origin="bottom">
            <p className="about-problem__lead">
              The problem became clear.
              <br />
              We started searching for solutions.
            </p>
          </RevealWrapper>
          <RevealWrapper origin="bottom" delay={100}>
            <h2>The market had nothing to offer.</h2>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default AboutProblem;
