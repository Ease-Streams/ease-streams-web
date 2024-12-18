import ProductImageList from "./ProductImageList";
import { ProductDescription } from "./ProductDescription";
import Suppliers from "./Suppliers";
import Breadcrumb from "../components/globals/Breadcrumb";
import ProductsSection from "../components/home/ProductsSection";
import SubcategoriesSection from "../components/home/SubcategoriesSection";

const ProductDetails = ({
  data,
  breadcrumb,
  relatedProducts,
  relatedSubCategories,
}) => {
  const supplierData = data?.supplierRef;
  const brands = data?.brandsRef;
  const relProducts = {
    title: "Related Products",
    productRefs: relatedProducts?.docs,
  };
  const relSubCategory = {
    title: "Related Sub Categories",
    subcategoryRefs: relatedSubCategories?.docs,
  };
  return (
    <div className="flex flex-col gap-4 w-full lg:max-w-[98%] xl:max-w-[95%]  m-auto p-2 relative">
      <Breadcrumb data={breadcrumb} />
      <div className="flex flex-col lg:flex-row items-start gap-5 w-full">
        <ProductImageList
          productimages={data?.productimages}
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
      <ProductsSection data={relProducts} />
      <SubcategoriesSection data={relSubCategory} />
    </div>
  );
};

export default ProductDetails;
