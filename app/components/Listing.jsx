"use client";

import { useState } from "react";
import { Filter } from "./Filter";
import { ProductCard } from "./ProductCard";
import { IoGridOutline } from "react-icons/io5";
import { CiBoxList, CiFilter } from "react-icons/ci";
import Pagination from "../components/Pagination";
import { normaizeString } from "../utils/helper";

export const Listing = (props) => {
  const { title, data } = props;
  const [gridView, setGridView] = useState(true);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex w-full gap-4">
      {/* <Filter showFilter={showFilter} setShowFilter={setShowFilter} /> */}
      <div className="flex flex-col relative w-full gap-4">
        <div className="gap-2 flex flex-col">
          <div className="flex  gap-2">
            <div className="relative top-[2px] gap-1  items-center hidden">
              <button
                className={` p-1 ${gridView && "bg-gray-200"}`}
                onClick={() => setGridView(true)}
              >
                <IoGridOutline />
              </button>
              <button
                className={` p-[2px] ${!gridView && "bg-gray-200"}`}
                onClick={() => setGridView(false)}
              >
                <CiBoxList size={20} />
              </button>
            </div>
            <div className="flex justify-between flex-grow">
              {/* Title or the search term */}
              {/* <h1 className="text-2xl font-bold">
                {title && normaizeString(title)}
              </h1> */}
              <button onClick={() => setShowFilter(true)} className="lg:hidden">
                <CiFilter size={20} />
              </button>
            </div>
          </div>
          {/* <hr /> */}
        </div>
        <div className={`flex flex-wrap gap-4 items-center justify-center`}>
          {data?.docs.map((product, index) => (
            <ProductCard data={product} key={index} gridView={gridView} />
          ))}
        </div>
        <hr />
        <Pagination
          totalDocs={data.totalDocs}
          limit={data.limit}
          page={data.page}
          totalPages={data.totalPages}
          hasNextPage={data.hasNextPage}
          hasPrevPage={data.hasPrevPage}
          nextPage={data.nextPage}
          prevPage={data.prevPage}
        />
      </div>
    </div>
  );
};
