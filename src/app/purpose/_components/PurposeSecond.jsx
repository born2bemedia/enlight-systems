"use client";
import { RevealList } from "next-reveal";
import { useRef, useState, useEffect } from "react";

function PurposeSecond({ rows }) {
  const sectionRef = useRef(null);
  const blockRef = useRef(null);
  const [blockClass, setblockClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && blockRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();

        if (sectionRect.top >= 0) {
          setblockClass("");
        } else if (sectionRect.bottom <= window.innerHeight) {
          setblockClass("is-absolute");
        } else if (
          sectionRect.top < 0 &&
          sectionRect.bottom > window.innerHeight
        ) {
          setblockClass("is-fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="purpose-second" ref={sectionRef}>
      <div className={`fixed-block ${blockClass}`} ref={blockRef}></div>
      <div className="_container">
        <RevealList
          origin="bottom"
          interval={0}
          delay={0}
          className="purpose-second__body"
        >
          {rows.map((row) => (
            <div key={row.id} className="purpose-second__row">
              <div className="left">
                <h3>{row.title}</h3>
              </div>
              <div className="right">
                <span>{row.number}</span>
                <h4>{row.heading}</h4>
                <ul>
                  {row.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </RevealList>
      </div>
    </section>
  );
}

export default PurposeSecond;
