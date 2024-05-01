import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { AiFillAppstore } from "react-icons/ai";

export default function BookFeatures({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center gap-16 bg-white py-20 lg:mt-32",
        className,
      )}
    >
      <div className=" text-center ">
        <h2 className="text-u25 font-semibold lg:text-u31">
          Belajar Dengan Cepat
        </h2>
        <h3 className=" mx-10 mt-6 max-w-[500px]  capitalize text-slate-700">
          cara paling efektif belajar degan metode terkini yang telah teruji
          oleh pengajar berpengalaman.
        </h3>
      </div>

      <div className=" mt-10 flex flex-wrap justify-center gap-10 md:grid-cols-2 ">
        <div className=" flex flex-col items-center gap-3 ">
          <AiFillAppstore size={50} className="text-green-500" />
          <div>
            <h3 className="text-center text-u20 font-semibold ">
              Mudah Dipahami
            </h3>
            <p className="mt-3 max-w-sm text-center text-sm text-slate-500">
              menggunakan istilah istilah yang mudah dipahami dan flexsibel
              dalam setiap pembelajaran. Konsep-konsep yang sulit dipahami
              mungkin diulang dengan cara yang berbeda atau dengan metode yang
              lebih sederhana
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 ">
          <AiFillAppstore size={50} className="text-green-500" />
          <div>
            <h3 className="text-center text-u20 font-semibold ">
              Jadwal Belajar Singkat
            </h3>
            <p className="mt-3 max-w-sm text-center text-sm text-slate-500">
              Dengan metode yang efektif, waktu belajar yang singkat sudah cukup
              untuk memahami materi yang diajarkan. Dengan metode ini siswa
              tidak perlu menghabiskan waktu yang lama untuk memahami materi
              yang diajarkan.
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 ">
          <AiFillAppstore size={50} className="text-green-500" />
          <div>
            <h3 className="text-center text-u20 font-semibold ">
              Dilengkapi Ilmu dasar Islam
            </h3>
            <p className="mt-3 max-w-sm text-center text-sm text-slate-500">
              Materi yang diajarkan tidak hanya sebatas pada materi Al-Quran
              saja, namun juga dilengkapi dengan ilmu dasar Islam yang
              memperkuat pemahaman siswa terhadap Al-Quran.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
