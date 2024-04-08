import React from "react";
import { Button } from "@/components/ui/button";
import { ButtonPrimary } from "@/components/landingPage/interface";
import Image from "next/image";
import { HeroTitle } from "./textStyling";

export default function SecHero({ className }: { className?: string }) {
  return (
    <div className={`${className} relative flex flex-row justify-evenly  `}>
      <div className=" flex min-w-[320px] flex-col gap-5 px-10 pb-20 pt-40 ">
        <HeroTitle className="">
          Pendidikan AlQuran <br /> Investasi Abadi
        </HeroTitle>
        <h2 className=" text-md max-w-96 text-slate-400 lg:max-w-none  xl:text-lg ">
          Dengan Meningkatkan kompetensi guru mengaji untuk generasi qurani
        </h2>

        <div className=" mt-5 flex gap-3 xl:text-lg">
          <ButtonPrimary className="hidden bg-bgfooter text-white md:block">
            daftar sekarang
          </ButtonPrimary>
          <ButtonPrimary>donasi</ButtonPrimary>
        </div>
      </div>

      <div className="relative max-w-[1000px] flex-1">
        {/* <div className="w-[4000px] bg-blue-300">asdf</div> */}
        <Image
          src={"/images/hero.png"}
          alt="bg"
          fill
          objectFit="cover"
          objectPosition="left"
        />
      </div>
    </div>
  );
}
