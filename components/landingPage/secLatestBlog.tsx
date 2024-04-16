import React from "react";
import { SectionHead, SectionTag } from "@/components/landingPage/textStyling";
import { twMerge } from "tailwind-merge";
import datas from "@/content/blog/mock.json";
import CardPost from "@/components/landingPage/cardPost";
import { posts } from "#site/content";

// const posts : post[] = datas.filter((post) => post.id === 1);
//kluarkan hanya post id 1
//const posts: post[] = datas.slice(0, 3);
//ambil data dari date terbaru
const newpost: Post[] = posts
  .filter((post) => post.published === true)
  .sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  })
  .slice(0, 3);
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
      <div className=" flex flex-col gap-3 text-center  ">
        <SectionTag>Aktivitas Terkini Kami</SectionTag>
        <SectionHead>Dokumentasi dari Acara Terkini</SectionHead>
      </div>

      <div className="grid grid-cols-1 gap-[15px] ">
        {newpost.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
