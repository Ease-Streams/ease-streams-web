import Image from "next/image";
import portalApi from "../PortalApi/portalApi";
import CategoryContent from "../components/Category/CategoryContent";
import Breadcrumb from "../components/globals/Breadcrumb";
import { AdBanner } from "../components/home/AdBanner";
import SubCategoryList from "../components/Category/SubCategoryList"; // Import the new SubCategoryList component
import SEO from "../components/SeoMeta";

const page = async ({ params, searchParams }) => {
  const awaitedParams = await params;
  const awaitedSearchParams = await searchParams;
  const { category, subcategory, product } = awaitedParams;
  let categoryData = await portalApi.getCategoryData(category);

  if (categoryData && categoryData.docs && categoryData.docs.length > 0) {
    categoryData = categoryData.docs[0];
  }
  const seoData = {
    metaTitle: categoryData?.metaTitle || categoryData.title,
    metaDescription: categoryData?.metaDescription || "",
    metaKeyword: categoryData?.metaKeyword || "",
    canonical:
      categoryData?.canonical ||
      `${process.env.EASESTREAMS_SERVER}${categoryData?.slug}`,
  };
  return (
    <>
      {" "}
      <SEO seoData={seoData} />
      <menu className="justify-center flex">
        <div className="hidden lg:flex p-2 flex-start">
          <div className="flex flex-col gap-2 px-2">
            <AdBanner />
            <AdBanner />
          </div>
        </div>

        <div className="w-full lg:min-w-[75%] lg:max-w-[75%] min-[1537px]:min-w-[70%] min-[1537px]:max-w-[70%] flex flex-col gap-6 px-2">
          <div className="flex flex-col gap-5 overflow-scroll">
            <Breadcrumb data={awaitedParams} />
            <div className="flex flex-col w-full">
              <div className="flex flex-col lg:flex-row items-center pb-2 gap-3 lg:gap-16">
                {categoryData?.headingContent && (
                  <div className="order-2 lg:order-1 lg:!max-w-[80%]">
                    <div
                      className="!text-sm lg:!text-base !text-justify"
                      dangerouslySetInnerHTML={{
                        __html: categoryData?.headingContent,
                      }}></div>
                  </div>
                )}
                {categoryData?.headingImage && (
                  <img
                    alt={`${categoryData?.headingImage?.alt}`}
                    height="300"
                    width="500"
                    className="object-fit max-w-[350px] lg:max-w-[300px] mt-2 lg:mt-0 order-1 lg:order-2 p-1"
                    src={`${process.env.PAYLOAD_CMS_IMG_SERVER}${categoryData?.headingImage?.url}`}
                  />
                )}
              </div>

              {/* Subcategories */}
              <div>
                {categoryData?.subCategoryList &&
                  categoryData?.subCategoryList?.map((item, index) => (
                    <SubCategoryList
                      key={index}
                      item={item}
                      index={index}
                      PAYLOAD_CMS_IMG_SERVER={
                        process.env.PAYLOAD_CMS_IMG_SERVER
                      }
                    />
                  ))}
              </div>

              {/* Brand Group */}
              {categoryData?.brandGroup?.brandList?.title && (
                <div className="flex flex-col gap-5 py-3 border-b-2 border-dashed border-gray-300">
                  <h2 className="text-2xl font-semibold text-center">
                    {categoryData?.brandGroup?.title}
                  </h2>
                  {categoryData?.brandGroup?.brandList &&
                    categoryData?.brandGroup?.brandList?.map((item, index) => (
                      <div className="flex flex-col gap-4" key={index}>
                        <h3 className="text-xl font-semibold text-left">
                          {item?.title}
                        </h3>
                        <div className="flex flex-wrap gap-12">
                          {item.brands &&
                            item?.brands?.map((brand, innerIndex) => (
                              <a
                                href={`/${brand?.slug}`}
                                title={brand.title}
                                className=""
                                key={innerIndex}>
                                <img
                                  src={`${process.env.PAYLOAD_CMS_IMG_SERVER}${brand?.image.url}`}
                                  alt={brand?.image?.alt}
                                  height={150}
                                  width={150}
                                  className="h-auto object-contain max-w-[150px]"
                                />
                              </a>
                            ))}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
            <CategoryContent
              categoryData={category}
              PAYLOAD_IMG_SERVER={process.env.PAYLOAD_CMS_IMG_SERVER}
            />
          </div>
        </div>

        <div className="hidden lg:flex p-2 flex-start">
          <div className="flex flex-col gap-2 px-2">
            <AdBanner />
            <AdBanner />
          </div>
        </div>
      </menu>
    </>
  );
};

export default page;
