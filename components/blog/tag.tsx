import Link from "next/link";
import { slug } from "github-slugger";
import { badgeVariants } from "@/components/ui/badge";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}
export function Tag({ tag, current, count }: TagProps) {
  return (
    <Link
      className={badgeVariants({
        variant: current ? "default" : "secondary",
        className:
          "rounded-md no-underline hover:border-green-500 hover:bg-white hover:text-green-500",
      })}
      href={`/tags`}
    >
      {tag} {count ? `(${count})` : null}
    </Link>
  );
}
