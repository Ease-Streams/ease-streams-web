export const payloadServer = "https://cms.easestreams.com";

export const convertToSlug = (inputString) => {
  if (!inputString) return "";
  return inputString?.replaceAll("%26", "&").replace(/\s+/g, "-").toLowerCase();
};

export const normaizeString = (str) => {
  return str
    ?.replaceAll("-%26", "-")
    ?.split("-")
    ?.map(function capitalize(part) {
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    ?.join(" ");
};

export const extractItemCode = (str) => {
  // Regular expression to match the item code after the last hyphen
  const regex = /-([^-]+)$/;
  const match = str.match(regex);
  if (match) {
    return match[1];
  }
  return null; // Return null if no match is found
};

export const normalizeSearchTerm = (searchTerm) => {
  return searchTerm
    .toLowerCase()
    .replace(/[^\w\s&]/g, " ") // Replace non-word, non-space, and non-ampersand characters
    .replace(/\s+/g, " ") // Replace multiple spaces with a single hyphen
    .replace(/&/g, " ") // Replace ampersands with hyphens
    .replace(/-{2,}/g, " ")
    .trim(); // Replace two or more consecutive hyphens with a single hyphen
};

export const normalizeSearchTermwithHyphen = (searchTerm) => {
  return searchTerm
    .toLowerCase()
    .replace(/[^\w\s&]/g, "-") // Replace non-word, non-space, and non-ampersand characters
    .replace(/\s+/g, "-") // Replace multiple spaces with a single hyphen
    .replace(/&/g, "-") // Replace ampersands with hyphens
    .replace(/-{2,}/g, "-")
    .trim(); // Replace two or more consecutive hyphens with a single hyphen
};
export const defaultSeoData = {
  metaTitle:
    "EaseStreams | Connect with Trusted Wholesale Dealers in UAE & Get Accurate Information",
  metaDescription:
    "Find and connect with reliable wholesale dealers effortlessly on EaseStreams. Get accurate product details, competitive prices, and seamless business connections all in one place",
  metaKeywords:
    "B2B marketplace, B2B ecommerce, Wholesale marketplace, Bulk purchasing, Corporate procurement, Industrial suppliers, Construction materials B2B, Middle East B2B trade, B2B lead generation",
  canonical: "https://easestreams.com/",
  metaImage: "/images/ease-logo-short.webp",
};
