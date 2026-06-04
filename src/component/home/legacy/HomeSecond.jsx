"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

function HomeSecond() {
  return (
    <section className="home-second">
      <div className="_container">
        <div className="home-second__body">
          <div className="home-second__col-01">
            <RevealWrapper origin="bottom">
              <h2>
                Effective Crypto <br />
                Marketing Strategies
              </h2>
              <h4>
                Navigating the complexities of crypto marketing, where stringent
                regulations and audience scepticism abound, requires specialised
                expertise. Standard strategies often fall short. Enlight offers
                a tailored approach to empowering your project to overcome
                obstacles and thrive in crypto.
              </h4>
            </RevealWrapper>
          </div>
          <div className="home-second__col-02">
            <RevealWrapper origin="bottom">
              <h3>Average Marketing KPIs</h3>
              <div className="row">
                <div>
                  <span>
                    Average <br />
                    CPC
                  </span>
                  <h5>7 EUR</h5>
                </div>
                <div>
                  <span>
                    Average <br />
                    Conversion Rate
                  </span>
                  <h5>1.7%</h5>
                </div>
                <div>
                  <span>
                    Average <br />
                    CPL
                  </span>
                  <h5>40 EUR</h5>
                </div>
                
              </div>
              <p>
                These metrics underscore the inefficiency of traditional
                marketing approaches, which often incur high costs and drain
                budgets without delivering substantial returns.
              </p>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSecond;
