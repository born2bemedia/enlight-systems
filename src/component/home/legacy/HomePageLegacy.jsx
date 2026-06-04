"use client";

import "@/public/scss/home-legacy.scss";
import HomeSecond from "./HomeSecond";
import HomeThird from "./HomeThird";
import HomeFourth from "./HomeFourth";
import HomeFifth from "./HomeFifth";
import HomeSixth from "./HomeSixth";
import HomeSeven from "./HomeSeven";
import HomeEight from "./HomeEight";
import HomeNine from "./HomeNine";
import HomeLast from "./HomeLast";

/** Прежняя главная страница — все секции под hero. */
export default function HomePageLegacy() {
  return (
    <>
      <HomeSecond />
      <HomeThird />
      <HomeFourth />
      <HomeSixth />
      <HomeFifth />
      <HomeLast />
    </>
  );
}
