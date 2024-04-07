import React from "react";
import { SectionHead, SectionTag } from "@/components/landingPage/textStyling";
import { Button } from "@/components/ui/button";
import { ButtonPrimary } from "@/components/landingPage/interface";

export default function SecAboutUs({ className }: { className?: string }) {
  return (
    <div className={`${className} flex flex-col gap-3 p-10`}>
      <div className=" flex flex-col gap-3 ">
        <SectionTag>Tentang Yayasan Kami</SectionTag>
        <SectionHead>
          Kami Meperjuangkan Pendidikan, Kemanusiaan,dan Kebajikan
        </SectionHead>
      </div>

      <div>
        <div>
          <p>
            Darul Qiroah Lampung adalah sebuah yayasan non-profit yang berfokus
            pada pendidikan agama khususnya pembelajaran Al-Quran, serta sebagai
            tempat penyalur donasi untuk mendukung program-program pendidikan
            dan kegiatan sosial di Lampung.
          </p>
          <p>
            Bergabunglah bersama kami dalam misi suci ini. Mari kita
            bersama-sama menjadikan pendidikan Al-Quran sebagai sumber
            kebijaksanaan dan kebaikan.
          </p>
        </div>
        <ButtonPrimary>Donasi</ButtonPrimary>
      </div>
    </div>
  );
}
