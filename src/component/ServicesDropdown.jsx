"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Link from "next/link";
import React from "react";
import { useState } from "react";

function ServicesDropdown() {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const handleDropdon = () => {
    setDropdownOpened(!dropdownOpened);
  };

  return (
    <>
      <div
        className="dropdown-wrap"
        onMouseEnter={() => setDropdownOpened(true)}
        onMouseLeave={() => setDropdownOpened(false)}
      >
        <Link href="/services">
          Services{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="6"
            viewBox="0 0 11 6"
            fill="none"
          >
            <path
              d="M1.5 1L5.5 5L9.5 1"
              stroke="#F0F0F7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        <div className={`service-dropdown ${dropdownOpened ? 'opened' : ''}`}>
          <div className="_container">
            <div className="service-dropdown__body">
              <Link href="/community-building">
                <img src="/images/services/comunity-building.svg" />
                <span>
                  Community <br />
                  Building
                </span>
              </Link>
              <Link href="/search-visibility-and-traffic">
                <img src="/images/services/search-visibility.svg" />
                <span>
                  Search Visibility <br />
                  and Traffic
                </span>
              </Link>
              <Link href="/reputation-experience-and-expertise">
                <img src="/images/services/reputation.svg" />
                <span>
                  Reputation, <br />
                  Experience <br />
                  and Expertise
                </span>
              </Link>
              <Link href="/branding-solutions">
                <img src="/images/services/branding.svg" />
                <span>
                  Branding <br />
                  Solutions
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesDropdown;
