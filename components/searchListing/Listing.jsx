"use client";

import { useState } from "react";
import { Filter } from "../Filter";
import { ProductCard } from "../ProductCard";
import { IoGridOutline } from "react-icons/io5";
import { CiBoxList, CiFilter } from "react-icons/ci";

export const Listing = () => {
  const [gridView, setGridView] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex w-full gap-4">
      <Filter showFilter={showFilter} setShowFilter={setShowFilter} />
      <div className="flex flex-col relative w-full gap-4">
        <div className="gap-2 flex flex-col">
          <div className="flex  gap-2">
            <div className="relative top-[2px] gap-1 flex items-center lg:hidden">
              <button
                className={` p-1 ${gridView && "bg-gray-200"}`}
                onClick={() => setGridView(true)}>
                <IoGridOutline />
              </button>
              <button
                className={` p-[2px] ${!gridView && "bg-gray-200"}`}
                onClick={() => setGridView(false)}>
                <CiBoxList size={20} />
              </button>
            </div>
            <div className="flex justify-between flex-grow">
              <h1 className="text-2xl font-bold">Speakers</h1>
              <button onClick={() => setShowFilter(true)} className="lg:hidden">
                <CiFilter size={20} />
              </button>
            </div>
          </div>
          <hr />
        </div>
        <div
          className={`grid ${
            gridView ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : ""
          }  gap-4 items-center`}>
          {Array.from({ length: 12 }).map((_, index) => (
            <ProductCard key={index} gridView={gridView} />
          ))}
        </div>
      </div>
    </div>
  );
};
