import React from "react";

export default function SubCategoryCard({ category }) {
  return (
    <a
      className="flex flex-col items-center justify-center w-full max-w-[160px]"
      title={category.title}
      href={`/${category?.slug}`}>
      <img
        height={150}
        width={150}
        className="h-[150px] w-[150px] rounded-full object-fit border-2 shadow-sm"
        src={
          category?.categoryImage?.length > 0
            ? `${process.env.PAYLOAD_CMS_SERVER}${
                category?.categoryImage && category?.categoryImage[0]?.image.url
              }`
            : "images/placeholder.webp"
        }
        alt={`${
          category?.categoryImage && category?.categoryImage[0]?.image.alt
        }`}
      />
      <span className="font-semibold text-center h-[50px]">
        {category?.title}
      </span>
    </a>
  );
}