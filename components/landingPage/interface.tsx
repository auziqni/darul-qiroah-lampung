import React from "react";
import { Button } from "@/components/ui/button";

interface CustomHeadingProps {
  children: React.ReactNode;
  className?: string; // Menambahkan properti className opsional
}

export function ButtonPrimary({ children, className }: CustomHeadingProps) {
  return (
    <Button
      className={`${className} bg-green-500 px-14 py-4 capitalize font-bold`}
    >
      {children}
    </Button>
  );
}
