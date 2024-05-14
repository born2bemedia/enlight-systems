import { Epilogue } from "next/font/google";
import "@/public/scss/base.scss";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Preloader from "../component/Preloader";
import { GoogleAnalytics } from '@next/third-parties/google';

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Complex Crypto Marketing Platform | Enlight Systems",
    template: "%s | Enlight Systems",
  },
  description:
    "Enlight offers a single dashboard for all your crypto marketing needs. Manage and track campaign performance, budgets, customers, and compliance.",
  openGraph: {
    title: {
      default: "Complex Crypto Marketing Platform | Enlight Systems",
      template: "%s | Enlight Systems",
    },
    description:
      "Enlight offers a single dashboard for all your crypto marketing needs. Manage and track campaign performance, budgets, customers, and compliance.",
    images: "https://enlight.systems/images/meta.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <GoogleAnalytics gaId="G-N1SFZ1RDHK" />
        <Preloader/>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
