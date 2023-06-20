export const apiUrl = "https://openlibrary.org/search.json?";
const apiImageUrl = "https://covers.openlibrary.org/b/id/*.jpg";
const apiAuthorUrl = "https://openlibrary.org/authors/*/works.json?limit=3";

export const getImageUrl = (id: string, size: "S" | "M"): string => {
  return apiImageUrl.replace("*", `${id}-${size}`);
};
export const getAuthorUrl = (id: string): string => {
  return apiAuthorUrl.replace("*", id);
};
