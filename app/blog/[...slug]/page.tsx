import React from "react";
import { posts } from "#site/content";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/blog/mdx-components";
import { Tag } from "@/components/blog/tag";
import Image from "next/image";
import fs from "fs";
import dataseo from "@/content/static/seo.json";
interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slug === slug);

  return post;
}

export default async function BlogPost({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  let image = post?.image;

  fs.existsSync("public" + post?.image)
    ? (image = post?.image)
    : (image = "/images/placeholder.png");

  image ? image : (image = "/images/placeholder.png");

  if (!post) {
    notFound();
  }
  return (
    <article className="container prose mx-auto flex max-w-3xl flex-col py-6 dark:prose-invert">
      <div className="relative -z-10 mb-10 h-96 w-full">
        <Image
          src={image}
          alt="bg"
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <h1 className="mb-2">{post.title}</h1>
      <div className="mb-2 flex gap-2">
        {post.tags?.map((tag) => <Tag tag={tag} key={tag} />)}
      </div>
      {post.description ? (
        <p className="mt-0 text-xl text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />
      <div>
        <MDXContent code={post.body} />
      </div>
      {/* {post.body} */}
    </article>
  );
}

export const generateStaticParams = () => {
  return posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
};

export async function generateMetadata({ params }: PostPageProps) {
  const post = await getPostFromParams(params);
  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      title: post?.title,
      type: "article",
      description: post?.description,
      images: [
        {
          url: dataseo.url + post?.image,
          width: 800,
          height: 600,
          alt: post?.title,
        },
      ],
    },
  };
}
