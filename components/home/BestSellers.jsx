"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const BestSellers = () => {
  const [title, setTitle] = useState("Best Sellers");
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <h2 className="text-lg font-bold text-gray-700">{title}</h2>
        <div className="flex-grow bg-gray-300 h-[2px]"></div>
      </div>
      <div className="flex-grow rounded-lg">
        <img
          className=" rounded-lg"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1f25201ced5d720d.jpg?q=20"
        />
      </div>
      <div className="flex gap-3 items-center">
        <h2 className="text-lg font-bold text-gray-700">{title}</h2>
        <div className="flex-grow bg-gray-300 h-[2px]"></div>
      </div>
      <div className="flex gap-4 overflow-auto scroll">
        {Array.from({ length: 12 }).map((_, index) => (
          <Link
            href={"/"}
            class="bg-white rounded-lg shadow-md p-4 max-w-[180px] min-w-[180px]"
            key={index}>
            <img
              src="https://c8n.tradeling.com/img/plain/pim/rs:auto:1600::0/f:webp/q:75/up/65377b6fb63df7e431a1d927/03b49acb6a828504ddf90b75133932a3.jpg"
              alt="Samsung TV"
              height={100}
              width={100}
              class="w-full h-auto mb-4 max-w-[120px] m-auto"
            />

            <h2 class="text-sm font-semibold text-gray-800">
              Samsung 55 Inch Class Crystal UHD 4K Smart TV
            </h2>
            <p class="text-gray-600 text-xs">Model XYZ123</p>

            <div class="mt-4 text-sm">
              <p class="font-semibold text-green-600">AED 1,375.50</p>
              <p class="text-sm text-gray-500 line-through">AED 1,592.96</p>
              <p class="text-xs text-green-600">14% off</p>
            </div>
            <div className="flex justify-between gap-2">
              <button class="mt-4 w-full bg-blue-500 text-xs font-semibold hover:bg-blue-600 text-white p-1 py-2 rounded-md">
                Send Enquiry
              </button>
              {/* <button class="mt-4 w-full bg-[#52BA47] text-xs font-semibold hover:bg-green-500 text-white p-1 py-2 rounded-md">
                Buy Now
              </button> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
