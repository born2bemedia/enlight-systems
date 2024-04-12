"use client";
import Link from "next/link";
import React from "react";
import { RevealWrapper, RevealList } from "next-reveal";
import Image from "next/image";

function PurposeHero() {
  return (
    <section className="purpose-hero">
      <RevealList
        origin="bottom"
        interval={0}
        delay={0}
        className="images-wrap"
      >
        <div className="image-container">
          <Image
            src={"/images/purpose/purpose-hero.webp"}
            width={720}
            height={720}
          />
        </div>
      </RevealList>
      <div className="_container">
        <div className="purpose-hero__body">
          <RevealWrapper origin="bottom" delay={0}>
            <h1>
              Your needs met: <br />
              The power of <br />
              Enlight platform
            </h1>
          </RevealWrapper>
          <RevealWrapper origin="bottom" delay={0}>
            <p>
              Easy-to-use tools for crypto business: from campaign analytics to
              intuitive testing <br />
              and more. Get a toolkit to make the most of your marketing
            </p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default PurposeHero;
