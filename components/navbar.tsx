"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarDesktop from "./navbarDesktop";
import NavbarMobile from "./navbarMobile";

export default function Navbar() {
  return (
    <nav
      className={` flex h-16 items-center justify-between bg-white  px-5 shadow-sm  md:px-12 md:shadow-lg lg:h-[110px] `}
    >
      {/* logo */}
      <Link
        id="nav-logo"
        className=" relative h-[50px] w-[50px]  sm:ml-4 lg:h-[65px] lg:w-[65px]"
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
