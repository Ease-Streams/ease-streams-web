"use client";
import { useState } from "react";
import { ProductCard } from "../ProductCard";

export const CategoryProducts = (props) => {
  const { data } = props;
  const title = data?.title;
  const products = data?.data[0]?.productRef;
  return (
    <div className="flex flex-col gap-3">
      {title && (
        <div className="flex gap-3 items-center">
          <h2 className="text-lg font-bold text-gray-700">{title}</h2>
          <div className="flex-grow bg-gray-300 h-[2px]"></div>
        </div>
      )}

      <div className="flex gap-4 overflow-auto scroll">
        {products?.map((product, index) => (
          <ProductCard data={product} key={index} gridView={true} />
        ))}
      </div>
    </div>
  );
};
