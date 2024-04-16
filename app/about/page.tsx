import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <main className="">
      <div className="relative h-96 w-full">
        <Image
          src={"/images/about.jpg"}
          alt="bg"
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="m-5 flex flex-col gap-12 text-center font-semibold">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-u25 font-bold italic">Visi</h1>
          <p className=" max-w-[800px] capitalize">
            mewujudkan generasi qurani, melalui lembaga pendidikan sosial, dan
            ekonomi terbaik di zamannya dengan berdasarkan pemahaman ahlu sunnah
            wal jamaah.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-u25 font-bold italic">Misi</h1>
          <ol
            type="1"
            className="flex  max-w-[500px] flex-col gap-2  text-left capitalize"
          >
            <li className=" group flex flex-row items-center">
              <p className=" mr-2 h-full border-r-2 pr-2 group-hover:border-green-500">
                1
              </p>

              <p>
                meyelengarakan pendidikan formal dan nonformal di semua
                tingkatan, ponpes, majelis talim, dan tahfidzul quran
              </p>
            </li>
            <li className=" group flex flex-row items-center">
              <p className="mr-2 h-full border-r-2 pr-2 group-hover:border-green-500">
                2
              </p>
              <p>menerima dan menyalurkan zakat, infaq, dan shodaqoh</p>
            </li>
            <li className=" group flex flex-row items-center">
              <p className="mr-2 h-full border-r-2 pr-2 group-hover:border-green-500">
                3
              </p>
              <p>
                memberikan atau menyalurkan batuan kepada korban bencana dan
                bakti sosial
              </p>
            </li>
            <li className=" group flex flex-row items-center">
              <p className="mr-2 h-full border-r-2 pr-2 group-hover:border-green-500">
                4
              </p>
              <p>
                mendirikan lembaga usaha mandiri dan pemberdayaan masyarakat
              </p>
            </li>
            <li className=" group flex flex-row items-center">
              <p className="mr-2 h-full border-r-2 pr-2 group-hover:border-green-500">
                5
              </p>
              <p>
                meyiapkan keder-kader dakwah yang siap terjun ke tengah
                masyarakat
              </p>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
