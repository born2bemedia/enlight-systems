"use client";

import React from "react";
import { RevealWrapper, RevealList } from "next-reveal";
import Image from "next/image";

function AboutFirst() {
  return (
    <section className="about-first">
      <RevealList
        origin="bottom"
        interval={100}
        delay={0}
        className="images-wrap"
      >
        <div className="image-container">
          <Image
            src="/images/about/about-first.webp"
            width={816}
            height={470}
            alt=""
          />
        </div>
        <div className="image-container">
          <Image
            src="/images/about/coins-hero.webp"
            width={625}
            height={323}
            alt=""
            style={{
              animation: "floatAnimation 5s infinite ease-in-out",
              animationDelay: "0s",
            }}
          />
        </div>
      </RevealList>
      <div className="_container">
        <div className="about-first__body">
          <RevealWrapper origin="bottom" delay={0}>
            <h1>
              The story behind <span className="about-first__brand">Enlight</span>
            </h1>
          </RevealWrapper>
          <RevealWrapper origin="bottom" delay={100}>
            <p className="about-first__lead">
              Why we built a different approach to crypto marketing.
            </p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default AboutFirst;
