"use client";
import React from "react";
import { useState, useEffect } from "react";

interface Props {
  tittle: string;
  widht: number;
  height: number;
  style: string;
}

export default function Helpscreen() {
  const [screenMode, setScreenMode] = useState<Props>();

  useEffect(() => {
    const updateScreenMode = () => {
      if (window.innerWidth >= 640 && window.innerWidth < 768) {
        setScreenMode({
          tittle: "Small",
          widht: window.innerWidth,
          height: window.innerHeight,
          style: "bg-blue-200",
        });
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setScreenMode({
          tittle: "Medium",
          widht: window.innerWidth,
          height: window.innerHeight,
          style: "bg-yellow-200",
        });
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
        setScreenMode({
          tittle: "Large",
          widht: window.innerWidth,
          height: window.innerHeight,
          style: "bg-green-200",
        });
      } else if (window.innerWidth >= 1280 && window.innerWidth < 1536) {
        setScreenMode({
          tittle: "Extra Large",
          widht: window.innerWidth,
          height: window.innerHeight,
          style: "bg-red-200",
        });
      } else if (window.innerWidth >= 1536) {
        setScreenMode({
          tittle: "Ultra Extra Large",
          widht: window.innerWidth,
          height: window.innerHeight,
          style: "bg-purple-200",
        });
      } else {
        setScreenMode({
          tittle: "Extra Small",
          widht: window.innerWidth,
          height: window.innerHeight,
          style: `bg-slate-200`,
        });
      }
    };

    // Panggil fungsi pertama kali untuk menginisialisasi mode layar
    updateScreenMode();

    // Tambahkan event listener untuk memantau perubahan mode layar
    window.addEventListener("resize", updateScreenMode);

    // Hapus event listener saat komponen di-unmount
    return () => window.removeEventListener("resize", updateScreenMode);
  }, []);

  return (
    <main className=" flex flex-col gap-3 sticky top-0 z-10">
      <div className={`${screenMode?.style} h-20 w-full`}>
        <h1>
          saya w= {screenMode?.widht}, h= {screenMode?.height}
        </h1>
        <p>Saya dalam mode layar {screenMode?.tittle}</p>
      </div>
    </main>
  );
}
