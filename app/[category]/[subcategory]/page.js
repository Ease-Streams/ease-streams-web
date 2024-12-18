// src/app/[sub-category]/page.jsx

import Breadcrumb from "@/app/components/globals/Breadcrumb";
import { AdBanner } from "@/app/components/home/AdBanner";
import { Banner } from "@/app/components/home/Banner";
import portalapi from "@/app/PortalApi/portalApi";
import ProductSections from "@/app/components/SubCategory/ProductSections"; // Client component for interactive section logic
import SubCategoryList from "@/app/components/SubCategory/SubCategoryList";
import CategoryContent from "@/app/components/Category/CategoryContent";

const Page = async ({ params }) => {
  const { subcategory } = await params;
  const subCategoryData = await portalapi.getSubCategoryData(subcategory);
  const subCategory = subCategoryData?.docs[0];

  return (
    <menu className="justify-center flex bg-gray-100">
      <div className="hidden lg:flex p-2 flex-start">
        <div className="flex flex-col gap-2 px-2">
          <AdBanner />
          <AdBanner />
        </div>
      </div>
      <div className="w-full lg:min-w-[75%] lg:max-w-[75%] min-[1537px]:min-w-[70%] min-[1537px]:max-w-[70%] flex flex-col gap-3 px-2">
        <Breadcrumb data={params} />
        {subCategory?.banners?.length > 0 && (
          <Banner
            data={subCategory.banners}
            PAYLOAD_CMS_IMG_SERVER={process.env.PAYLOAD_CMS_IMG_SERVER}
          />
        )}

        <div className="flex gap-3 flex-col lg:flex-row ">
          {/* Sidebar with navigation links */}
          <div className="z-10 flex flex-col gap-2 lg:sticky top-20 w-full lg:max-w-[220px] xl:max-w-[280px]">
            <SubCategoryList productList={subCategory?.productList || []} />
          </div>

          {/* Sections that handle scrolling and dynamic updates */}
          <ProductSections productList={subCategory?.productList || []} />
        </div>
        <CategoryContent
          categoryData={subCategory}
          PAYLOAD_IMG_SERVER={process.env.PAYLOAD_CMS_IMG_SERVER}
        />
      </div>
      <div className="hidden lg:flex p-2 flex-start">
        <div className="flex flex-col gap-2 px-2">
          <AdBanner />
          <AdBanner />
        </div>
      </div>
    </menu>
  );
};

export default Page;
