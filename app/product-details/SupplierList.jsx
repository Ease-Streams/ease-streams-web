"use client";

import { FaWhatsapp } from "react-icons/fa6";
import { MdVerified, MdAdd, MdCheck } from "react-icons/md";

const SupplierList = ({ data, PAYLOAD_CMS_IMG_SERVER, onCheckboxChange, isSelected, selectedSuppliers,handleClick }) => {
  const handleCheckboxClick = () => {
      onCheckboxChange(data.id);
  };

  

  return (
    <>
      <div className="relative flex flex-col border-[1px] border-gray-200 p-2 rounded-lg bg-gray-50">
        {/* Checkbox with Icon */}
        <div
          className={`absolute top-[-10px] right-[-10px] flex items-center shadow-md border-[1px] border-gray-400 justify-center w-8 h-8 rounded-full cursor-pointer z-20
            ${isSelected ? "bg-green-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
          onClick={handleCheckboxClick}
        >
          {isSelected ? <MdCheck size={18} /> : <MdAdd size={18} />}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-8 text-center xl:text-left justify-center">
          {/* Supplier Logo */}
          <img
            height={80}
            width={80}
            className="h-auto w-auto max-w-[80px] mx-auto object-contain aspect-square"
            src={
              data?.logo?.url
                ? `${PAYLOAD_CMS_IMG_SERVER}${data?.logo?.url}`
                : "/images/placeholder.webp"
            }
            alt={data?.logp?.alt}
          />

          {/* Supplier Details */}
          <div className="flex flex-col col-span-2">
            <div className="flex flex-col flex-grow relative">
              <p className="text-md font-semibold text-gray-700 flex gap-2 justify-center xl:justify-start">
                {data.title}
                {data.isVerified && <MdVerified className="text-green-500" size={20} />}
              </p>
              <small className="text-xs text-gray-600">{data.address}</small>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-2 mt-4">
              <button className="border-green-500 max-w-[100px] text-green-600 hover:text-white text-xs font-semibold flex items-center justify-center border-[2px] hover:bg-green-600 p-1 rounded-md">
                <FaWhatsapp size={15} />
              </button>
              <button
                onClick={(e)=>handleClick(e,'single',data)}
                className="w-full whitespace-nowrap max-w-[90px] p-1 bg-blue-500 text-xs font-semibold hover:bg-blue-600 text-white rounded-md"
                type="button"
              >
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
