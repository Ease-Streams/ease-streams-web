import { normalizeSearchTerm } from "../utils/helper";

const api_KEY = process.env.PAYLOAD_CMS_api;
const PAYLOAD_CMS_SERVER = process.env.PAYLOAD_CMS_SERVER;
const headers = {
  "Content-Type": "application/json",
  Authorization: `users api-Key ${api_KEY}&_${new Date().getTime()}`,
};

const portalapi = {
  getHomePageData: async () => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/home?_${new Date().getTime()}`,
      { cache: "no-store" }
    )
      .then((res) => {
        const data = res.json();
        return data;
      })
      .catch((err) => console.error(err));
  },
  getHomeBanners: async () => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/globals/home_banner?_${new Date().getTime()}`,
      { cache: "no-store" }
    )
      .then(async (res) => {
        const data = await res.json();
        console.log(data, "datasdasdsa");
        return data;
      })
      .catch((err) => console.error(err));
  },
  getSubcategoryByCategory: async (category, page = 1) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/subcategory?select[title]=true&select[categoryImage]=true&select[slug]=true&select[categoryImage.image]=true&where[categoryRef.slug][equals]=${category}&where[isActive][equals]=true&_${new Date().getTime()}`,
      { cache: "no-store" }
    )
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .catch((err) => console.error(err));
  },

  getCategoryData: async (category) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/category?where[slug][equals]=${category}&where[isActive][equals]=true&_${new Date().getTime()}`,
      { cache: "no-store" }
    )
      .then(async (res) => {
        const data = await res.json();
        console.log(data, "data");

        return data;
      })
      .catch((err) => console.error(err));
  },
  getSubCategoryData: async (category) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/subcategory?where[itemSlug][equals]=${category}&where[isActive][equals]=true&_${new Date().getTime()}`,
      { cache: "no-store" }
    )
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .catch((err) => console.error(err));
  },
  getAllSubCategories: async (category, page = 1) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/subcategory?select[title]=true&select[categoryImage]=true&select[slug]=true&select[itemSlug]=true&where[isActive][equals]=true&_${new Date().getTime()}`,
      { cache: "no-store" }
    )
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .catch((err) => console.error(err));
  },
  getAllCategories: async (category, page = 1) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/category?select[title]=true&select[categoryImage]=true&select[slug]=true&_${new Date().getTime()}`,
      { cache: "no-store" }
    )
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .catch((err) => console.error(err));
  },

  getBrandData: async (brand, page = 1) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/brands?where[title][like]=${brand.replaceAll(
        "-",
        " "
      )}&_${new Date().getTime()}`,
      { cache: "no-store" }
    )
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .catch((err) => console.error(err));
  },
  getProductsByBrand: async (brand, page = 1) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/products?where[brandsRef.title][contains]=${brand.replaceAll(
        "-",
        " "
      )}&depth=4&page=${page}&_${new Date().getTime()}`,
      { cache: "no-store" }
    )
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .catch((err) => console.error(err));
  },

  getProductDetails: async (product) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/products?where[itemSlug][equals]=${product}&_${new Date().getTime()}`,
      { cache: "no-store" }
    )
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .catch((err) => console.error(err));
  },
  getProductSearchList: async (searchTerm, page = 1) => {
    searchTerm = normalizeSearchTerm(searchTerm);

    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/products?where[or][0][searchtagsRef.title][like]=${searchTerm}&where[or][1][title][like]=${searchTerm}&depth=3&page=${page}&_${new Date().getTime()}`,
      { cache: "no-store" }
    )
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .catch((err) => console.error(err));
  },
};

export default portalapi;
