"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

function HomeThird() {
  const sectionRef = useRef(null);
  const blockRef = useRef(null);
  const [blockClass, setblockClass] = useState("");

  /*useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && blockRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const blockRect = blockRef.current.getBoundingClientRect();

        if (sectionRect.top >= 0) {
          // Section has not been reached, block is in default state
          setblockClass("");
        } else if (sectionRect.bottom <= window.innerHeight) {
          // Bottom of the section is at or above the bottom of the viewport
          setblockClass("is-absolute");
        } else if (
          sectionRect.top < 0 &&
          sectionRect.bottom > window.innerHeight
        ) {
          // Section is partially in view, block should be fixed
          setblockClass("is-fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);*/

  return (
    <section className="home-third" ref={sectionRef}>
      <div className="_container">
        <div className="home-third__body">
          <div className="home-third__col-01">
            <h2 className="mobile-header">Leading Crypto Marketing Platform</h2>
            <p className="mobile-subheader">
              Explore a new way of crypto marketing management with our suite of
              adaptable products, designed to flex and scale according to your
              needs.
            </p>
            <div className={`fixed-block ${blockClass}`} ref={blockRef}>
              <h2>
                Leading Crypto <br />
                Marketing Platform
              </h2>
              <p>
                Explore a new way of crypto marketing management with our suite
                of <br />
                adaptable products, designed to flex and scale according to your
                needs.
              </p>
              <div className="image-wrap">
                <div>
                  <Image
                    style={{
                      animation: `floatAnimation 5s infinite ease-in-out`,
                      animationDelay: "0s",
                    }}
                    src={"/images/home/home-third.webp"}
                    width={472}
                    height={528}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="home-third__col-02">
            <div className="column">
              <div>
                <h3>01</h3>
                <h4>Data Analytics and Reporting Module</h4>
                <p>
                  Gain real-time insights from diverse campaigns with automated
                  reporting and customizable alerts, solving the challenges of
                  campaign tracking and report generation.
                </p>
                <Image
                  src={"/images/home/default2.png"}
                  width={588}
                  height={350}
                />
              </div>
              <div>
                <h3>02</h3>
                <h4>Customer Relationship Management Module</h4>
                <p>
                  Prioritise leads and streamline client interactions
                  effortlessly with automated reminders and segmentation tools,
                  addressing issues of inefficient lead management and scattered
                  client information.
                </p>
                <Image
                  src={"/images/home/default2.png"}
                  width={588}
                  height={350}
                />
              </div>
              <div>
                <h3>03</h3>
                <h4>Campaign Management Module</h4>
                <p>
                  Seamlessly design and deploy cross-channel campaigns, automate
                  workflows, and optimise with A/B testing, tackling challenges
                  of inconsistent execution and resource-intensive setup.
                </p>
                <Image
                  src={"/images/home/default2.png"}
                  width={588}
                  height={350}
                />
              </div>
              <div>
                <h3>04</h3>
                <h4>Financial Module</h4>
                <p>
                  Ensure accurate billing and compliance with automated
                  invoicing and revenue tracking, solving issues of delayed
                  billing and financial non-compliance.
                </p>
                <Image
                  src={"/images/home/default2.png"}
                  width={588}
                  height={350}
                />
              </div>
              <div>
                <h3>05</h3>
                <h4>Audience Insights Module</h4>
                <p>
                  Enhance targeting strategies with comprehensive audience data
                  collection and behavioural analysis, addressing challenges of
                  non-specific targeting and fragmented audience insights.
                </p>
                <Image
                  src={"/images/home/default2.png"}
                  width={588}
                  height={350}
                />
              </div>
              <div>
                <h3>06</h3>
                <h4>Automation and Workflow Module</h4>
                <p>
                  Streamline processes with customizable automation and
                  programmatic buying, mitigating risks of human error and slow
                  response to market changes.
                </p>
                <Image
                  src={"/images/home/default2.png"}
                  width={588}
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeThird;
