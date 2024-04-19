import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";

export default function BookHero({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "bg-bookhero lg  flex min-h-96  flex-col items-center justify-center  gap-20 py-20 md:flex-row lg:gap-32 xl:gap-40",
        className,
      )}
    >
      <div className="relative max-w-md px-5  lg:translate-y-32">
        <Image
          src={"/images/buku.png"}
          alt="buku qiroah"
          height={1200}
          width={800}
          className="h-auto w-full shadow-2xl"
          objectFit="contain"
        />
      </div>
      <div className=" relative flex max-w-2xl flex-col items-center gap-5 text-center font-bold text-green-500 md:-translate-y-16 md:items-start  md:text-left">
        <h1 className=" text-u31  font-bold lg:text-u49">
          Interaktif Belajar Quran
        </h1>
        <h3 className=" lg:text-u25">
          Tiada Ruang Bagi Buta Aksara, Belajar Menggunakan Metode Cepat,
          Efisien, dan Menynangkan.{" "}
        </h3>

        <Button className="mt-5 max-w-52 rounded-full px-8 py-5">
          Beli Sekarang
        </Button>
      </div>
    </div>
  );
}
