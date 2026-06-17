import "@/public/scss/report.scss";
import ReportView from "./_components/ReportView";

export const metadata = {
  title: "Landing page report — Enlight",
  robots: { index: false, follow: false },
};

export default function ReportPage({ params }) {
  return <ReportView jobId={params.jobId} />;
}
