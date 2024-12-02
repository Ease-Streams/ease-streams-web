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
        className="min-h-[120px] min-w-[120px] lg:min-h-[150px] lg:min-w-[150px] rounded-full object-fit border-2 shadow-sm"
        src={
          category?.categoryImage?.length > 0
            ? `${process.env.PAYLOAD_CMS_IMG_SERVER}${category?.categoryImage[0]?.image.url}`
            : "images/placeholder.webp"
        }
        alt={`${
          category?.categoryImage && category?.categoryImage[0]?.image.alt
        }`}
      />
      <span className="font-semibold text-center min-h-[50px] text-sm lg:text-md">
        {category?.title}
      </span>
    </a>
  );
}
