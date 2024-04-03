import { Button } from "@/components/ui/button";
import Image from "next/image";
import DataOurMission from "@/content/static/ourMission.json";
import CardOurMission from "@/components/landingPage/cardOurMission";
import { SectionHead, SectionTag } from "@/components/landingPage/textStyling";

export default function Home() {
  return (
    <main className="">
      <div id="hero" className="relative">
        <div className=" flex flex-col   px-10 pt-40 gap-5 pb-20">
          <h1 className=" text-3xl font-bold text tracking-wide">
            PENDIDIKAN AL-QURAN <br /> INVESTASI ABADI
          </h1>
          <h2 className=" text-md text-slate-400">
            Dengan Meningkatkan kompetensi guru mengaji untuk generasi qurani
          </h2>

          <div className=" flex gap-3 mt-5">
            <Button className="bg-green-200 text-black font-bold ">
              Daftar Sekarang
            </Button>
            <Button className="bg-green-500">Donasi</Button>
          </div>
        </div>

        <div className="absolute right-0 top-0 w-2/5 -z-10 ">
          <div className=" relative h-60  rounded-bl-full overflow-hidden ">
            <Image
              src={"/images/hero-image.jpg"}
              alt="bg"
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div
        id="our-mission"
        className="bg-blue-50  flex  flex-col items-center gap-10 py-10"
      >
        <div className=" flex flex-col gap-3 p-10">
          <SectionTag>Apa Yang Kami Lakukan</SectionTag>
          <SectionHead>KAMI MEMBANTU PENGAJAR LEBIH PROFESIONAL</SectionHead>
        </div>

        {DataOurMission.map((item: DataOurMission, index: number) => (
          <div key={index}>
            <CardOurMission item={item} />
          </div>
        ))}
      </div>

      <div id="about-us" className=" py-10 flex flex-col gap-10">
        <div className=" flex flex-col gap-3 px-10 py-6 ">
          <SectionTag>Apa Yang Kami Lakukan</SectionTag>
          <SectionHead>KAMI MEMBANTU PENGAJAR LEBIH PROFESIONAL</SectionHead>
        </div>
        <p className="px-10 text-justify">
          Selamat datang di{" "}
          <span className="text-green-600 cursor-pointer hover:text-blue-800">
            {" "}
            Yayasan Darul Qiroah Lampung{" "}
          </span>
          , sebuah lembaga non-profit yang berkomitmen untuk meningkatkan
          pendidikan agama khususnya dalam pembelajaran Al-Quran. Kami tidak
          hanya sekadar menyediakan akses pendidikan berkualitas, tetapi juga
          bertekad untuk menjadi pilar dalam memperkuat pemahaman agama di
          masyarakat. Metode pembelajaran kami menitikberatkan pada pemahaman
          mendalam terhadap Al-Quran serta pengaplikasian nilai-nilai Islam
          dalam kehidupan sehari-hari. Kami juga menjadi tempat penyalur donasi,
          memastikan setiap sumbangan digunakan secara transparan untuk
          mendukung program-program pendidikan dan kegiatan sosial yang kami
          jalankan. Bersama-sama, mari kita ciptakan perubahan yang positif dan
          memberikan manfaat yang berkelanjutan bagi masyarakat Lampung dan luar
          Lampung .
        </p>

        <Button className="bg-green-500 mx-10">Donasi</Button>

        <div className="relative mx-10 h-96 border-b-8 border-l-8 border-green-800">
          <Image
            src={"/images/hero-image.jpg"}
            alt="bg"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </main>
  );
}
