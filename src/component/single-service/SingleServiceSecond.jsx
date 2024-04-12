"use client";
import React from "react";
import { RevealWrapper, RevealList } from "next-reveal";

function SingleServiceSecond({ title, subtitle, challenges}) {
  return (
    <section className="service-second">
      <div className="_container">
        <RevealWrapper origin="bottom">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        </RevealWrapper>
        <RevealList
          origin="bottom"
          interval={0}
          delay={0}
          className={`service-second__body ${challenges.length > 4 ? 'five-cols' : ''}`}
        >
          {challenges.map((item, index) => (
            <div key={index}>
              <span>{item.id}</span>
              <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
              <p dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          ))}
        </RevealList>
        <RevealWrapper origin="bottom">
        <h3 dangerouslySetInnerHTML={{ __html: subtitle }} />
        </RevealWrapper>
      </div>
    </section>
  );
}

export default SingleServiceSecond;
