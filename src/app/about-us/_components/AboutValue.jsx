"use client";

import Image from "next/image";
import { RevealWrapper } from "next-reveal";
import { ABOUT_VALUE_ITEMS } from "../aboutData";

function AboutValue() {
  return (
    <section className="about-value">
      <div className="_container">
        <div className="about-value__panel">
          <RevealWrapper
            origin="bottom"
            delay={100}
            className="about-value__art"
          >
            <Image
              src="/images/home/third-block-image.webp"
              width={592}
              height={510}
              alt=""
            />
          </RevealWrapper>

          <div className="about-value__content">
            <RevealWrapper origin="bottom">
              <h2>
                That is why we built Enlight for
                <br />
                you to:
              </h2>
            </RevealWrapper>
            <ul className="about-value__list">
              {ABOUT_VALUE_ITEMS.map((item) => (
                <li key={item}>
                  <span className="about-value__bullet" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutValue;
