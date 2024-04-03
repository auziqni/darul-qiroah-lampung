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
        className="bg-slate-100 h-screen flex  flex-col items-center gap-10"
      >
        <div className=" flex flex-col gap-3 pt-10">
          <SectionTag>Apa Yang Kami Lakukan</SectionTag>
          <SectionHead>KAMI MEMBANTU PENGAJAR LEBIH PROFESIONAL</SectionHead>
        </div>

        {DataOurMission.map((item: DataOurMission, index: number) => (
          <div key={index}>
            <CardOurMission item={item} />
          </div>
        ))}
      </div>
    </main>
  );
}
