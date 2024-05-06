import React from "react";
import "@/public/scss/about.scss";
import AboutFirst from "./_components/AboutFirst";
import AboutFourth from "./_components/AboutFourth";
import AboutLast from "./_components/AboutLast";
import AboutSecond from "./_components/AboutSecond";
import AboutThird from "./_components/AboutThird";

export const metadata = {
  title: "About Us",
  description: "Meet Enlight Systems! Learn how we came to design Enlight Dashboard, what challenges, problems, and issues the dashboard covers, and how we will optimize it!",
  openGraph: {
    title: "About Us",
    description: "Meet Enlight Systems! Learn how we came to design Enlight Dashboard, what challenges, problems, and issues the dashboard covers, and how we will optimize it!",
    images: "https://enlight.systems/images/meta.png",
  },
};

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
