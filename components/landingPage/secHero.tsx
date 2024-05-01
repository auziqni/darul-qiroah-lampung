import React from "react";
import { Button } from "@/components/ui/button";
import { ButtonPrimary } from "@/components/landingPage/interface";
import Image from "next/image";
import { HeroTitle } from "./textStyling";

export default function SecHero({ className }: { className?: string }) {
  return (
    <div
      className={`${className} relative flex h-[500px]  flex-row  overflow-clip sm:h-[600px] sm:justify-evenly lg:h-[700px]  `}
    >
      <div className=" z-10 flex h-full min-w-[320px] -translate-y-10 flex-col justify-center gap-5 px-6 pt-[65px] sm:ml-20">
        <HeroTitle className="">
          Pendidikan Al-Qur&#39;an <br /> Investasi Abadi
        </HeroTitle>
        <h2 className=" text-md max-w-96 text-slate-400 lg:max-w-none  xl:text-lg ">
          Dengan Meningkatkan kompetensi guru mengaji untuk generasi qurani
        </h2>

        <div className=" mt-5 flex gap-3 xl:text-lg">
          {/* <ButtonPrimary className="hidden bg-bgfooter text-white md:block">
            daftar sekarang
          </ButtonPrimary> */}
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
