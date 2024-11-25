import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const SubitemItemList = ({ item, selected, index }) => {
  return (
    <a
      href={`#section_${index}`}
      className={`${selected ? "bg-[#29698F]" : "bg-white"} ${
        selected ? "text-white" : ""
      } flex justify-between items-center w-full p-3 shadow-md rounded-[4px] nav-link`}>
      <div className="flex gap-3 items-center">
        {/* {item?.itemImage && (
          <img
            src={`${process.env.PAYLOAD_CMS_SERVER}${item?.itemImage[0]?.image.url}`}
            height={34}
            width={50}
            className={`h-[34px] object-contain max-w-[50px] max-h-[34px]`}
          />
        )} */}
        <span>{item?.title}</span>
      </div>
      <span className={`${selected ? "text-white" : ""}`}>
        <FaLongArrowAltRight size={15} />
      </span>
    </a>
  );
};

export default SubitemItemList;
