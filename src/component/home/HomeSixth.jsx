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

function HomeSixth() {
  const slickSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: true,
    fade: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className="home-sixth">
      <div className="_container">
        <RevealWrapper origin="bottom">
          <h2>
          Enlight streamlines core <br/>marketing processes
          </h2>
        </RevealWrapper>
        <div className="home-sixth__body">
          <Slider className="core-slider" {...slickSettings}>
            <div>
              <div className="core">
                <div>
                  <h3>
                  Collect data from various campaigns and provide real-time analytics and insights.
                  </h3>
                  <ul>
                    <li>Real-time campaign monitoring</li>
                    <li>Automated report generation</li>
                    <li>Customisable KPI alerts</li>
                  </ul>
                </div>
                <Image
                  src="/images/home/default.png"
                  width={590}
                  height={350}
                />
              </div>
            </div>
            <div>
              <div className="core">
                <div>
                  <h3>
                    Manage leads, customer interactions and streamline
                    communication with clients.
                  </h3>
                  <ul>
                    <li>Lead scoring and prioritisation</li>
                    <li>Automated follow-up reminders.</li>
                    <li>Audience segmentation tools</li>
                  </ul>
                </div>
                <Image
                  src="/images/home/default.png"
                  width={590}
                  height={350}
                />
              </div>
            </div>
            <div>
              <div className="core">
                <div>
                  <h3>
                    Design, deploy, and manage advertising campaigns across
                    various channels.
                  </h3>
                  <ul>
                    <li>Cross-platform campaign creation tools.</li>
                    <li>Workflow automation for approvals and launches.</li>
                    <li>Integrated ad builder and A/B testing.</li>
                  </ul>
                </div>
                <Image
                  src="/images/home/default.png"
                  width={590}
                  height={350}
                />
              </div>
            </div>
            <div>
              <div className="core">
                <div>
                  <h3>Handle billing, invoicing, and financial tracking.</h3>
                  <ul>
                    <li>
                      Automated invoicing, revenue and cost tracking with profit
                      analysis.
                    </li>
                    <li>Compliance management.</li>
                    <li>Accounting software integration.</li>
                  </ul>
                </div>
                <Image
                  src="/images/home/default.png"
                  width={590}
                  height={350}
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default HomeSixth;
