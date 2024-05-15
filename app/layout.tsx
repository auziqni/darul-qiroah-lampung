import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Helpscreen from "@/components/helpscreen";
import Footer from "@/components/footer";
import dataseo from "@/content/static/seo.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: dataseo.title,
  description: dataseo.description,
  generator: dataseo.generator,
  applicationName: dataseo.applicationName,
  authors: dataseo.authors,
  creator: dataseo.creator,
  publisher: dataseo.publisher,
  referrer: "origin-when-cross-origin",
  keywords: dataseo.keywords,
  verification: {
    google: `qPMxG4FffInQzYzmI3C5d4Mf4MHFDzyCsPTOnrqS_Eg`,
  },
  openGraph: {
    title: dataseo.title,
    url: dataseo.url,
    type: "website",
    locale: dataseo.locale,
    siteName: dataseo.title,
    description: dataseo.description,
    images: [
      {
        url: dataseo.url + dataseo.logo,
        width: 800,
        height: 800,
        alt: "logo",
      },
      {
        url: dataseo.url + dataseo.logohd,
        width: 1600,
        height: 1600,
        alt: "logohd",
      },
    ],
  },
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
        <Navbar className=" sticky top-0 " />
        {children}
        <Footer />
      </body>
    </html>
  );
}
