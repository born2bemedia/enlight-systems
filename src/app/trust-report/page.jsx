import "@/public/scss/platform.scss";
import "@/public/scss/report.scss";
import "@/public/scss/home-calculator-cta.scss";
import TrustReportView from "./_components/TrustReportView";

export const metadata = {
  title: "Domain trust report — Enlight",
  robots: { index: false, follow: false },
};

export default function TrustReportPage({ searchParams }) {
  return <TrustReportView domain={searchParams?.domain || ""} />;
}
