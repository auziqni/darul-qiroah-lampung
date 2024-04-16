import React from "react";
import { twMerge } from "tailwind-merge";
import { ButtonJoinUs } from "./interface";

export default function SecBecomeTeacher({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "relative mx-[15px] my-[20px] flex flex-col gap-10 overflow-clip bg-[url('/images/hero-image.jpg')] bg-cover bg-fixed bg-center px-[15px] py-[58px]",
        className,
      )}
    >
      <div className="absolute inset-0  h-screen w-screen bg-green-500 opacity-70"></div>
      <div className="z-10">
        <h2 className="text-u20 font-bold text-white ">
          Ayo Cerahkan Dunia Dengan Belajar dan Mengajar AlQuran
        </h2>
        <ButtonJoinUs className="mt-5">ayo jadi guru</ButtonJoinUs>
      </div>
    </div>
  );
}
