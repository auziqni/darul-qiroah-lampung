import React from "react";
import { ButtonPrimary } from "@/components/landingPage/interface";
import Link from "next/link";

export default function NavbarDesktop({ className }: { className?: string }) {
  return (
    <div
      id="nav-desktop"
      className={`${className} w-auto flex-row items-center justify-evenly gap-10  text-base lg:text-lg `}
    >
      <ul className=" flex cursor-pointer flex-row items-center gap-6">
        <li className="hidden border-green-500 hover:border-b hover:text-green-500 lg:block">
          <Link href={"/"}>Beranda</Link>
        </li>
        <li className="border-green-500 hover:border-b hover:text-green-500">
          <Link href={"/about"}>Tentang Kami</Link>
        </li>
        <li className="border-green-500 hover:border-b hover:text-green-500">
          <Link href={"/"}>Buku Qiroah</Link>
        </li>

        <li className="border-green-500 hover:border-b hover:text-green-500">
          <Link href={"/blog"}>Artikel</Link>
        </li>
      </ul>
      <ButtonPrimary>Donasi</ButtonPrimary>
    </div>
  );
}
