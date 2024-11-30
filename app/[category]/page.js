import Image from "next/image";
import portalApi from "../PortalApi/portalApi";
import CategoryContent from "../components/Category/CategoryContent";
import Breadcrumb from "../components/globals/BreadCrumb";
import { AdBanner } from "../components/home/AdBanner";
import SubCategoryCard from "../components/SubCategory/SubCategoryCard";

const page = async (props) => {
  const { params, searchParams } = props;
  const { page } = searchParams;
  const breadcrumb = params;
  const categorySlug = breadcrumb["category"];
  let category = await portalApi.getCategoryData(categorySlug);
  category = category.docs[0];
  return (
    <menu className="justify-center flex ">
      <div className=" hidden lg:flex  p-2 flex-start">
        <div className="flex flex-col gap-2  px-2">
          <AdBanner />
          <AdBanner />
        </div>
      </div>
      <div className="w-full lg:min-w-[75%] lg:max-w-[75%]  min-[1537px]:min-w-[70%] min-[1537px]:max-w-[70%] flex flex-col gap-6 px-2">
        <div className="flex flex-col gap-5 overflow-scroll">
          <Breadcrumb data={breadcrumb} />
          <div className="flex flex-col w-full">
            <div className="flex flex-col lg:flex-row items-center">
              {category?.headingContent && (
                <div className=" order-2 lg:order-1">
                  <div
                    className="!text-sm lg:!text-md"
                    dangerouslySetInnerHTML={{
                      __html: category?.headingContent,
                    }}></div>
                </div>
              )}
              {category?.headingImage && (
                <Image
                  unoptimized={true}
                  height="200"
                  width="200"
                  className="max-w-[200px] mt-2 lg:mt-0 order-1 lg:order-2"
                  src={`${process.env.PAYLOAD_CMS_IMG_SERVER}${category?.headingImage?.url}`}
                />
              )}
            </div>
            <div className="border-gray-300">
              <hr />
            </div>
            <div>
              {category?.subCategoryList &&
                category?.subCategoryList?.map((item, index) => (
                  <div
                    className="flex flex-col gap-5 items-center py-3 border-b-2 border-dashed border-gray-300"
                    key={index}>
                    <h2 className="text-2xl font-semibold">{item?.title}</h2>

                    <div className="flex flex-wrap gap-12 justify-center">
                      {item.subCategories &&
                        item?.subCategories?.map((subCategory, index) => (
                          <div className="" key={index}>
                            <SubCategoryCard category={subCategory} />
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex flex-col gap-5 py-3 border-b-2 border-dashed border-gray-300">
              <h2 className="text-2xl font-semibold text-center">
                {category?.brandGroup?.title}
              </h2>
              {category?.brandGroup?.brandList &&
                category?.brandGroup?.brandList?.map((item, index) => (
                  <div className="flex flex-col gap-4" key={index}>
                    <h3 className="text-xl font-semibold text-left">
                      {item?.title}
                    </h3>
                    <p className="hidden">{item.content}</p>
                    <div className="flex flex-wrap gap-12">
                      {item.brands &&
                        item?.brands?.map((brand, index) => (
                          <a
                            href={`/${brand?.slug}`}
                            title={brand.title}
                            className=""
                            key={index}>
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
          </div>
          <CategoryContent
            categoryData={category}
            PAYLOAD_IMG_SERVER={process.env.PAYLOAD_CMS_SERVER}
          />
        </div>
      </div>
      <div className=" hidden lg:flex  p-2 flex-start">
        <div className="flex flex-col gap-2 px-2">
          <AdBanner />
          <AdBanner />
        </div>
      </div>
    </menu>
  );
};

export default page;
