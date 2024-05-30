"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const PopularCategories = () => {
  const [title, setTitle] = useState("Popular Categories");
  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex gap-3 items-center">
        <h2 className="text-lg font-bold text-gray-700">{title}</h2>
        <div className="flex-grow bg-gray-300 h-[2px]"></div>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 ">
        {Array.from({ length: 6 }).map((_, index) => (
          <Link
            key={index}
            href={"/"}
            className="rounded-full h-[120px] w-[120px] lg:h-[150px] lg:w-[150px] justify-center items-center border-[2px] shadow-sm bg-white border-green-300 flex flex-col p-2">
            <div className="w-[70px] lg:w-[80px]">
              <Image
                width={100}
                height={100}
                alt="Picture of the author"
                className="mx-auto object-contain"
                src={
                  "https://yellow-pages-bahrain-stage.s3.me-south-1.amazonaws.com/resizedimage/300/uae/images/productimages/defaultimages/noimageproducts/metal-seated-ball-valve-en-din-3516-3540.webp"
                }></Image>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700 font-semibold">Plumbing</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
