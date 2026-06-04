import "@/public/scss/home-legacy.scss";
import "@/public/scss/platform.scss";
import HomeFourth from "@/src/component/home/legacy/HomeFourth";
import HomeLast from "@/src/component/home/legacy/HomeLast";
import PlatformExpertsCta from "./_components/PlatformExpertsCta";
import PlatformFunnel from "./_components/PlatformFunnel";
import PlatformHero from "./_components/PlatformHero";
import PlatformProblems from "./_components/PlatformProblems";
import PlatformProcesses from "./_components/PlatformProcesses";

export const metadata = {
  title: "Our Platform",
  description:
    "Run your crypto marketing in one system. Track, manage, and optimise campaigns, users, and results without fragmentation with Enlight.",
  openGraph: {
    title: "Our Platform",
    description:
      "Run your crypto marketing in one system. Track, manage, and optimise campaigns, users, and results without fragmentation with Enlight.",
    images: "https://enlight.systems/images/meta.png",
  },
};

function OurPlatformPage() {
  return (
    <div className="our-platform-page">
      <PlatformHero />
      <PlatformFunnel />
      <HomeFourth ctaHref="/contact-us" ctaLabel="Contact Us" />
      <PlatformProcesses />
      <PlatformProblems />
      <PlatformExpertsCta />
      <HomeLast
        className="home-last--platform-toolkit"
        title="Get a complete toolkit for managing crypto marketing from data to execution."
        ctaHref="/contact-us"
        ctaLabel="Contact Us"
      />
    </div>
  );
}

export default OurPlatformPage;
