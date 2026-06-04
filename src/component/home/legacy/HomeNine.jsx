"use client";
import { RevealList, RevealWrapper } from "next-reveal";
import Image from "next/image";
import React from "react";

function HomeNine() {
  return (
    <section className="home-nine">
      <div className="_container">
        <div className="home-nine__body">
          <RevealWrapper origin="bottom" className="image-wrap">
            <Image
              src={"/images/home/home-nine.webp"}
              width={620}
              height={350}
            />
          </RevealWrapper>

          <div className="home-nine__col-01">
            <RevealWrapper origin="bottom">
              <h2>
                Estimate your <br />
                potential results <br />
                with Enlight
              </h2>
            </RevealWrapper>
          </div>
          <div className="home-nine__col-02">
            <div>
              <p>Unlock potential marketing budget</p>
              <h3>up to 50% </h3>
            </div>
            <div>
              <p>Increase click-through rate</p>
              <h3>by 30%</h3>
            </div>
            <div>
              <p>Boost return on investment</p>
              <h3>by 40%</h3>
            </div>
            <div>
              <p>Increase customer lifetime value</p>
              <h3>by 50%</h3>
            </div>
            <div>
              <p>Reduce time spent on manual tasks</p>
              <h3>by 70%</h3>
            </div>
            <div>
              <p>Comprehensive customer perspective:</p>
              <h3>360-Degree</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeNine;
