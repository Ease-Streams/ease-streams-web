"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CategoryCard } from "../CategoryCard";

export const PopularCategories = () => {
  const [title, setTitle] = useState("Popular Categories");
  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex gap-3 items-center">
        <h2 className="text-lg font-bold text-gray-700">{title}</h2>
        <div className="flex-grow bg-gray-300 h-[2px]"></div>
      </div>
      <div className="flex overflow-auto scroll gap-3 ">
        {Array.from({ length: 6 }).map((_, index) => (
          <CategoryCard key={index} />
        ))}
      </div>
    </div>
  );
};
