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
    <ChevronLeft />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="next slick-arrow" onClick={onClick}>
    <ChevronRight />
  </div>
);

function HomeFifth() {
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
    <section className="home-fifth">
      <div className="_container">
        <div className="home-fifth__body">
          <RevealWrapper delay={100} origin="bottom">
            <h2>Effectively solve key marketing <br/>problems every crypto projects faces</h2>

          </RevealWrapper>
          <Slider className="keys-slider" {...slickSettings}>
            <div className="key">
              <div className="key-inner">
                <img src="/images/home/key1.svg" />
                <h3>Inefficient lead management and tracking</h3>
                <p>
                  Poor lead management hampers the conversion process, resulting
                  in missed sales opportunities and decreased revenue potential
                  for the business.
                </p>
              </div>
            </div>
            <div className="key">
              <div className="key-inner">
                <img src="/images/home/key2.svg" />
                <h3>
                  Difficulty tracking multiple campaigns across different
                  platforms
                </h3>
                <p>
                  Without centralised campaign tracking, businesses struggle to
                  assess the overall effectiveness of their marketing efforts,
                  leading to disjointed strategies and missed opportunities for
                  optimization.
                </p>
              </div>
            </div>
            <div className="key">
              <div className="key-inner">
                <img src="/images/home/key3.svg" />
                <h3>Inaccurate or delayed billing for advertising services</h3>
                <p>
                  Inaccurate billing and delayed invoicing disrupt cash flow and
                  hinder financial planning, impacting the business's ability to
                  allocate resources effectively and invest in growth
                  initiatives.
                </p>
              </div>
            </div>
            <div className="key">
              <div className="key-inner">
                <img src="/images/home/key4.svg" />
                <h3>
                  Inconsistent campaign execution across different channels
                </h3>
                <p>
                  Inconsistent campaign execution leads to fragmented brand
                  messaging and decreased campaign effectiveness, hindering the
                  business's ability to establish a strong and cohesive brand
                  presence.
                </p>
              </div>
            </div>
            <div className="key">
              <div className="key-inner">
                <img src="/images/home/key5.svg" />
                <h3>Non-specific targeting leading to lower campaign ROI</h3>
                <p>
                  Without precise audience targeting, marketing campaigns fail
                  to resonate with the intended audience, resulting in lower ROI
                  and wasted advertising spending for the business.
                </p>
              </div>
            </div>
            <div className="key">
              <div className="key-inner">
                <img src="/images/home/key6.svg" />
                <h3>Inefficient manual processes consume staff time</h3>
                <p>
                  Manual processes drain valuable time and resources, reducing
                  productivity and hindering the business's ability to focus on
                  strategic initiatives and growth opportunities.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default HomeFifth;
