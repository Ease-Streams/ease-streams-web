"use client";

import Link from "next/link";
import { Banner } from "./Banner";

const SmallBanner = ({ data, PAYLOAD_CMS_IMG_SERVER }) => {
  return (
    <>
      <div className=" flex flex-col gap-4">
        {data?.title && (
          <div className="flex gap-3 items-center">
            <h2 className="text-base lg:text-lg font-bold text-gray-700">
              {data?.title}
            </h2>
            <div className="flex-grow bg-gray-300 h-[2px]"></div>
          </div>
        )}
        {data?.banners && data?.banners?.length > 0 && (
          <Banner data={data} />
        )}
      </div>
    </>
  );
};

export default SmallBanner;
