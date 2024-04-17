import React from "react";
import { CardPost, CardPostLarge } from "@/components/landingPage/cardPost";
import { posts } from "#site/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artikel Darul Qiroah Lampung",
  description:
    "Artikel-artikel terbaru dari Darul Qiroah Lampung, berbagai topik menarik seputar pendidikan, keislaman, dan kegiatan sosial.",
  openGraph: {},
};

export default function Blog() {
  const newpost: Post[] = posts
    .filter((post) => post.published === true)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  //get latest post
  const latestPost = newpost[0];

  return (
    <div className="m-5 grid grid-cols-1 justify-items-center gap-10 lg:grid-cols-2 xl:mx-60 xl:my-16">
      <CardPostLarge
        className="w-full sm:max-w-none lg:col-span-2"
        post={latestPost}
      ></CardPostLarge>

      {newpost.slice(1).map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </div>
  );
}
