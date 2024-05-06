import React from "react";
import "@/public/scss/get-started.scss";
import GetStartedHero from "./_components/GetStartedHero";
import GetStartedSecond from "./_components/GetStartedSecond";
import GetStartedLast from "./_components/GetStartedLast";

export const metadata = {
  title: "Get Started",
  description:
    "Get Started with Enlight. Find out how you can benefit from joining Enlight now. Send a request and get assistance from our team with choosing and setting up your crypto marketing dashboard.",
  openGraph: {
    title: "Get Started",
    description:
      "Get Started with Enlight. Find out how you can benefit from joining Enlight now. Send a request and get assistance from our team with choosing and setting up your crypto marketing dashboard.",
    images: "https://enlight.systems/images/meta.png",
  },
};

function GetStarted() {
  return (
    <>
      <GetStartedHero />
      <GetStartedSecond />
      <GetStartedLast />
    </>
  );
}

export default GetStarted;
