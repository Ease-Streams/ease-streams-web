import React from "react";

export default function SubCategoryCard({ category }) {
  return (
    <a
      className="flex flex-col items-center justify-center w-[120px] lg:w-[150px]"
      title={category.title}
      href={`/${category?.slug}`}>
      <img
        height={150}
        width={150}
        className="h-[120px] w-[120px] lg:h-[150px] lg:w-[150px] rounded-full object-fit border-2 shadow-sm"
        src={
          category?.categoryImage
            ? `${process.env.PAYLOAD_CMS_IMG_SERVER}${category?.categoryImage[0]?.image.url}`
            : "images/placeholder.webps"
        }
        alt={`${
          category?.categoryImage && category?.categoryImage[0]?.image.alt
        }`}
      />
      <span className="font-semibold text-center h-[50px] text-sm lg:text-md">
        {category?.title}
      </span>
    </a>
  );
}
