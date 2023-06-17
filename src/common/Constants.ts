export const apiUrl = "https://openlibrary.org/search.json?";
const apiImageUrl = "https://covers.openlibrary.org/b/id/*.jpg";

export const getImageUrl = (id: string, size: "S" | "M"): string => {
  const url = apiImageUrl.replace("*", `${id}-${size}`);
  return url;
};
