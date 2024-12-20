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
