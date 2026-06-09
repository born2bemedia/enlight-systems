"use client";

import { RevealWrapper, RevealList } from "next-reveal";
import Image from "next/image";

function PricingHero() {
  return (
    <section className="pricing-hero">
      <div className="_container">
        <RevealWrapper origin="bottom" delay={0}>
          <h1>
            Track your crypto <br />
            marketing performance
          </h1>
        </RevealWrapper>

        <RevealList
          origin="bottom"
          interval={0}
          delay={0}
          className="images-wrap"
        >
          <div className="image-container">
            <Image
              src="/images/pricing/hero-coins.webp"
              width={1386}
              height={953}
              alt=""
              style={{
                animation: "floatAnimation 5s infinite ease-in-out",
                animationDelay: "0s",
              }}
            />
          </div>
          <div className="image-container">
            <Image
              src="/images/pricing/hero.webp"
              width={1532}
              height={913}
              alt=""
            />
          </div>
        </RevealList>
      </div>
    </section>
  );
}

export default PricingHero;
