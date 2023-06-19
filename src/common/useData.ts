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
import { apiUrl } from "./Constants";

const useData = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  const clearData = () => {
    dispatch(setData(null));
    dispatch(setIsLoading(false));
    dispatch(setError(null));
  };

  const getData = (
    title: string | null,
    author: string | null,
    limit: number
  ) => {
    dispatch(setError(null));
    dispatch(setIsLoading(true));
    dispatch(setData(null));

    const url =
      apiUrl +
      (title ? `title=${title}` : "") +
      (author ? `&author=${author}` : "") +
      `&limit=${limit}`;

    if (title == "" || author == "") {
      clearData();
      return;
    }
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
    getDataByTitle: (title: string, limit: number) =>
      getData(title, null, limit),
    getDataByAuthor: (author: string, limit: number) =>
      getData(null, author, limit),
  };
};

export default useData;
