"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

function PurposeSecond() {
  const sectionRef = useRef(null);
  const blockRef = useRef(null);
  const [blockClass, setblockClass] = useState("");

  useEffect(() => {
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
  }, []);

  return (
    <section className="purpose-second" ref={sectionRef}>
      <div className={`fixed-block ${blockClass}`} ref={blockRef}></div>
      <div className="_container">
        <RevealList
          origin="bottom"
          interval={0}
          delay={0}
          className={"purpose-second__body"}
        >
          <div className="purpose-second__row">
            <div className="left">
              <h3>
                Work with <br />
                target <br />
                audience
              </h3>
            </div>
            <div className="right">
              <span>01</span>
              <h4>
                Engage with your audience more effectively: access comprehensive
                insights, segment your audience effectively, and personalise
                your campaigns.
              </h4>
              <ul>
                <li>
                  Enlight increases campaign ROI by enabling precise targeting
                  and personalization.
                </li>
                <li>
                  Our platform provides insights into audience behaviour and
                  preferences, enhancing campaign effectiveness.
                </li>
                <li>
                  It facilitates a unified view of the customer across channels,
                  improving overall marketing strategy.
                </li>
              </ul>
            </div>
          </div>

          <div className="purpose-second__row">
            <div className="left">
              <h3>
                Manage <br />
                marketing <br />
                campaigns
              </h3>
            </div>
            <div className="right">
              <span>02</span>
              <h4>
                Simplify campaign management: design, deploy, and track
                campaigns across channels effortlessly.
              </h4>
              <ul>
                <li>
                  Enlight ensures consistent campaign execution with
                  cross-platform creation tools.
                </li>
                <li>
                  It saves resources through workflow automation and integrated
                  ad builders.
                </li>
                <li>
                  Enlight improves targeting and personalization with A/B
                  testing environments and customization options.
                </li>
              </ul>
            </div>
          </div>

          <div className="purpose-second__row">
            <div className="left">
              <h3>
                Manage <br />
                customers
              </h3>
            </div>
            <div className="right">
              <span>03</span>
              <h4>
                Exclude guesswork from your customer relationship tasks. Make
                informed decisions that will boost CTR and revenue.
              </h4>
              <ul>
                <li>
                  Our platform improves lead management efficiency with
                  automated reminders and prioritisation.
                </li>
                <li>
                  The platform facilitates better client relationships through
                  centralised interaction history.
                </li>
                <li>
                  Enlight enables segmentation for targeted marketing efforts,
                  improving client lifecycle measurement.
                </li>
              </ul>
            </div>
          </div>

          <div className="purpose-second__row">
            <div className="left">
              <h3>
                Manage <br />
                budgets
              </h3>
            </div>
            <div className="right">
              <span>04</span>
              <h4>
                Streamline budget management: easily track, allocate, and
                analyse your budgets.
              </h4>
              <ul>
                <li>
                  Enlight prevents inaccuracies and delays in billing with
                  automated invoicing based on campaign milestones.
                </li>
                <li>
                  The platform simplifies reconciliation of campaign costs and
                  revenues through revenue and cost tracking.
                </li>
                <li>
                  Enlight mitigates risks of financial non-compliance with
                  compliance management features.
                </li>
              </ul>
            </div>
          </div>

          <div className="purpose-second__row">
            <div className="left">
              <h3>
                Analyse <br />
                project's <br />
                performance
              </h3>
            </div>
            <div className="right">
              <span>05</span>
              <h4>Get better insights to drive your crypto project growth.</h4>
              <ul>
                <li>
                  Enlight simplifies tracking of multiple campaigns across
                  different platforms.
                </li>
                <li>
                  The platform saves time with automated report generation.
                </li>
                <li>
                  Our toolkit enables quick adjustments of strategies based on
                  real-time performance data.
                </li>
              </ul>
            </div>
          </div>
        </RevealList>
      </div>
    </section>
  );
}

export default PurposeSecond;
