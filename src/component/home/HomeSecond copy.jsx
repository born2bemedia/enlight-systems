"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomPrevArrow = ({ onClick }) => (
  <div className="prev slick-arrow" onClick={onClick}>
    <ChevronLeft/>
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="next slick-arrow" onClick={onClick}>
    <ChevronRight/>
  </div>
);

function HomeSecond() {
  const slickSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="home-second">
      <div className="_container">
        <div className="home-second__body">
          <RevealWrapper delay={100} origin="bottom">
            <h2>Leading Crypto Marketing Platform</h2>
            <h4>
              Explore a new way of crypto marketing management with our suite of
              <br></br>adaptable products, designed to flex and scale according
              to your needs.
            </h4>
          </RevealWrapper>
          <Slider className="ways-slider" {...slickSettings}>
            <div className="way">
              <div className="way-inner">
                <Image
                  width={370}
                  height={250}
                  style={{ width: "100%", height: "auto" }}
                  src={"/images/home/default.png"}
                />
                <h3>
                  Data Analytics <br />
                  and Reporting Module
                </h3>
                <p>
                  Gain real-time insights from diverse campaigns with automated
                  reporting and customizable alerts, solving the challenges of
                  campaign tracking and report generation.
                </p>
              </div>
            </div>
            <div className="way">
              <div className="way-inner">
                <Image
                  width={370}
                  height={250}
                  style={{ width: "100%", height: "auto" }}
                  src={"/images/home/default.png"}
                />
                <h3>
                  Customer Relationship <br />
                  Management Module
                </h3>
                <p>
                  Prioritise leads and streamline client interactions
                  effortlessly with automated reminders and segmentation tools,
                  addressing issues of inefficient lead management and scattered
                  client information.
                </p>
              </div>
            </div>
            <div className="way">
              <div className="way-inner">
                <Image
                  width={370}
                  height={250}
                  style={{ width: "100%", height: "auto" }}
                  src={"/images/home/default.png"}
                />
                <h3>
                  Campaign <br />
                  Management Module
                </h3>
                <p>
                  Seamlessly design and deploy cross-channel campaigns, automate
                  workflows, and optimise with A/B testing, tackling challenges
                  of inconsistent execution and resource-intensive setup.
                </p>
              </div>
            </div>
            <div className="way">
              <div className="way-inner">
                <Image
                  width={370}
                  height={250}
                  style={{ width: "100%", height: "auto" }}
                  src={"/images/home/default.png"}
                />
                <h3>Financial Module</h3>
                <p>
                  Ensure accurate billing and compliance with automated
                  invoicing and revenue tracking, solving issues of delayed
                  billing and financial non-compliance.
                </p>
              </div>
            </div>
            <div className="way">
              <div className="way-inner">
                <Image
                  width={370}
                  height={250}
                  style={{ width: "100%", height: "auto" }}
                  src={"/images/home/default.png"}
                />
                <h3>Audience Insights Module</h3>
                <p>
                  Enhance targeting strategies with comprehensive audience data
                  collection and behavioural analysis, addressing challenges of
                  non-specific targeting and fragmented audience insights.
                </p>
              </div>
            </div>
            <div className="way">
              <div className="way-inner">
                <Image
                  width={370}
                  height={250}
                  style={{ width: "100%", height: "auto" }}
                  src={"/images/home/default.png"}
                />
                <h3>
                  Automation <br />
                  and Workflow Module
                </h3>
                <p>
                  Streamline processes with customizable automation and
                  programmatic buying, mitigating risks of human error and slow
                  response to market changes.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default HomeSecond;
