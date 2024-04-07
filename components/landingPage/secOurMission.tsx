import React from "react";
import DataOurMission from "@/content/static/ourMission.json";
import CardOurMission from "@/components/landingPage/cardOurMission";
import { SectionHead, SectionTag } from "@/components/landingPage/textStyling";

export default function SecOurMission({ className }: { className?: string }) {
  return (
    <div
      id="our-mission"
      className={`${className} bg-blue-50  flex  flex-col items-center gap-10 py-10`}
    >
      <div className=" flex flex-col gap-3 p-10">
        <SectionTag className=" text-center">Apa Yang Kami Lakukan</SectionTag>
        <SectionHead className=" text-center">
          KAMI MEMBANTU PENGAJAR LEBIH PROFESIONAL
        </SectionHead>
      </div>

      <div className=" flex flex-wrap gap-10  justify-center px-[15px]">
        {DataOurMission.map((item: DataOurMission, index: number) => (
          <CardOurMission key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
