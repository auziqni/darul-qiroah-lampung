import React from "react";
import DataOurMission from "@/content/static/ourMission.json";
import CardOurMission from "@/components/landingPage/cardOurMission";
import { SectionHead, SectionTag } from "@/components/landingPage/textStyling";

export default function SecOurMission({ className }: { className?: string }) {
  return (
    <div
      id="our-mission"
      className={`${className} flex  flex-col  items-center gap-10 bg-blue-50 py-10`}
    >
      <div className=" flex flex-col gap-3 p-10">
        <SectionTag className=" sm:text-center">
          Apa Yang Kami Lakukan
        </SectionTag>
        <SectionHead className=" sm:text-center">
          KAMI MEMBANTU PENGAJAR LEBIH PROFESIONAL
        </SectionHead>
      </div>

      <div className=" flex flex-wrap justify-center  gap-10 px-[15px]">
        {DataOurMission.map((item: DataOurMission, index: number) => (
          <CardOurMission key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
