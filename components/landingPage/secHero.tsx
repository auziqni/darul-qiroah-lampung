import React from "react";
import { Button } from "@/components/ui/button";
import { ButtonPrimary } from "@/components/landingPage/interface";
import Image from "next/image";
import { HeroTitle } from "./textStyling";

export default function SecHero({ className }: { className?: string }) {
  return (
    <div className={`${className} relative flex flex-row justify-evenly  `}>
      <div className=" flex flex-col px-10 pt-40 gap-5 pb-20 min-w-[320px] ">
        <HeroTitle className="text-textheading">
          Pendidikan AlQuran <br /> Investasi Abadi
        </HeroTitle>
        <h2 className=" text-md xl:text-lg text-slate-400 max-w-96  lg:max-w-none ">
          Dengan Meningkatkan kompetensi guru mengaji untuk generasi qurani
        </h2>

        <div className=" flex gap-3 mt-5 xl:text-lg">
          <ButtonPrimary>daftar sekarang</ButtonPrimary>
          <ButtonPrimary>donasi</ButtonPrimary>
        </div>
      </div>

      <div className=" relative flex-1  max-w-[1000px]">
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
