import { getCacheId } from "../utils/cache";
import { normalizeSearchTerm } from "../utils/helper";

const api_KEY = process.env.PAYLOAD_CMS_api;
const PAYLOAD_CMS_SERVER =
  process.env.PAYLOAD_CMS_SERVER || "https://cms.easestreams.com";

const headers = {
  "Content-Type": "application/json",
  Authorization: `users api-Key ${api_KEY}`,
};

const portalapi = {
  getHomePageData: async () => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/home?_=${getCacheId()}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    ).then((res) => res.json());
  },

  getHomePageSeoMetaData: async () => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/globals/seo_elements?_=${getCacheId()}`,
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
  },

  getHomeBanners: async () => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/globals/home_banner?_=${getCacheId()}`,
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
  },

  getSubcategoryByCategory: async (category, limit = "") => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/subcategory?select[title]=true&select[categoryImage]=true&select[slug]=true&select[categoryImage.image]=true&where[categoryRef.slug][equals]=${category}&where[isActive][equals]=true&limit=${limit}&_${getCacheId()}`,
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
  },

  getCategoryData: async (category) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/category?where[slug][equals]=${category}&where[isActive][equals]=true&_${getCacheId()}`,
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
  },

  getSubCategoryData: async (category) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/subcategory?where[itemSlug][equals]=${category}&where[isActive][equals]=true&_${getCacheId()}`,
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
  },

  getAllSubCategories: async () => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/subcategory?select[title]=true&select[categoryImage]=true&select[slug]=true&select[itemSlug]=true&where[isActive][equals]=true&_${getCacheId()}`,
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
  },

  getAllCategories: async () => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/category?select[title]=true&select[slug]=true&select[categoryImage]=true&_${getCacheId()}`,
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
  },

  getBrandData: async (brand) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/brands?where[title][like]=${brand.replaceAll(
        "-",
        " "
      )}&_=${getCacheId()}`,
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
  },

  getProductsByBrand: async (brand, page = 1) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/products?where[brandsRef.title][contains]=${brand.replaceAll(
        "-",
        " "
      )}&depth=4&page=${page}&_${getCacheId()}`,
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
  },

  getProductDetails: async (product) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/products?where[itemSlug][equals]=${product}&_${getCacheId()}`,
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
  },

  getRelatedProducts: async (searchTerm) => {
    searchTerm = normalizeSearchTerm(searchTerm);
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/products?where[itemDescription][like]=${searchTerm}&limit=10&[isActive][equals]=true&_${getCacheId()}`,
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
  },

  getRelatedProductsByBrand: async (brand) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/products?where[brandsRef.slug][in]=${brand}&limit=10&[isActive][equals]=true&_${getCacheId()}`,
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
  },

  getProductSearchList: async (searchTerm, page = 1) => {
    searchTerm = normalizeSearchTerm(searchTerm);
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/products?where[itemDescription][like]=${searchTerm}&page=${page}&limit=20&_${getCacheId()}`,
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
  },
};

export default portalapi;
