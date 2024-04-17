import React from "react";
import { twMerge } from "tailwind-merge";
import data from "@/content/landingpage/data.json";

export default function SecData({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "relative  flex flex-col gap-10 overflow-clip bg-[url('/images/hero-image.jpg')] bg-cover bg-fixed bg-center px-[15px] py-[58px]",
        className,
      )}
    >
      <div className="absolute inset-0  h-screen w-screen bg-green-600 opacity-70"></div>
      <div className="z-10  grid grid-cols-1 gap-[75px] text-white md:grid-cols-2 lg:grid-cols-4">
        <Content angka={data[0].value} desc={data[0].context} />
        <Content angka={data[1].value} desc={data[1].context} />
        <Content
          angka={data[2].value}
          desc={data[2].context}
          className="text-u31"
        />
        <Content angka={data[3].value} desc={data[3].context} />
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
