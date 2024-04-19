import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donasi aja ke Darul Qiroah Lampung",
  description:
    "Donasi aja ke Darul Qiroah Lampung, Salurkan donasi Anda melalui berbagai macam metode pembayaran yang kami sediakan.",
};

export default function Donasi() {
  return (
    <main className="">
      <div className="relative h-96 w-full">
        <Image
          loading="lazy"
          src={"/images/donasi.png"}
          alt="bg"
          fill
          objectFit="cover"
          objectPosition="center"
        />
        <h1 className="absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-u31 font-bold text-green-500 lg:bottom-20   lg:left-56 lg:translate-x-0 lg:translate-y-0">
          ~ DONASI ~
        </h1>
      </div>

      <div className=" relative mx-4  my-6 flex flex-col overflow-clip">
        <div className="absolute right-0 h-full w-1/2 ">
          <Image
            loading="lazy"
            src={"/images/bgpattern.png"}
            alt="qr"
            fill
            objectFit="cover"
            className="rotate-12 opacity-5"
          />
        </div>

        <div className=" flex flex-col items-center gap-5 text-center">
          <h2 className=" text-u20 font-bold text-green-500 lg:text-u31">
            QRIS Code
          </h2>
          <p className="">
            Salurkan donasi Anda melalui QRIS code di bawah ini{" "}
          </p>
          <div className=" h-1 w-10 bg-green-500" />
        </div>

        <div className="mx-auto flex flex-col items-center lg:flex-row">
          <div className=" relative h-96 w-96">
            <Image src={"/images/QRIS.png"} alt="qr" fill objectFit="contain" />
          </div>
          <div className=" flex flex-col justify-center gap-3 text-center lg:-translate-y-14 lg:text-left">
            <h2 className="  text-u16 font-bold text-green-500 lg:text-u25">
              Pundi Amal Peduli Kasih
            </h2>
            <p className="lg:w-96">
              Pemilik aplikasi bisa berdonasi dengan memindai (scanning) QR Code
              berikut ini .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
