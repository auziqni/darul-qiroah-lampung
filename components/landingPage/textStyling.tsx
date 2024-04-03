import React from "react";

interface CustomHeadingProps {
  children: React.ReactNode;
  className?: string; // Menambahkan properti className opsional
}

export function SectionTag({ children, className }: CustomHeadingProps) {
  return (
    <h2 className={`text-green-500 text-sm font-bold text-center ${className}`}>
      {children}
    </h2>
  );
}

export function SectionHead({ children, className }: CustomHeadingProps) {
  return (
    <h1
      className={` text-2xl font-bold tracking-wide text-center ${className}`}
    >
      {children}
    </h1>
  );
}
