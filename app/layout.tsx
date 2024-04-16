import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Helpscreen from "@/components/helpscreen";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Yayasan Darul Qiroah Lampung",
  description:
    "Qiroah Lampung adalah sebuah yayasan non-profit yang berfokus pada pendidikan agama khususnya pembelajaran Al-Quran, serta sebagai tempat penyalur donasi untuk mendukung program-program pendidikan dan kegiatan sosial di Lampung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Helpscreen /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
