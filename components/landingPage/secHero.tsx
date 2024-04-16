import React from "react";
import { Button } from "@/components/ui/button";
import { ButtonPrimary } from "@/components/landingPage/interface";
import Image from "next/image";
import { HeroTitle } from "./textStyling";

export default function SecHero({ className }: { className?: string }) {
  return (
    <div
      className={`${className} relative flex w-screen flex-row overflow-clip sm:justify-evenly  `}
    >
      <div className=" z-10 flex min-w-[320px] flex-col gap-5 px-6 pb-20 pt-[65px] ">
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

      <div className="absolute right-0 h-96 w-1/3 max-w-[1000px] flex-1 translate-x-1/2 sm:relative sm:h-auto sm:w-auto sm:translate-x-0 ">
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
