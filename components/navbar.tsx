"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LuMenu, LuWaves } from "react-icons/lu";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${
        isOpen ? " border-b" : ""
      } bg-white h-16  shadow-lg flex justify-between items-center px-8 `}
    >
      {/* logo */}
      <Link id="nav-logo" className="" href={"/"}>
        <Image
          src="/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="cursor-pointer"
        />
      </Link>
      {/* logo end */}

      {/* navigation desktop */}
      <div id="nav-desktop" className="hidden sm:block">
        item
      </div>
      {/* navigation desktop end */}

      {/* navigation mobile */}
      <div
        id="nav-mobile"
        className="sm:hidden cursor-pointer"
        onClick={toggleNavbar}
      >
        {isOpen ? <LuWaves size={32} /> : <LuMenu size={32} />}
      </div>
      {/* navigation mobile end */}

      {/* navigation mobile menu */}
      <div
        id="nav-mobile-menu"
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden bg-white absolute flex  flex-col items-center py-5 z-10 left-0 right-0 top-16 shadow-xl`}
      >
        <ul className="flex flex-col items-center h-auto gap-8 py-5 mb-8">
          <li className="border-b-2 hover:border-green-400 hover:text-green-800">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="border-b-2 hover:border-green-400 hover:text-green-800">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="border-b-2 hover:border-green-400 hover:text-green-800">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div>
          <button
            className="bg-green-500 text-white w-96 py-2  font-bold"
            onClick={toggleNavbar}
          >
            Donasi
          </button>
        </div>
      </div>
      {/* navigation mobile menu end */}
    </nav>
  );
}
