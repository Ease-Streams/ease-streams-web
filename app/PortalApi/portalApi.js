import { normalizeSearchTerm } from "../utils/helper";

const api_KEY = process.env.PAYLOAD_CMS_api;
const PAYLOAD_CMS_SERVER =
  process.env.PAYLOAD_CMS_SERVER || "https://cms.easestreams.com";
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
  getHomePageSeoMetaData: async () => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/globals/seo_elements?_${new Date().getTime()}`,
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
  getSubcategoryByCategory: async (category, limit = "") => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/subcategory?select[title]=true&select[categoryImage]=true&select[slug]=true&select[categoryImage.image]=true&where[categoryRef.slug][equals]=${category}&where[isActive][equals]=true&limit=${limit}&_${new Date().getTime()}`,
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
      `${PAYLOAD_CMS_SERVER}/api/category?select[title]=true&select[slug]=true&select[categoryImage]=true&_${new Date().getTime()}`,
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
  getRelatedProducts: async (searchTerm) => {
    searchTerm = normalizeSearchTerm(searchTerm);

    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/products?where[itemDescription][like]=${searchTerm}&limit=10&[isActive][equals]=true&_${new Date().getTime()}`,
      { cache: "no-store" }
    )
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .catch((err) => console.error(err));
  },

  getRelatedProductsByBrand: async (brand) => {
    return await fetch(
      `${PAYLOAD_CMS_SERVER}/api/products?where[brandsRef.slug][in]=${brand}&limit=10&[isActive][equals]=true&_${new Date().getTime()}`,
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
      `${PAYLOAD_CMS_SERVER}/api/products?where[itemDescription][like]=${searchTerm}&page=${page}&limit=20&_${new Date().getTime()}`,
      { cache: "no-store" }
    )
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .catch((err) => console.error(err));
  },
};

export async function fetchSuggestions(searchTerm) {
  // API endpoints with the search term dynamically inserted
  const urls = [
    `${PAYLOAD_CMS_SERVER}/api/products?select[itemDescription]=true&select[title]=true&select[slug]=true&where[itemDescription][like]=${encodeURIComponent(
      searchTerm
    )}&limit=10`,
    `${PAYLOAD_CMS_SERVER}/api/category?select[title]=true&select[slug]=true&where[title][like]=${encodeURIComponent(
      searchTerm
    )}&limit=10`,
    `${PAYLOAD_CMS_SERVER}/api/subcategory?select[title]=true&select[slug]=true&where[title][like]=${encodeURIComponent(
      searchTerm
    )}&limit=10`,
  ];

  try {
    // Use Promise.all to fetch all URLs concurrently
    const responses = await Promise.all(urls.map((url) => fetch(url)));

    // Check all responses for success and parse JSON
    const data = await Promise.all(
      responses.map((response) => {
        if (!response.ok) {
          throw new Error(
            `HTTP error! Status: ${response.status} for URL: ${response.url}`
          );
        }
        return response.json();
      })
    );

    // Combine all data into a single object
    return {
      products: data[0], // Response from the first API
      categories: data[1], // Response from the second API
      subcategories: data[2], // Response from the third API
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: error.message }; // Return error message if any API call fails
  }
}

export default portalapi;
