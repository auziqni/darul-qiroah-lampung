"use client";
import React, { useState } from "react";
import { LuMenu, LuWaves } from "react-icons/lu";
import Link from "next/link";

export default function NavbarMobile({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${className}  `}>
      {/* navigation mobile */}
      <div
        id="nav-mobile"
        className="cursor-pointer md:hidden"
        onClick={toggleNavbar}
      >
        {isOpen ? (
          <LuWaves size={32} className="text-green-500" />
        ) : (
          <LuMenu size={32} className="text-green-500" />
        )}
      </div>
      {/* navigation mobile end */}

      {/* navigation mobile menu */}
      <div
        id="nav-mobile-menu"
        className={`${
          isOpen ? "block" : "hidden"
        } absolute left-0 right-0 top-16 z-20  flex flex-col items-center border-t-2 bg-white py-5 shadow-xl md:hidden`}
      >
        <ul className="mb-8 flex h-auto flex-col items-center gap-8 py-5">
          <li className="border-b-2 hover:border-green-400 hover:text-green-800">
            <Link onClick={toggleNavbar} href={"/"}>
              Beranda
            </Link>
          </li>
          <li className="border-b-2 hover:border-green-400 hover:text-green-800">
            <Link onClick={toggleNavbar} href={"/about"}>
              Tentang Kami
            </Link>
          </li>
          <li className="border-b-2 hover:border-green-400 hover:text-green-800">
            <Link onClick={toggleNavbar} href={"/"}>
              Buku Qiroah
            </Link>
          </li>
          <li className="hidden border-b-2 hover:border-green-400 hover:text-green-800">
            <Link onClick={toggleNavbar} href={"/"}>
              Program
            </Link>
          </li>
          <li className="border-b-2 hover:border-green-400 hover:text-green-800">
            <Link onClick={toggleNavbar} href={"/blog"}>
              Artikel
            </Link>
          </li>
          <li className="border-b-2 hover:border-green-400 hover:text-green-800">
            <Link onClick={toggleNavbar} href={"/"}>
              Kontak
            </Link>
          </li>
        </ul>
        <div>
          <Link href={"/donasi"}>
            <button className="w-96 bg-green-500 py-2 font-bold  text-white">
              Donasi
            </button>
          </Link>
        </div>
      </div>
      {/* navigation mobile menu end */}
    </div>
  );
}
