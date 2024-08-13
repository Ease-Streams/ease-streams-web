"use client";

import { convertToSlug } from "../app/utils/helper";

export const CategoryCard = (props) => {
  const { data, frompage } = props;
  const title = data?.parentcategoryref?.title
    ? data?.parentcategoryref?.title
    : data?.title;
  const categoryImage = data?.parentcategoryref?.categoryImage
    ? data?.parentcategoryref?.categoryImage
    : data?.categoryImage;
  let href = "";
  if (frompage == "Category") {
    href = `${convertToSlug(
      data?.parentcategoryref
        ? data?.parentcategoryref.title
        : data?.rootCategoryRef.title
    )}/${convertToSlug(data?.title)}`;
  } else {
    href = `${convertToSlug(
      data?.parentcategoryref?.rootCategoryRef?.title
    )}/${convertToSlug(data?.parentcategoryref?.title)}`;
  }

  return (
    <a
      title={data?.parentcategoryref?.categoryImage?.alt}
      href={`${href}`}
      className="rounded-full h-[120px] min-w-[120px] lg:h-[150px] lg:min-w-[150px] justify-center items-center border-[2px] shadow-sm bg-white border-green-300 flex flex-col p-2">
      <div className="w-[70px] lg:w-[80px]">
        <img
          width={100}
          height={100}
          alt={categoryImage?.alt}
          className="mx-auto object-contain"
          src={categoryImage.url}
        />
      </div>
      <div className="flex items-end">
        <small className="text-gray-700 font-semibold whitespace-pre">
          {title}
        </small>
      </div>
    </a>
  );
};
