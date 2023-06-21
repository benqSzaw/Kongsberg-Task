import axios from "axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  setError,
  setData,
  setIsLoading,
  selectIsLoading,
  selectData,
  selectError,
  setRow,
  selectLimit,
} from "../redux/appSlice";
import { apiSearchUrl } from "./Constants";

const useData = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const limit = useAppSelector(selectLimit);

  const clearData = () => {
    dispatch(setData(null));
    dispatch(setIsLoading(false));
    dispatch(setError(null));
    dispatch(setRow(-1));
  };

  const getData = (title: string | null, author: string | null) => {
    dispatch(setError(null));
    dispatch(setIsLoading(true));
    dispatch(setData(null));
    dispatch(setRow(-1));

    const url =
      apiSearchUrl +
      (title ? `title=${title}` : "") +
      (author ? `&author=${author}` : "") +
      `&limit=${limit}`;

    if (title == "" || author == "") {
      clearData();
      return;
    }

    axios
      .get(url)
      .then((res) => dispatch(setData(res.data)))
      .catch((err) => dispatch(setError(err)))
      .finally(() => dispatch(setIsLoading(false)));
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
