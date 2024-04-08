import React from "react";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

interface CustomHeadingProps {
  children: React.ReactNode;
  className?: string; // Menambahkan properti className opsional
}

export function ButtonPrimary({ children, className }: CustomHeadingProps) {
  return (
    <Button
      className={twMerge(
        " w-fit bg-green-500 px-14 py-4 font-bold capitalize",
        className,
      )}
    >
      {children}
    </Button>
  );
}
