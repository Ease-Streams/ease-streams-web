"use client";

import { FaWhatsapp } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

const SupplierList = ({ data }) => {
  return (
    <>
      <div className="flex flex-col border-[1px] border-gray-200 p-2 relative rounded-lg bg-gray-50">
        <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-8 text-center xl:text-left justify-center ">
          {/* <MdVerified
            className="absolute right-[-12px] top-[-12px] text-green-500"
            size={30}
          /> */}
          <img
            height={100}
            width={100}
            className="h-auto w-auto max-h-[45px] max-w-[100px] mx-auto object-contain aspect-square"
            src={data?.logo?.url}
            alt={data?.logp?.alt}
          />
          <div className="flex  flex-col col-span-2">
            <div className="flex flex-col flex-grow relative">
              <p className="text-md font-semibold text-gray-700 flex gap-2 justify-center xl:justify-start">
                {data.title}
                {data.isVerified && (
                  <MdVerified className=" text-green-500" size={20} />
                )}
              </p>
              <small className="text-xs text-gray-600">{data.address}</small>
            </div>
            <div className="flex gap-2 flex-grow">
              <button className="mt-4 w-full border-green-500 max-w-[100px]  gap-1 text-green-600 hover:text-white text-xs font-semibold  flex items-center justify-center border-[2px] hover:bg-green-600  p-[.4rem] rounded-md">
                <FaWhatsapp size={15} /> Whatsapp
              </button>
              <button className="mt-4 w-full whitespace-nowrap max-w-[100px] bg-blue-500 text-xs font-semibold hover:bg-blue-600 text-white  rounded-md">
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupplierList;
