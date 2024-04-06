import React from "react";
import { Button } from "@/components/ui/button";

export default function NavbarDesktop({ className }: { className?: string }) {
  return (
    <div
      id="nav-desktop"
      className={`${className} flex-row justify-evenly w-auto items-center gap-10  text-base lg:text-lg `}
    >
      <ul className=" flex flex-row gap-6 cursor-pointer items-center">
        <li className="hover:border-b border-green-500 hover:text-green-500 hidden lg:block">
          Beranda
        </li>
        <li className="hover:border-b border-green-500 hover:text-green-500">
          Tentang Kami
        </li>
        <li className="hover:border-b border-green-500 hover:text-green-500">
          Buku Qiroah
        </li>

        <li className="hover:border-b border-green-500 hover:text-green-500">
          Artikel
        </li>
      </ul>
      <Button className="bg-green-500 px-14 py-6">Donasi</Button>
    </div>
  );
}
