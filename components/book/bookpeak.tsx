import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function BookPeak({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "flex min-h-96 w-full flex-col items-center gap-20 bg-slate-50 py-20 lg:flex-row lg:items-start lg:justify-center",
        className,
      )}
    >
      <div className="flex max-w-xl flex-col gap-3 px-5 lg:mt-20">
        <h3 className="text-center text-u25 font-semibold lg:text-left">
          Memakai Media Gambar
        </h3>
        <p className=" text-justify ">
          Dapatkan buku revolusioner ini, panduan komprehensif untuk mengakhiri
          era buta aksara Al-Quran dengan media gambar sebagai sarana pengucapan
          huruf hijaiyah yang lebih mudah. setiap halamannya sudah termassuk
          ilmu tajwid yang lengkap dan mempunyai Metode rahasia dalam mengingat
          huruf sehingga mampu membaca Al-Quran dengan lancar sesuai makhorijul
          huruf dan kaidah tajwidnya.
          {/* Temukan rahasia-rahasia yang akan membantu Anda
          membuka pintu-pintu kecerdasan dan kesempatan baru. Setiap halamannya
          sarat dengan strategi efektif dan cerita inspiratif yang akan
          mencerahkan dan mengubah kehidupan Anda. Bersama-sama, kita bisa
          memberantas buta aksara dan membawa terang kepada seluruh masyarakat! */}
        </p>
      </div>

      <div className="px-10">
        <Image
          src={"/images/buku-peek.jpg"}
          alt="buku qiroah"
          height={1200}
          width={800}
          className="h-auto w-full shadow-2xl"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
