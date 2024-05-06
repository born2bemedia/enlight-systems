"use client";
import React from "react";
import { RevealList, RevealWrapper } from "next-reveal";

function AboutSecond() {
  return (
    <section className="about-second">
      <div className="_container">
        <div className="about-second__body">
          <RevealWrapper origin="bottom" delay={0}>
            <img src="/images/about/second.png" />
          </RevealWrapper>
          <RevealWrapper origin="bottom" className="right">
            <h2>
              The Genesis <br />
              of Enlight
            </h2>
            <p>
              Enlight was founded by a team of crypto marketing experts who
              recognized the need for a centralised platform to manage and
              optimise marketing campaigns in the crypto space. Drawing from our
              own experiences and challenges, we set out to create a solution to
              streamline campaign management and maximise ROI.
            </p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default AboutSecond;
