"use client";
import React from "react";

import ServiceAccordion from "./ServiceAccordion";
import { RevealWrapper } from "next-reveal";

function SingleServiceThird({ title, items }) {
  return (
    <section className="service-third">
      <div className="_container">
        <RevealWrapper origin="bottom">
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
        </RevealWrapper>
        <ServiceAccordion items={items} />
      </div>
    </section>
  );
}

export default SingleServiceThird;
