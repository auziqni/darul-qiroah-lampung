import React from "react";
import { SectionHead, SectionTag } from "@/components/landingPage/textStyling";
import { ButtonPrimary } from "@/components/landingPage/interface";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function SecAboutUs({ className }: { className?: string }) {
  return (
    <div
      id="SectionAboutUs"
      className={twMerge(
        ` my-[90px] flex flex-col gap-[30px] lg:my-[120px] lg:flex-row lg:items-center lg:justify-center`,
        className,
      )}
    >
      <div
        id="heading"
        className="relative flex  flex-col gap-[30px] lg:max-w-[750px]"
      >
        <div className=" flex flex-col gap-4 sm:mx-[25px] ">
          <SectionTag>Tentang Yayasan Kami</SectionTag>
          <SectionHead>
            Kami Meperjuangkan Pendidikan, Kemanusiaan, Dan Kebajikan
          </SectionHead>
        </div>

        <div
          id=""
          className="mx-[15px] flex flex-col gap-3 text-justify sm:mx-[25px] md:w-[510px] lg:w-full lg:pr-10 "
        >
          <p className=" ">
            Selamat datang di{" "}
            <span className="cursor-pointer text-green-600 hover:text-blue-800">
              {" "}
              Yayasan Darul Qiroah Lampung{" "}
            </span>
            , sebuah lembaga non-profit yang berkomitmen untuk meningkatkan
            pendidikan agama khususnya dalam pembelajaran Al-Quran. Kami tidak
            hanya sekadar menyediakan akses pendidikan berkualitas, tetapi juga
            bertekad untuk menjadi pilar dalam memperkuat pemahaman agama di
            masyarakat.
          </p>
          <p>
            Metode pembelajaran kami menitikberatkan pada pemahaman mendalam
            terhadap Al-Quran serta pengaplikasian nilai-nilai Islam dalam
            kehidupan sehari-hari. Kami juga menjadi tempat penyalur donasi,
            memastikan setiap sumbangan digunakan secara transparan untuk
            mendukung program-program pendidikan dan kegiatan sosial yang kami
            jalankan. Bersama-sama, mari kita ciptakan perubahan yang positif
            dan memberikan manfaat yang berkelanjutan bagi masyarakat Lampung
            dan luar Lampung .
          </p>
          <ButtonPrimary className="">Donasi</ButtonPrimary>
        </div>
      </div>

      <div className="relative flex h-fit flex-row items-end justify-end  lg:justify-center">
        <div className="relative z-10 hidden h-[260px] w-[220px] translate-x-1/3  translate-y-1/3 overflow-clip rounded-bl-lg border-r-8 border-t-8 border-utama lg:block">
          <Image
            src={"/images/aboutus-child.jpg"}
            alt="bg"
            fill
            objectFit="cover"
          />
        </div>
        <div className=" relative h-64 w-full overflow-clip rounded-xl  lg:h-[400px] lg:w-[300px]">
          <Image
            src={"/images/aboutus-main.jpg"}
            alt="bg"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
