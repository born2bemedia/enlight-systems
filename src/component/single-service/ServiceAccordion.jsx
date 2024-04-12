"use client";
import { useState, useRef, useEffect } from "react";
import { RevealList } from "next-reveal";

const ServiceAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [closing, setClosing] = useState(false);
  const contentRef = useRef([]);
  const itemRef = useRef([]);

  useEffect(() => {
    setOpenIndex(null);
    contentRef.current = contentRef.current.slice(0, items.length);
  }, [items]);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    console.log(itemRef.current[index]?.offsetTop);
  };

  return (
    <RevealList origin="bottom" interval={0} delay={0} className="accordion">
      {items.map((item, index) => (
        <>

          <div
            data-id={openIndex}
            data-key={item.id}
            key={index}
            className={`accordion__item ${openIndex === index ? "opened" : ""}`}
            onClick={() => toggleItem(index)}
         
          >
            <div className="accordion__title">
              <h4 className="accordion__title-text">
                <img src={`/images/single-service/${item.icon}`} alt="^" />
                <span>{item.title}</span>
              </h4>
              <img src="/images/green-arrow.svg" alt="^" />
            </div>
            <div
              className="accordion__content"
              ref={(el) => (contentRef.current[index] = el)}
              style={{
                maxHeight:
                  openIndex === index
                    ? `${contentRef.current[index]?.scrollHeight}px`
                    : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
            </div>
          </div>
        </>
      ))}
    </RevealList>
  );
};

export default ServiceAccordion;
