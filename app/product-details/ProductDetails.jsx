"use client";

import ProductImageList from "./ProductImageList";
import { ProductDescription } from "./ProductDescription";
import Suppliers from "./Suppliers";
import Breadcrumb from "../components/globals/Breadcrumb";

const ProductDetails = (props) => {
  const { data, breadcrumb } = props;
  const supplierData = data?.supplierRef;
  const brands = data?.brandsRef;

  return (
    <div className="flex flex-col gap-4 w-full lg:max-w-[98%] xl:max-w-[95%]  m-auto p-2">
      <Breadcrumb data={breadcrumb} />
      <div className="flex flex-col lg:flex-row items-start gap-5 w-full">
        <ProductImageList productimages={data?.productimages} />
        <div className="flex-grow flex flex-col gap-3 w-full lg:max-w-[65%] xl:max-w-[50%]">
          <ProductDescription data={data} />
        </div>
        <Suppliers
          brandsData={brands}
          supplierData={supplierData}
          productData={data}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
