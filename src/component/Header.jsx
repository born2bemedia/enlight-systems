
import React from "react";
import Link from "next/link";
import "@/public/scss/header.scss";
import MobileMenu from "./MobileMenu";

import ServicesDropdown from "./ServicesDropdown";

function Header() {
  

  return (
    <header>
      <div className="_container">
        <div className="head-wrap">
          <Link href="/">
            <img alt="logo" src="/logo.svg" />
          </Link>
          <nav>
            <Link href="/purpose">Purposes</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/get-started">Get Started</Link>
            <Link href="/about-us">About us</Link>
            <Link href="/quick-contact">Quick Contact</Link>
            <Link href="/contact-us">Contact Us</Link>
          </nav>

          <div className="header-right">
            <Link href="/login" className="login">
              Log In
            </Link>

            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
