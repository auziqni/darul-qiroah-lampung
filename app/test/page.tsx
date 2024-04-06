import React from "react";
import Image from "next/image";

import { LuMenu, LuWaves } from "react-icons/lu";

export default function Page() {
  return (
    <main className="flex flex-row justify-between m-10 ">
      <Image alt="apa" src={"/logo.png"} width={50} height={50}></Image>
      <LuMenu size={42} />
      asdfasdfasdfa
    </main>
  );
}
