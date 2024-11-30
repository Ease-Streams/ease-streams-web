"use client";

import { PopularCategories } from "./PopularCategories";
import SmallBanner from "./SmallBanner";
import { CategoryProducts } from "./CategoryProducts";

export const ProductShowcase = (props) => {
  const { data } = props;
  const { categories, banners, products } = data;
  return (
    <div className="flex flex-col gap-7">
      {banners &&
        banners?.map((banner, index) => (
          <SmallBanner data={banner} key={index} />
        ))}
      {categories &&
        categories?.map((category, index) => (
          <PopularCategories data={category} key={index} />
        ))}
      {products &&
        products?.map((product, index) => (
          <CategoryProducts data={product} key={index} />
        ))}
    </div>
  );
};
