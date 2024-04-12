import Image from "next/image";
import "@/public/scss/home.scss";
import HomeFirst from "../component/home/HomeFirst";
import HomeSecond from "../component/home/HomeSecond";
import HomeFourth from "../component/home/HomeFourth";
import HomeSixth from "../component/home/HomeSixth";
import HomeThird from "../component/home/HomeThird";
import HomeEight from "../component/home/HomeEight";
import HomeNine from "../component/home/HomeNine";
import HomeLast from "../component/home/HomeLast";
import HomeFifth from "../component/home/HomeFifth";
import HomeSeven from "../component/home/HomeSeven";

export default function Home() {
  return (
    <>
      <HomeFirst />
      <HomeThird />
      <HomeFourth />

      <HomeSixth />
      <HomeFifth />
      <HomeLast />
    </>
  );
}
