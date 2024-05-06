import React from "react";
import "@/public/scss/about.scss";
import AboutFirst from "./_components/AboutFirst";
import AboutFourth from "./_components/AboutFourth";
import AboutLast from "./_components/AboutLast";
import AboutSecond from "./_components/AboutSecond";
import AboutThird from "./_components/AboutThird";

function AboutUs() {
  return (
    <>
      <AboutFirst />
      <AboutSecond />
      <AboutThird />
      <AboutFourth />
      <AboutLast />
    </>
  );
}

export default AboutUs;
