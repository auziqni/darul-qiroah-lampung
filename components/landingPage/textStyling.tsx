import React from "react";
import { twMerge } from "tailwind-merge";

interface CustomHeadingProps {
  children: React.ReactNode;
  className?: string; // Menambahkan properti className opsional
}

export function HeroTitle({ children, className }: CustomHeadingProps) {
  return (
    <h1
      className={twMerge(
        `text-3xl font-bold tracking-wide text-textheading md:text-u39 xl:text-u61`,
        className,
      )}
    >
      {children}
    </h1>
  );
}
export function SectionTag({ children, className }: CustomHeadingProps) {
  return (
    <h2
      className={twMerge(
        `text-center text-sm font-bold text-green-500 sm:text-left`,
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function SectionHead({ children, className }: CustomHeadingProps) {
  return (
    <h1
      className={twMerge(
        `text-center text-2xl font-bold tracking-wide text-textheading sm:text-left`,
        className,
      )}
    >
      {children}
    </h1>
  );
}
