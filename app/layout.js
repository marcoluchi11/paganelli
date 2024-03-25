import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export const metadata = {
  title: "Paganelli Interiors",
  description: "Paganelli Interior Design webpage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`roboto.className flex flex-col`}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
