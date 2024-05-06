"use client";
import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AboutFourth() {
  return (
    <section className="about-fourth">
      <div className="_container">
        <div className="about-fourth__body">
          <RevealWrapper origin="bottom" delay={0} className="image-wrap">
            <Image
              src={"/images/home/third-block-image.webp"}
              width={592}
              height={510}
            />
          </RevealWrapper>
          <RevealWrapper origin="bottom" delay={0}>
            <h2>
              The Enlight <br />
              Solution
            </h2>
          </RevealWrapper>
          <RevealWrapper origin="bottom" delay={0}>
            <p>
              The Enlight dashboard is our answer <br />
              to these challenges. It provides:
            </p>
            <ul>
              <li>Real-time analytics and reporting</li>
              <li>Comprehensive lead management and CRM tools</li>
              <li>Audience insights and segmentation</li>
            </ul>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default AboutFourth;
