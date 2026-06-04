"use client";
import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RevealWrapper } from "next-reveal";

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

function HomeSeven() {
  const slickSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
    fade: true,
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
    <section className="home-seven">
      <div className="_container">
        <div className="home-seven__body">
          <RevealWrapper origin="bottom">
            <h2>
              Enlight solves key marketing <br />
              problems every crypto project faces
            </h2>
          </RevealWrapper>
          <Slider className="problems-slider" {...slickSettings}>
            <div className="problem">
              <div className="problem-inner">
                <Image
                  src={"/images/home/problem1.webp"}
                  width={370}
                  height={235}
                />
                <div className="left">
                  <h3>
                    Low Brand
                    <br />
                    Awareness
                  </h3>
                </div>
                <div className="right">
                  <div>
                    <img src="/images/home/problem.svg" />
                    <h4>Problem</h4>
                    <p>
                      Your crypto project isn't getting the attention it
                      deserves, struggling to stand out in the crowded market.
                    </p>
                  </div>
                  <div>
                    <img src="/images/home/solution.svg" />
                    <h4>Enlight Solution</h4>
                    <p>
                      We'll get your project noticed with tailored content,
                      influencer shoutouts, and features in top-tier media
                      outlets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="problem">
              <div className="problem-inner">
                <Image
                  src={"/images/home/problem2.webp"}
                  width={370}
                  height={235}
                />
                <div className="left">
                  <h3>
                    Failing to Comply <br />
                    with Evolving <br />
                    Regulations
                  </h3>
                </div>
                <div className="right">
                  <div>
                    <img src="/images/home/problem.svg" />
                    <h4>Problem</h4>
                    <p>
                      Navigating the ever-changing regulatory landscape feels
                      like wandering in a maze, risking compliance missteps.
                    </p>
                  </div>
                  <div>
                    <img src="/images/home/solution.svg" />
                    <h4>Enlight Solution</h4>
                    <p>
                      We'll help you stay on the right side of the law with
                      compliant content strategies and legal guidance tailored
                      to the crypto industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="problem">
              <div className="problem-inner">
                <Image
                  src={"/images/home/problem3.webp"}
                  width={370}
                  height={235}
                />
                <div className="left">
                  <h3>
                    Audience <br />
                    Doubt
                  </h3>
                </div>
                <div className="right">
                  <div>
                    <img src="/images/home/problem.svg" />
                    <h4>Problem</h4>
                    <p>
                      People aren't fully buying into your project, questioning
                      its credibility and reliability.
                    </p>
                  </div>
                  <div>
                    <img src="/images/home/solution.svg" />
                    <h4>Enlight Solution</h4>
                    <p>
                      We'll build trust and credibility through engaging
                      content, influencer endorsements, and stories that
                      resonate with your audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="problem">
              <div className="problem-inner">
                <Image
                  src={"/images/home/problem4.webp"}
                  width={370}
                  height={235}
                />
                <div className="left">
                  <h3>Strategies</h3>
                </div>
                <div className="right">
                  <div>
                    <img src="/images/home/problem.svg" />
                    <h4>Problem</h4>
                    <p>
                      Your marketing efforts are falling flat, wasting time and
                      resources without driving real results.
                    </p>
                  </div>
                  <div>
                    <img src="/images/home/solution.svg" />
                    <h4>Enlight Solution</h4>
                    <p>
                      Let's revamp your strategy with data-driven insights,
                      multi-channel integrations, and continuous optimization
                      for better ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="problem">
              <div className="problem-inner">
                <Image
                  src={"/images/home/problem5.webp"}
                  width={370}
                  height={235}
                />
                <div className="left">
                  <h3>
                    Limited Media
                    <br />
                    Exposure
                  </h3>
                </div>
                <div className="right">
                  <div>
                    <img src="/images/home/problem.svg" />
                    <h4>Problem</h4>
                    <p>
                      Your project isn't getting the media attention it
                      deserves, struggling to make waves in the industry.
                    </p>
                  </div>
                  <div>
                    <img src="/images/home/solution.svg" />
                    <h4>Enlight Solution</h4>
                    <p>
                      We'll boost your project's visibility with guest posts,
                      media mentions, and influencer partnerships that put you
                      in the spotlight.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="problem">
              <div className="problem-inner">
                <Image
                  src={"/images/home/problem6.webp"}
                  width={370}
                  height={235}
                />
                <div className="left">
                  <h3>
                    Poor Campaign <br />
                    Tracking <br />
                    and Analysis
                  </h3>
                </div>
                <div className="right">
                  <div>
                    <img src="/images/home/problem.svg" />
                    <h4>Problem</h4>
                    <p>
                      You're flying blind with your marketing campaigns, unable
                      to measure performance or make informed decisions.
                    </p>
                  </div>
                  <div>
                    <img src="/images/home/solution.svg" />
                    <h4>Enlight Solution</h4>
                    <p>
                      Gain clarity with our intuitive dashboard, providing
                      real-time insights and analytics to track progress and
                      optimise strategies for success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default HomeSeven;
