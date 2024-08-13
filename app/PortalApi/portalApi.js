import { normalizeSearchTerm } from "../utils/helper";

const API_KEY = process.env.PAYLOAD_CMS_API;
const PAYLOAD_CMS_SERVER = process.env.PAYLOAD_CMS_SERVER;
const headers = {
  "Content-Type": "application/json",
  Authorization: `users API-Key ${API_KEY}`,
};

const portalApi = {
  getHomePageData: async () => {
    return await fetch(`${PAYLOAD_CMS_SERVER}api/home?depth=4`, {
      method: "GET",
    })
      .then((res) => {
        const data = res.json();
        return data;
      })
      .catch((err) => console.error(err));
  },
  getHomeBanners: async () => {
    return await fetch(`${PAYLOAD_CMS_SERVER}api/globals/home_banner`, {
      method: "GET",
    })
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .catch((err) => console.error(err));
  },
  getSubCategoryData: async (subCategory, page = 1) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}api/products?depth=4&page=${page}&where[parentcategoryref.title][like]=${subCategory?.replaceAll(
        "-",
        " "
      )}`,
      {
        method: "GET",
      }
    )
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .catch((err) => console.error(err));
  },

  getCategoryData: async (category, page = 1) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}api/parentcategory?where[rootCategoryRef.title][like]=${category.replaceAll(
        "-",
        " "
      )}&depth=4&page=${page}`,
      {
        method: "GET",
      }
    )
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .catch((err) => console.error(err));
  },

  getProductDetailsWithItemCode: async (itemCode) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}api/products?where[itemCode][equals]=${itemCode}&depth=3`,
      {
        method: "GET",
      }
    )
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .catch((err) => console.error(err));
  },
  getProductSearchList: async (searchTerm, page = 1) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}api/products?where[searchtagsRef.title]][like]=${normalizeSearchTerm(
        searchTerm
      )}&depth=3&page=${page}`,
      {
        method: "GET",
      }
    )
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .catch((err) => console.error(err));
  },
};

export default portalApi;
