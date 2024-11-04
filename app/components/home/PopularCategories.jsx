"use client";

import { normaizeString } from "@/app/utils/helper";
import { CategoryCard } from "../CategoryCard";

export const PopularCategories = (props) => {
  const { data, categoryTitle, frompage } = props;
  const title = data?.title ? data.title : categoryTitle;
  const categories = data.data ? data.data : data;
  return (
    <div className="flex flex-col gap-3">
      {title && (
        <div className="flex gap-3 items-center">
          <h2 className="text-lg font-bold text-gray-700">
            {normaizeString(title)}
          </h2>
          <div className="flex-grow bg-gray-300 h-[2px]"></div>
        </div>
      )}
      <div className="flex overflow-auto scroll gap-3 ">
        {categories.map((category, index) => (
          <CategoryCard key={index} data={category} frompage={frompage} />
        ))}
      </div>
    </div>
  );
};
