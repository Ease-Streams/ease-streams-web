"use client";

import { useState } from "react";
import { Filter } from "./Filter";
import { ProductCard } from "./ProductCard";
import { IoGridOutline } from "react-icons/io5";
import { CiBoxList, CiFilter } from "react-icons/ci";
import { normaizeString } from "../app/utils/helper";

export const Listing = (props) => {
  const { title, data, page, totalPages, nextPage, prevPage } = props;
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
              {/* Title or the search term */}
              <h1 className="text-2xl font-bold">
                {title && normaizeString(title)}
              </h1>
              <button onClick={() => setShowFilter(true)} className="lg:hidden">
                <CiFilter size={20} />
              </button>
            </div>
          </div>
          <hr />
        </div>
        <div
          className={`grid ${
            gridView ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-5" : ""
          }  gap-4 items-center`}>
          {data?.map((product, index) => (
            <ProductCard data={product} key={index} gridView={gridView} />
          ))}
        </div>
        <hr />
        <form
          aria-label="Page navigation example"
          className="flex justify-center">
          <ul class="inline-flex -space-x-px text-sm">
            <li>
              <button
                name="page"
                value={prevPage ? prevPage : 1}
                class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => {
              return (
                <li key={index}>
                  <button
                    name="page"
                    value={index + 1}
                    class={`${
                      index + 1 == page
                        ? "bg-[#03A7E8] text-white cursor-none"
                        : "bg-white text-gray-500 hover:bg-gray-100"
                    } flex items-center justify-center px-3 h-8 leading-tight    border 
                    border-gray-300 `}>
                    {index + 1}
                  </button>
                </li>
              );
            })}
            <li>
              <button
                name="page"
                value={nextPage ? nextPage : 1}
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};
