import "@/public/scss/report.scss";
import TrustReportView from "./_components/TrustReportView";

export const metadata = {
  title: "Domain trust report — Enlight",
  robots: { index: false, follow: false },
};

export default function TrustReportPage({ searchParams }) {
  return <TrustReportView domain={searchParams?.domain || ""} />;
}
