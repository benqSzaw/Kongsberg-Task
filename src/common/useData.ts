import { useState } from "react";
import axios, { AxiosResponse } from "axios";

const apiUrl = "https://openlibrary.org/search.json?";

const useData = () => {
  const [data, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = (title: string | null, author: string | null) => {
    setResponse(null);
    setError(null);
    setIsLoading(true);

    const url =
      apiUrl +
      (title ? `title=${title}` : "") +
      (author ? `&author=${author}` : "") +
      "&limit=10";

    axios
      .get(url)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err: string) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    data,
    error,
    isLoading,
    getDataByTitle: (title: string) => getData(title, null),
    getDataByAuthor: (author: string) => getData(null, author),
  };
};

export default useData;
