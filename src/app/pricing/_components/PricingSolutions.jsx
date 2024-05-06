"use client";
import React, { useState } from "react";
import { RevealWrapper, RevealList } from "next-reveal";
import FormPopup from "@/src/component/FormPopup";

function PricingSolutions() {
  const [popupOpened, setPopupOpened] = useState(false);
  const [solution, setSolution] = useState('');

  const handlePopup = (title) => {
    setSolution(`${title} Order`);
    setPopupOpened(!popupOpened);
    
  };
  return (
    <>
      <section className="pricing-solutions">
        <div className="_container">
          <RevealWrapper origin="bottom">
            <h2>Explore Enlight pricing solutions</h2>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <p>
              Our pricing tiers are tailored to the specific needs of crypto
              projects. Based on our analysis of over 10,000 projects and <br />
              marketing campaigns, we've developed packages to suit various
              project requirements.
            </p>
          </RevealWrapper>
          <RevealList
            origin="bottom"
            interval={0}
            className="pricing-solutions__body"
          >
            <div className="column">
              <div className="col-header invisible"></div>
              <div className="module-title">
                Data Analytics and Reporting Module
              </div>
              <div className="module-title">
                Customer Relationship Management (CRM) Module
              </div>
              <div className="module-title">Campaign Management Module</div>
              <div className="module-title">Financial Module</div>
              <div className="module-title">Audience Insights Module</div>
              <div className="module-title">Automation and Workflow Module</div>
              <div className="module-title">Integration Module</div>
              <div className="module-title">Compliance and Security Module</div>
            </div>
            <div className="column">
              <div className="col-header">
                <h3>Basic</h3>
                <h4>
                  From <span>€50.000</span>
                </h4>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Data Analytics and Reporting Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Customer Relationship Management (CRM) Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Campaign Management Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Financial Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/uncheck.svg" />
                <span>Audience Insights Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/uncheck.svg" />
                <span>Automation and Workflow Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/uncheck.svg" />
                <span>Integration Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/uncheck.svg" />
                <span>Compliance and Security Module</span>
              </div>
              <button className="main-button" onClick={() => handlePopup('Basic')}>
                <span>Order now</span>
              </button>
            </div>
            <div className="column">
              <div className="col-header">
                <h3>Standard</h3>
                <h4>
                  From <span>€70.000</span>
                </h4>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Data Analytics and Reporting Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Customer Relationship Management (CRM) Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Campaign Management Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Financial Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Audience Insights Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Automation and Workflow Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Integration Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/uncheck.svg" />
                <span>Compliance and Security Module</span>
              </div>
              <button className="main-button" onClick={() => handlePopup('Standard')}>
                <span>Order now</span>
              </button>
            </div>
            <div className="column">
              <div className="col-header">
                <h3>Advanced</h3>
                <h4>
                  From <span>€100.000</span>
                </h4>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Data Analytics and Reporting Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Customer Relationship Management (CRM) Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Campaign Management Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Financial Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Audience Insights Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Automation and Workflow Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Integration Module</span>
              </div>
              <div className="module-title check">
                <img src="/images/pricing/check.svg" />
                <span>Compliance and Security Module</span>
              </div>
              <button className="main-button" onClick={() => handlePopup('Advanced')}>
                <span>Order now</span>
              </button>
            </div>
            <div className="column">
              <div className="col-header">
                <h3>Custom</h3>
                <h4>
                  <span>Price on request</span>
                </h4>
              </div>
              <div className="module-title custom">
                Enlight offers flexibility to tailor your dashboard according to
                your specific needs. Simply send us a request with the modules
                you require, and we will provide you with a personalised offer
                to create a custom dashboard that meets your unique
                requirements.
              </div>
              <button className="main-button" onClick={() => handlePopup('Custom')}>
                <span>Order now</span>
              </button>
            </div>
          </RevealList>
        </div>
      </section>
      {popupOpened && <FormPopup solutionTitle={solution} closePopup={() => handlePopup()} />}
    </>
  );
}

export default PricingSolutions;
