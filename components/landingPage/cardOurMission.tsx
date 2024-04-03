import React from "react";
import Image from "next/image";

interface CardProps {
  item: DataOurMission;
}

export default function CardOurMission({ item }: CardProps) {
  return (
    <div
      className={`${
        item.variant === "light" ? "bg-white" : "bg-green-500"
      } w-[440px] border  rounded-lg shadow-lg flex items-center flex-col px-10 py-20 gap-16`}
    >
      <div
        className={`${
          item.variant === "light" ? "bg-green-500" : "bg-white"
        } w-24 h-24 rounded-full flex items-center justify-center shadow-lg text-white`}
      >
        <Image
          src={item.imgsrc}
          alt={item.title}
          height={48}
          width={48}
          unoptimized
          className="w-14 h-14 fill-white "
        />
      </div>
      <div
        className={`${
          item.variant === "light" ? "text-black" : "text-white"
        } text-center flex flex-col gap-3`}
      >
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p>{item.content}</p>
      </div>
    </div>
  );
}
