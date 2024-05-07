"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileMenu() {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname();

  const menuOpen = () => {
    setOpened(!opened);
  };

  useEffect(() => {
    setOpened(false);
  }, [pathname]);

  return (
    <>
      <span onClick={() => menuOpen()} className="mobile-menu-button">
        {!opened ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_9_950)">
              <path
                d="M8.57143 0H1.71429C0.767543 0 0 0.767543 0 1.71429V8.57143C0 9.51817 0.767543 10.2857 1.71429 10.2857H8.57143C9.51817 10.2857 10.2857 9.51817 10.2857 8.57143V1.71429C10.2857 0.767543 9.51817 0 8.57143 0ZM6.85714 6.85714H3.42857V3.42857H6.85714V6.85714Z"
                fill="#97D80F"
              />
              <path
                d="M8.57143 13.7144H1.71429C0.767543 13.7144 0 14.4819 0 15.4286V22.2858C0 23.2325 0.767543 24.0001 1.71429 24.0001H8.57143C9.51817 24.0001 10.2857 23.2325 10.2857 22.2858V15.4286C10.2857 14.4819 9.51817 13.7144 8.57143 13.7144ZM6.85714 20.5715H3.42857V17.1429H6.85714V20.5715Z"
                fill="#97D80F"
              />
              <path
                d="M22.2858 0H15.4286C14.4819 0 13.7144 0.767543 13.7144 1.71429V8.57143C13.7144 9.51817 14.4819 10.2857 15.4286 10.2857H22.2858C23.2325 10.2857 24.0001 9.51817 24.0001 8.57143V1.71429C24.0001 0.767543 23.2325 0 22.2858 0ZM20.5715 6.85714H17.1429V3.42857H20.5715V6.85714Z"
                fill="#97D80F"
              />
              <path
                d="M22.2858 13.7144H15.4286C14.4819 13.7144 13.7144 14.4819 13.7144 15.4286V22.2858C13.7144 23.2325 14.4819 24.0001 15.4286 24.0001H22.2858C23.2325 24.0001 24.0001 23.2325 24.0001 22.2858V15.4286C24.0001 14.4819 23.2325 13.7144 22.2858 13.7144ZM20.5715 20.5715H17.1429V17.1429H20.5715V20.5715Z"
                fill="#97D80F"
              />
            </g>
            <defs>
              <clipPath id="clip0_9_950">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5754 18L2.57544 2M18.5754 2L2.57544 18"
              stroke="#97D80F"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
        )}
      </span>
      <div className={`mobile-menu ${opened ? "opened" : ""}`}>
        <Link href="/purpose">Purposes</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/get-started">Get Started</Link>
        <Link href="/about-us">About us</Link>
        <Link href="/quick-contact">Quick Contact</Link>
        <Link href="/contact-us">Contact Us</Link>
      </div>
    </>
  );
}

export default MobileMenu;
