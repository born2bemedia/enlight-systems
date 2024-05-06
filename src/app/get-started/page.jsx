import React from "react";
import "@/public/scss/get-started.scss";
import GetStartedHero from "./_components/GetStartedHero";
import GetStartedSecond from "./_components/GetStartedSecond";
import GetStartedLast from "./_components/GetStartedLast";

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
