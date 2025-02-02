import ProductImageList from "./ProductImageList";
import { ProductDescription } from "./ProductDescription";
import Suppliers from "./Suppliers";
import Breadcrumb from "../components/globals/Breadcrumb";
import ProductsSection from "../components/home/ProductsSection";
import SEO from "../components/SeoMeta";
import RelatedProducts from "./RelatedProducts";
import CategoriesSection from "../components/home/CategoriesSection";

const ProductDetails = ({ data, breadcrumb, relatedSubCategories }) => {
  const supplierData = data?.supplierRef;
  const brands = data?.brandsRef;
  const relSubCategory = {
    title: "Related Sub Categories",
    subcategoryRefs: relatedSubCategories?.docs,
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-full lg:max-w-[98%] xl:max-w-[95%]  m-auto p-2 relative">
        <Breadcrumb data={breadcrumb} />
        <div className="flex flex-col lg:flex-row items-start gap-5 w-full">
          <ProductImageList
            productimages={data?.productImages}
            PAYLOAD_CMS_IMG_SERVER={process.env.PAYLOAD_CMS_IMG_SERVER}
          />
          <div className="flex-grow flex flex-col gap-3 w-full lg:max-w-[60%] xl:max-w-[45%]">
            <ProductDescription data={data} />
          </div>
          <Suppliers
            brandsData={brands}
            supplierData={supplierData}
            productData={data}
            PAYLOAD_CMS_IMG_SERVER={process.env.PAYLOAD_CMS_IMG_SERVER}
          />
        </div>
        <RelatedProducts data={data} />
        {/* <ProductsSection data={relProducts} /> */}
        <CategoriesSection
          data={relSubCategory}
          PAYLOAD_CMS_IMG_SERVER={process.env.PAYLOAD_CMS_IMG_SERVER}
        />
      </div>
    </>
  );
};

export default ProductDetails;
