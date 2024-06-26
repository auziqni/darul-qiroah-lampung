import React from "react";
import { SectionHead, SectionTag } from "@/components/landingPage/textStyling";
import { twMerge } from "tailwind-merge";
import { CardPost } from "@/components/landingPage/cardPost";
import { posts } from "#site/content";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";

// const posts : post[] = datas.filter((post) => post.id === 1);
//kluarkan hanya post id 1
//const posts: post[] = datas.slice(0, 3);
//ambil data dari date terbaru
const newpost: Post[] = posts
  .filter((post) => post.published === true)
  .sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  })
  .slice(0, 2);
// const newpost = posts.slice(0, 2);

export default function SecLatestBlog({ className }: { className?: string }) {
  return (
    <div
      id="SectionLatestBlog"
      className={twMerge(
        ` flex flex-col gap-[30px] px-[15px] py-[40px]`,
        className,
      )}
    >
      <div className=" flex flex-col gap-3 text-center ">
        <SectionTag className="sm:text-center">
          Aktivitas Terkini Kami
        </SectionTag>
        <SectionHead className="sm:text-center">
          Dokumentasi dari Acara Terkini
        </SectionHead>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-[15px] lg:grid-cols-2 ">
        {newpost.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>

      <div className="flex flex-col items-center hover:text-green-500 ">
        <Link href={"/blog"}>Lebih Banyak</Link>
        <FaAngleDown />
      </div>
    </div>
  );
}
