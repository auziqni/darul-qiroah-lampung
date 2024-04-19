import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import testimonial from "@/content/book/testimonial.json";

export default function BookPeak({ className }: { className?: string }) {
  return (
    <section
      className={twMerge(
        " my-20 flex flex-col items-center bg-white",
        className,
      )}
    >
      <h1 className="text-u25 font-semibold  md:text-u28">Testimoni</h1>
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
        <figure className="flex max-w-screen-md flex-col items-center gap-6 ">
          <BiSolidQuoteAltLeft />
          <blockquote>
            <p className="text-slate-900 md:text-u25">
              &#34; {testimonial[0].katanya}&#34;
            </p>
          </blockquote>
          <figcaption className=" flex items-center justify-center space-x-3">
            <Image
              src={testimonial[0].foto}
              alt="people"
              width={100}
              height={100}
              className=" h-6 w-6 rounded-full"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 ">
              <div className="pr-3 font-medium text-gray-900 ">
                {testimonial[0].nama}
              </div>
              <div className="pl-3 text-sm font-light text-gray-500">
                {testimonial[0].posisi}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
