import { Inter, Archivo, DM_Sans, Lobster  } from "next/font/google";
import Header from "@/components/Hearder";
// import Header from '../components/Header';
import Header2 from "../components/Header2";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", weight: ["400","500","700"], display: "swap" });
const lobster = Lobster({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-lobster",
});
export const metadata = {
  title: "Nunu Consulting",
  description: "Your Strategy & GTM Partner for AI-First Startups",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${dmSans.variable}`} >
      <body>
        {" "}
        <Header />
        {/* <Header2 /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
