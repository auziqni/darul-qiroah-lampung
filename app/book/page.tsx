import React from "react";
import BookFeatures from "@/components/book/bookFeatures";
import BookHero from "@/components/book/bookHero";
import BookPeak from "@/components/book/bookpeak";
import BookTesti from "@/components/book/bookTesti";

export default function Book() {
  return (
    <main>
      <BookHero />
      <BookFeatures />
      <BookPeak />
      <BookTesti />
    </main>
  );
}
