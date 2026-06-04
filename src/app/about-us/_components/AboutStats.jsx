"use client";

import { RevealWrapper } from "next-reveal";
import { ABOUT_STATS } from "../aboutData";

function AboutStats() {
  return (
    <section className="about-stats">
      <div className="_container">
        <RevealWrapper origin="bottom">
          <h2>What is behind Enlight</h2>
        </RevealWrapper>
        <ul className="about-stats__grid">
          {ABOUT_STATS.map((item) => (
            <li key={item.id} className="about-stats__card">
              <p>
                {item.textBefore} <strong>{item.value}</strong> {item.textAfter}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutStats;
