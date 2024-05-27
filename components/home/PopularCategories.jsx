"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const PopularCategories = () => {
  const [title, setTitle] = useState("Popular Categories");
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <h2 className="text-lg font-bold text-gray-700">{title}</h2>
        <div className="flex-grow bg-gray-300 h-[2px]"></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="rounded-xl border-[2px] shadow-sm border-green-300 flex p-2">
            <div className="w-[120px]">
              <Image
                width={100}
                height={100}
                objectFit={"contain"}
                alt="Picture of the author"
                className="mx-auto"
                src={
                  "https://yellow-pages-bahrain-stage.s3.me-south-1.amazonaws.com/resizedimage/300/uae/images/productimages/defaultimages/noimageproducts/metal-seated-ball-valve-en-din-3516-3540.webp"
                }></Image>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700 font-semibold">Plumbing</p>
              <div className="flex flex-col">
                <small className="">Pipe Fittings</small>
                <small className="">Pipe Valves</small>
                <small className="">Pipe Hoses</small>
              </div>
              <Link href={"/"} className="text-green-700">
                <small>Show All</small>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
