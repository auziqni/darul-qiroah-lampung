import React from "react";
import { twMerge } from "tailwind-merge";

export default function SecData({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "relative  flex flex-col gap-10 overflow-clip bg-[url('/images/hero-image.jpg')] bg-cover bg-fixed bg-center px-[15px] py-[58px]",
        className,
      )}
    >
      <div className="absolute inset-0  h-screen w-screen bg-green-600 opacity-70"></div>
      <div className="z-10  grid grid-cols-1 gap-[75px] text-white">
        <Content angka={150} desc={"Guru Bimbingan"} />
        <Content angka={21} desc={"Seminar"} />
        <Content angka={50000000} desc={"Donasi"} className="text-u31" />
        <Content angka={312} desc={"Kegiatan Sosial"} />
      </div>
    </div>
  );
}

const Content = ({
  angka,
  desc,
  className,
}: {
  angka: number;
  desc: string;
  className?: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-end">
        <h4 className={twMerge("text-u39 font-bold ", className)}>
          {angka.toLocaleString()}
        </h4>
        <h4 className=" mb-1 text-u16">+</h4>
      </div>
      <h4 className="-mt-2">{desc}</h4>
    </div>
  );
};
