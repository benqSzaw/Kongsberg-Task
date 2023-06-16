import axios from "axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  setError,
  setData,
  setIsLoading,
  selectIsLoading,
  selectData,
  selectError,
} from "../redux/appSlice";

const apiUrl = "https://openlibrary.org/search.json?";

const useData = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  const clearData = () => {
    dispatch(setData({}));
  };

  const getData = (title: string | null, author: string | null) => {
    dispatch(setError(null));
    dispatch(setIsLoading(true));
    dispatch(setData({}));

    const url =
      apiUrl +
      (title ? `title=${title}` : "") +
      (author ? `&author=${author}` : "") +
      "&limit=10";

    axios
      .get(url)
      .then((res) => {
        dispatch(setData(res.data));
      })
      .catch((err) => {
        dispatch(setError(err));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

  return {
    data,
    isLoading,
    error,
    clearData,
    getDataByTitle: (title: string) => getData(title, null),
    getDataByAuthor: (author: string) => getData(null, author),
  };
};

export default useData;
