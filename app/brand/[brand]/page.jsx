// components/BrandShowcase.jsx
import ProductList from "@/app/[category]/[sub-category]/ProductList";
import portalApi from "@/app/PortalApi/portalApi";
import Image from "next/image";
import React from "react";

const page = async (props) => {
  const { params, searchParams } = props;
  const { page } = searchParams;
  const { brand } = params;
  let [brandData, brandProducts] = await Promise.all([
    portalApi.getBrandData(brand),
    portalApi.getProductsByBrand(brand, page),
  ]).catch((err) => {
    console.error(err);
    return [];
  });
  brandData = brandData.docs[0];

  return (
    <>
      <div className="max-w-7xl mx-auto pt-2">
        {/* Brand Section */}
        <div className="text-center ">
          <Image
            src={brandData?.image?.url}
            alt={brandData?.image?.alt}
            width={100}
            height={100}
            className="mx-auto"
          />
          <h1 className="text-3xl font-bold mt-4">{brandData.title}</h1>
          <p className="text-gray-600 mt-2">{brandData.description}</p>
        </div>
      </div>

      {/* Products Section */}
      <ProductList
        data={brandProducts?.docs}
        page={brandProducts?.page}
        totalPages={brandProducts?.totalPages}
        nextPage={brandProducts?.nextPage}
        prevPage={brandProducts?.prevPage}
        breadcrumb={{ category: brandData.title }}
        title={brandData.title}
      />
    </>
  );
};

export default page;
