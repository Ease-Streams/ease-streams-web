"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProductCard } from "../ProductCard";
import { PopularCategories } from "./PopularCategories";
import { SmallBanner } from "./SmallBanner";

export const BestSellers = () => {
  const [title, setTitle] = useState("Best Sellers");
  return (
    <>
      <PopularCategories />
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <h2 className="text-lg font-bold text-gray-700">{title}</h2>
          <div className="flex-grow bg-gray-300 h-[2px]"></div>
        </div>
        <SmallBanner />
        <div className="flex gap-3 items-center">
          <h2 className="text-lg font-bold text-gray-700">{title}</h2>
          <div className="flex-grow bg-gray-300 h-[2px]"></div>
        </div>
        <div className="flex gap-4 overflow-auto scroll">
          {Array.from({ length: 12 }).map((_, index) => (
            <ProductCard key={index} gridView={true} />
          ))}
        </div>
      </div>
    </>
  );
};
