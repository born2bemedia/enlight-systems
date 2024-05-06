"use client";
import Link from "next/link";
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
            src={"/images/about/about-first.webp"}
            width={816}
            height={470}
            alt="about-first"
          />
        </div>
        <div className="image-container">
          <Image
            src={"/images/about/coins-hero.webp"}
            width={625}
            height={323}
            alt="coins-hero"
            style={{
              animation: `floatAnimation 5s infinite ease-in-out`,
              animationDelay: "0s",
            }}
          />
        </div>
      </RevealList>
      <div className="_container">
        <div className="about-first__body">
          <RevealWrapper origin="bottom" delay={0}>
            <h1>
              Empowering <br />
              crypto marketers
            </h1>
          </RevealWrapper>
          <RevealWrapper origin="bottom" delay={0}>
            <p>Our journey</p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default AboutFirst;
