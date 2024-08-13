"use client";

import Breadcrumb from "../../components/globals/BreadCrumb";
import { PopularCategories } from "../../components/home/PopularCategories";
import SmallBanner from "../../components/home/SmallBanner";
import { Listing } from "../../components/Listing";

const SubCategories = (props) => {
  const {
    title,
    data,
    subCategoryData,
    page,
    totalPages,
    breadcrumb,
    nextPage,
    prevPage,
  } = props;
  return (
    <menu className="justify-center flex">
      <div className="w-full  flex flex-col gap-6 p-2 xl:max-w-[90%] min-[1537px]:max-w-[70%]">
        <div className="p-2 pb-4 flex flex-col gap-6 w-full flex-grow ">
          <div className="lg:pl-5 flex-col flex gap-2">
            <Breadcrumb data={breadcrumb} />
            <SmallBanner />
            <PopularCategories
              data={data}
              categoryTitle={title}
              frompage={"Category"}
            />
          </div>
          <Listing
            data={subCategoryData}
            title={data[0]?.title}
            page={page}
            nextPage={nextPage}
            prevPage={prevPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </menu>
  );
};

export default SubCategories;
