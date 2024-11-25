import Breadcrumb from "@/app/components/globals/BreadCrumb";
import { AdBanner } from "@/app/components/home/AdBanner";
import { Banner } from "@/app/components/home/Banner";
import { ProductCard } from "@/app/components/ProductCard";
import SubCategoryItemList from "@/app/components/SubCategory/SubCategoryItemList";
import portalapi from "@/app/PortalApi/portalApi";

const page = async (props) => {
  const { params, searchParams } = props;
  const { page } = searchParams;
  const breadcrumb = params;
  const categorySlug = breadcrumb["sub-category"];
  let subCategory = await portalapi.getSubCategoryData(categorySlug);
  subCategory = subCategory.docs[0];
  console.log(subCategory, "subCategory");

  return (
    <menu className="justify-center flex bg-gray-100">
      <div className="hidden lg:flex p-2 flex-start">
        <div className="flex flex-col gap-2 px-2">
          <AdBanner />
          <AdBanner />
        </div>
      </div>
      <div className="w-full lg:min-w-[75%] lg:max-w-[75%] min-[1537px]:min-w-[70%] min-[1537px]:max-w-[70%] flex flex-col gap-6 px-2">
        <Breadcrumb data={breadcrumb} />
        {subCategory?.banners.length > 0 && (
          <Banner data={subCategory?.banners} />
        )}
        <div className="flex gap-3 flex-col lg:flex-row">
          <nav className="w-full flex flex-col gap-3 lg:max-w-[350px] text-sm sticky top-32 z-10  h-screen">
            {subCategory?.productList.length > 0 &&
              subCategory?.productList.map((item, index) => (
                <SubCategoryItemList item={item} key={index} index={index} />
              ))}
          </nav>
          <div className="flex flex-col w-full gap-5">
            {subCategory?.productList.length > 0 &&
              subCategory?.productList.map((item, index) => (
                <section
                  id={`section_${index}`}
                  className="flex flex-col min-h-[80vh]"
                  key={index}>
                  <div>
                    <div className="w-full">
                      <details className="group rounded-md">
                        <summary className="cursor-pointer font-medium text-lg flex items-center justify-between">
                          <div className="flex justify-between w-full mr-2 pb-6 items-center">
                            <h2 className="text-3xl font-bold max-w-max text-[#4B08A1]">
                              {item?.title}
                            </h2>
                            <small className="text-[#1A70CD] pb-2 border-b-2 border-[#1A70CD]">
                              {item?.subTitle}
                            </small>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 relative top-[-10px] transform group-open:rotate-180 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        </summary>
                        <div className="px-4 py-2 pb-4 text-gray-700">
                          Tailwind CSS is a utility-first CSS framework for
                          building custom designs without leaving your HTML.
                        </div>
                      </details>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-3">
                    {item?.products.length > 0 &&
                      item.products.map((product, index) => (
                        <ProductCard key={index} data={product} />
                      ))}
                  </div>
                </section>
              ))}
          </div>
        </div>
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

export default page;
