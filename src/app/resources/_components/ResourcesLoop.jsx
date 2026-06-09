"use client";

import { RevealList } from "next-reveal";
import Link from "next/link";
import Image from "next/image";
import ResourceCard from "./ResourceCard";
import ResourcesToolPanel from "./ResourcesToolPanel";
import {
  ResourcesCheckingModal,
  ResourcesSpamModal,
} from "./ResourcesDomainModals";
import ResourcesSubscribe from "./ResourcesSubscribe";
import { useDomainCheckFlow } from "@/src/hooks/useDomainCheckFlow";
import { useLandingAuditFlow } from "@/src/hooks/useLandingAuditFlow";
import { LandingAuditModal } from "@/src/component/LandingAuditModal";
import {
  RESOURCES_COMING_SOON,
  RESOURCES_FEATURED,
  RESOURCES_MUST_READ,
  RESOURCES_NEW,
  RESOURCES_POPULAR,
  RESOURCES_TOOLS,
} from "../resourcesData";

const ReadMoreIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M18.636 15.6699L20.352 10.5199C21.852 6.02194 22.602 3.77294 21.414 2.58594C20.227 1.39894 17.978 2.14794 13.479 3.64794L8.32997 5.36394C4.69997 6.57394 2.88497 7.17994 2.36997 8.06694C2.12908 8.48152 2.0022 8.95246 2.0022 9.43194C2.0022 9.91142 2.12908 10.3824 2.36997 10.7969C2.88497 11.6849 4.69997 12.2899 8.32997 13.5009C8.77997 13.6509 9.28697 13.5429 9.62397 13.2099L15.13 7.75494C15.2023 7.67634 15.2899 7.61324 15.3874 7.56945C15.4848 7.52566 15.5901 7.5021 15.697 7.50019C15.8038 7.49827 15.9099 7.51805 16.0089 7.55831C16.1078 7.59858 16.1976 7.6585 16.2727 7.73446C16.3479 7.81041 16.4068 7.90082 16.446 8.00021C16.4852 8.0996 16.5039 8.20591 16.5008 8.31271C16.4977 8.41951 16.473 8.52457 16.4282 8.62156C16.3834 8.71854 16.3193 8.80542 16.24 8.87694L10.824 14.2429C10.6433 14.4276 10.5174 14.6587 10.4602 14.9106C10.403 15.1625 10.4168 15.4254 10.5 15.6699C11.71 19.2999 12.316 21.1159 13.203 21.6319C13.6178 21.8727 14.0889 21.9995 14.5685 21.9995C15.0481 21.9995 15.5192 21.8727 15.934 21.6319C16.821 21.1159 17.425 19.3009 18.636 15.6699Z"
      fill="#0F0F0F"
    />
  </svg>
);

function ResourcesLoop() {
  const spamCheck = useDomainCheckFlow({
    source: "Resources",
    toolType: "domain-spam-scam-check",
    showSpamResult: true,
  });

  const auditCheck = useLandingAuditFlow({
    source: "Resources",
    toolType: "website-communication-audit",
  });

  return (
    <>
      <section className="resources-loop">
        <div className="_container">
          <RevealList
            origin="bottom"
            interval={0}
            className="resources-loop__body"
          >
            <div className="resource-first">
              <div>
                <h2>
                  10 Reasons for Low ROI <br />
                  in Crypto Marketing: <br />
                  Common Pitfalls to Avoid
                </h2>
                <Link
                  href={`/resources/${RESOURCES_FEATURED.slug}`}
                  className="main-button"
                >
                  <span>
                    Read more
                    <ReadMoreIcon />
                  </span>
                </Link>
              </div>
              <Image
                src={`/images/resources/${RESOURCES_FEATURED.image}`}
                width={670}
                height={540}
                alt=""
              />
            </div>

            <ResourcesToolPanel
              title={RESOURCES_TOOLS[0].title}
              description={RESOURCES_TOOLS[0].description}
              formId={RESOURCES_TOOLS[0].formId}
              onCheck={spamCheck.handleDomainCheck}
            />

            <h3>Most popular</h3>
            {RESOURCES_POPULAR.map((item) => (
              <ResourceCard
                key={item.slug}
                title={item.title}
                image={item.image}
                slug={item.slug}
              />
            ))}

            <ResourcesToolPanel
              title={RESOURCES_TOOLS[1].title}
              description={RESOURCES_TOOLS[1].description}
              formId={RESOURCES_TOOLS[1].formId}
              onCheck={auditCheck.handleLandingAudit}
            />

            <h3>New articles</h3>
            {RESOURCES_NEW.map((item) => (
              <ResourceCard
                key={item.title}
                className="half cover"
                title={item.title}
                image={item.image}
                slug={item.slug}
              />
            ))}

            <h3>Coming soon</h3>
            {RESOURCES_COMING_SOON.map((item) => (
              <ResourceCard
                key={item.title}
                className="half cover"
                title={item.title}
                image={item.image}
                comingSoon
              />
            ))}
          </RevealList>
        </div>
      </section>

      <ResourcesSubscribe />

      <section className="resources-loop">
        <div className="_container">
          <RevealList
            origin="bottom"
            interval={0}
            className="resources-loop__body"
          >
            <h3>Must read</h3>
            {RESOURCES_MUST_READ.map((item) => (
              <ResourceCard
                key={item.title}
                className="half cover"
                title={item.title}
                image={item.image}
                slug={item.slug}
                guide={item.guide}
              />
            ))}
          </RevealList>
        </div>
      </section>

      <ResourcesCheckingModal
        open={spamCheck.checkingOpen || auditCheck.checkingOpen}
        loading={spamCheck.checkingOpen || auditCheck.checkingOpen}
        onClose={
          spamCheck.checkingOpen
            ? spamCheck.handleCheckingClose
            : auditCheck.handleCheckingClose
        }
      />
      <ResourcesSpamModal
        open={spamCheck.spamOpen}
        domain={spamCheck.checkResults?.domain || spamCheck.checkedDomain}
        sources={spamCheck.checkResults?.sources}
        status={spamCheck.checkResults?.status}
        statusLabel={spamCheck.checkResults?.statusLabel}
        onClose={spamCheck.closeSpam}
      />
      <LandingAuditModal
        open={auditCheck.reportOpen}
        url={auditCheck.checkedUrl}
        reportUrl={auditCheck.reportUrl}
        onClose={auditCheck.closeReport}
      />
    </>
  );
}

export default ResourcesLoop;
