
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
            <Link href="#">Resources</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Get Started</Link>
            <Link href="#">Quick Contact</Link>
          </nav>

          <div className="header-right">
            <Link href="#" className="login">
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
