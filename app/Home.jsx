import React from "react";
import { Banner } from "./components/home/Banner";
import { AdBanner } from "./components/home/AdBanner";
import ProductsSection from "./components/home/ProductsSection";
import CategoriesSection from "./components/home/CategoriesSection";
import SubcategoriesSection from "./components/home/SubcategoriesSection";
import BrandsSection from "./components/home/BrandsSection";
import BannersSection from "./components/home/BannersSection";
import SmallBanner from "./components/home/SmallBanner";

const HomePage = (props) => {
  let { data, homeBanner } = props;
  // Function to render the correct section based on blockType
  const renderSection = (section) => {
    switch (section.blockType) {
      case "products":
        return <ProductsSection key={section.id} data={section} />;
      case "categories":
        return <CategoriesSection key={section.id} data={section} />;
      case "subcategories":
        return <SubcategoriesSection key={section.id} data={section} />;
      case "brands":
        return <BrandsSection key={section.id} data={section} />;
      case "banners":
        return (
          <SmallBanner
            key={section.id}
            data={section}
            PAYLOAD_CMS_IMG_SERVER={process.env.PAYLOAD_CMS_IMG_SERVER}
          />
        );
      default:
        return <div key={section.id}>Unsupported Section</div>; // Provide feedback for unsupported blockType
    }
  };

  return (
    <menu className="justify-center flex">
      {/* <div className=" hidden lg:flex  p-2 flex-start">
        <div className="flex flex-col gap-2  px-2">
          <AdBanner />
          <AdBanner />
        </div>
      </div> */}
      <div className="w-full lg:min-w-[80%] lg:max-w-[80%]  min-[1537px]:min-w-[75%] min-[1537px]:max-w-[75%] flex flex-col gap-6 p-2">
        {homeBanner && (
          <Banner
            data={homeBanner}
            PAYLOAD_CMS_IMG_SERVER={process.env.PAYLOAD_CMS_IMG_SERVER}
          />
        )}
        <div className="flex flex-col gap-4">
          {data &&
            data?.map((item) =>
              item.sections?.map((section) => renderSection(section))
            )}
        </div>
      </div>
      {/* <div className=" hidden lg:flex  p-2 flex-start">
        <div className="flex flex-col gap-2 px-2">
          <AdBanner />
          <AdBanner />
        </div>
      </div> */}
    </menu>
  );
};

export default HomePage;
