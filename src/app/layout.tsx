import type { Metadata } from "next";
import { Inter, Roboto, Poppins, Permanent_Marker } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const permanent_marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-permanent_marker",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={` ${roboto.variable} ${permanent_marker.variable} font-roboto `}
      >
        {/* <NavBar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
