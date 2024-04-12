import { Epilogue } from "next/font/google";
import "@/public/scss/base.scss";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Preloader from "../component/Preloader";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata = {
  title: "Enlight Systems",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <Preloader/>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
