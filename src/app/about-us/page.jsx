import React from "react";
import "@/public/scss/about.scss";
import AboutFirst from "./_components/AboutFirst";
import AboutStats from "./_components/AboutStats";
import AboutProblem from "./_components/AboutProblem";
import AboutValue from "./_components/AboutValue";
import AboutLast from "./_components/AboutLast";

export const metadata = {
  title: "About Us",
  description:
    "The story behind Enlight — why we built a different approach to crypto marketing, and how we help projects gain visibility and scale with confidence.",
  openGraph: {
    title: "About Us",
    description:
      "The story behind Enlight — why we built a different approach to crypto marketing, and how we help projects gain visibility and scale with confidence.",
    images: "https://enlight.systems/images/meta.png",
  },
};

function AboutUs() {
  return (
    <>
      <AboutFirst />
      <AboutStats />
      <AboutProblem />
      <AboutValue />
      <AboutLast />
    </>
  );
}

export default AboutUs;
