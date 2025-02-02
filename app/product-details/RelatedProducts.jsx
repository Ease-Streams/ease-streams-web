import React from "react";
import ProductsSection from "../components/home/ProductsSection";
import portalapi from "../PortalApi/portalApi";

const RelatedProducts = async ({ data }) => {
  const product = data?.itemSlug;
  let brands = data?.brandsRef.map((o) => o.slug);
  let relatedProducts = await portalapi.getRelatedProductsByBrand(brands);
  relatedProducts = {
    title: "Related Products",
    productRefs: relatedProducts.docs.filter((o) => o.itemSlug != product),
  };
  return <ProductsSection data={relatedProducts} />;
};

export default RelatedProducts;
