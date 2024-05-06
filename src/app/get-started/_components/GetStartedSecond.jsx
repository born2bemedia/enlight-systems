"use client";
import React from "react";
import { RevealWrapper, RevealList } from "next-reveal";

function GetStartedSecond() {
  return (
    <section className="get-second">
      <div className="_container">
        <RevealWrapper origin="bottom">
          <h2>
            For whom <br />
            is our dashboard?
          </h2>
        </RevealWrapper>
        <RevealList
          origin="bottom"
          interval={0}
          delay={0}
          className={`get-second__body`}
        >
          <div>
            <span>01</span>
            <h4>
              Independent <br />
              Marketing Agencies
            </h4>
            <p>
              Tailored for marketing agencies specialising in crypto projects,
              offering comprehensive tools for campaign management, analytics,
              and client reporting.
            </p>
          </div>
          <div>
            <span>02</span>
            <h4>
              In-House <br />
              Marketing Teams
            </h4>
            <p>
              Tailored for marketing agencies specialising in crypto projects,
              offering comprehensive tools for campaign management, analytics,
              and client reporting.
            </p>
          </div>
          <div>
            <span>03</span>
            <h4>
              Crypto <br />
              Project Owners
            </h4>
            <p>
              Ideal for crypto project owners managing their marketing efforts
              independently, offering simple and intuitive interface, essential
              tools for campaign setup, performance tracking, and customer
              engagement.
            </p>
          </div>
          <div>
            <span>04</span>
            <h4>
              Individual <br />
              Marketing Experts
            </h4>
            <p>
              Customised for contract marketing experts working with crypto
              projects, providing flexible solutions for campaign optimization,
              audience insights, and performance monitoring.
            </p>
          </div>
        </RevealList>
      </div>
    </section>
  );
}

export default GetStartedSecond;
