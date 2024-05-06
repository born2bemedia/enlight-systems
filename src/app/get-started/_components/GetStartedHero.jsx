"use client";
import Link from "next/link";
import React from "react";
import { RevealWrapper, RevealList } from "next-reveal";
import Image from "next/image";

function GetStartedHero() {
  return (
    <section className={`get-hero`}>
      <RevealList
        origin="bottom"
        interval={0}
        delay={0}
        className="images-wrap"
      >
        <div className="image-container">
          <Image
            src={"/images/get-started/get-started-hero.webp"}
            width={816}
            height={470}
          />
        </div>
        <div className="image-container">
          <Image
            src={`/images/get-started/get-started-coins.webp`}
            width={625}
            height={323}
            style={{
              animation: `floatAnimation 5s infinite ease-in-out`,
              animationDelay: "0s",
            }}
          />
        </div>
      </RevealList>
      <div className="_container">
        <div className="service-hero__body">
          <RevealWrapper origin="bottom" delay={0}>
            <h1>
              Welcome <br />
              to Enlight!
            </h1>
          </RevealWrapper>
          <RevealWrapper origin="bottom" delay={0}>
            <p>
              You are one step away from better management <br />
              of your crypto marketing!
            </p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default GetStartedHero;
