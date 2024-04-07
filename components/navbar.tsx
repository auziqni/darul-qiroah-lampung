"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarDesktop from "./navbarDesktop";
import NavbarMobile from "./navbarMobile";

export default function Navbar() {
  return (
    <nav
      className={` bg-white h-16 lg:h-[100px]  shadow-sm flex justify-between items-center px-3 md:px-14 `}
    >
      {/* logo */}
      <Link
        id="nav-logo"
        className=" relative h-[50px] w-[50px]  lg:h-[65px] lg:w-[65px]"
        href={"/"}
      >
        <Image src="/logo.png" alt="logo" fill className="cursor-pointer" />
      </Link>
      {/* logo end */}

      <NavbarDesktop className="hidden sm:flex" />
      <NavbarMobile className="flex sm:hidden" />
    </nav>
  );
}
