import React from "react";
import Image from "next/image";
import fs from "fs";
import path from "path";

export default function CardPost({ post }: { post: Post }) {
  //ubah ke format date
  const date = new Date(post.date);
  //ambil tanggal
  const tanggal = date.getDate();
  //ambil nama singkatan nama bulan
  const bulan = date.toLocaleString("default", { month: "short" });
  //ambil tahun
  const tahun = date.getFullYear();

  if (fs.existsSync("public" + post.image)) {
    post.image;
  } else {
    post.image = "/images/placeholder.png";
  }

  return (
    <div className=" w-full cursor-pointer overflow-clip rounded-xl shadow-md sm:max-w-[510px]">
      <div className="relative h-[220px] w-full  ">
        <Image src={post.image} alt="bg" fill objectFit="cover" />
        <div className="absolute bottom-0 left-0 flex h-[55px] w-[103px] flex-row items-center justify-center gap-1 bg-emerald-500 text-white">
          <h4 className="text-[32px] font-bold">{tanggal}</h4>
          <div className="flex flex-col text-xs ">
            <h5>{bulan}</h5>
            <h5 className="-mt-1">{tahun}</h5>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 px-[15px]  pb-[15px] pt-[30px]">
        <h3 className="text-lg font-bold ">{post.title}</h3>
        <h6 className="text-right text-base capitalize text-slate-700">
          {post.author}
        </h6>
      </div>
    </div>
  );
}
