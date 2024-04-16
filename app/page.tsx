import { Button } from "@/components/ui/button";
import Image from "next/image";

import SecHero from "@/components/landingPage/secHero";
import SecOurMission from "@/components/landingPage/secOurMission";
import SecAboutUs from "@/components/landingPage/secAboutUs";
import SecBecomeTeacher from "@/components/landingPage/secBecomeTeacher";
import SecLatestBlog from "@/components/landingPage/secLatestBlog";
import SecData from "@/components/landingPage/secData";

export default function Home() {
  return (
    <main className="">
      <SecHero />
      <SecOurMission />
      <SecAboutUs />
      <SecBecomeTeacher />
      <SecLatestBlog />
      <SecData />
    </main>
  );
}
