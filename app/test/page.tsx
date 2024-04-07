import React from "react";
import Image from "next/image";

import { LuMenu, LuWaves } from "react-icons/lu";

export default function Page() {
  return (
    <main className=" flex flex-row  m-10 border">
      {/* <div className=" flex">
        <div className=" w-96 h-96 bg-red-300"></div>
      </div>
      <div className="flex-1 bg-blue-200"></div> */}

      {/* <div className=" flex">
        <div className=" w-96 h-96 bg-red-300"></div>
      </div>

      <div className="flex-1 bg-blue-300  ">
        <Image src={"/images/hero.png"} alt="bg" fill objectFit="cover" />
      </div> */}

      {/* <Image
        src={"/images/hero.png"}
        alt="bg"
        width={0}
        height={0}
        sizes="100vw"
        // objectFit="contain"
        // style={{ width: "100%", height: "auto" }}
      /> */}

      <div className=" h-full w-full flex flex-wrap gap-96 justify-center ">
        <div className="w-40 h-40 bg-blue-200 ">satu</div>
        <div className="w-40 h-40 bg-red-200">satu</div>
        <div className="w-40 h-40 bg-yellow-200">satu</div>
      </div>
    </main>
  );
}
