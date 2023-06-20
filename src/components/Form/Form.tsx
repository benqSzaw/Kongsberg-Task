import "./form.scss";
import { useState, useEffect } from "react";
import useData from "../../common/useData";
import { useAppSelector } from "../../redux/hooks";
import {
  selectInputValue,
  selectLimit,
  setInputValue,
} from "../../redux/appSlice";
import { useDispatch } from "react-redux";

const Form = () => {
  const [searchBy, setSearchBy] = useState<"Title" | "Author">("Title");
  const { clearData, getDataByTitle, getDataByAuthor } = useData();

  const dispatch = useDispatch();
  const inputValue = useAppSelector(selectInputValue);
  const limit = useAppSelector(selectLimit);

  const SetOppositeSearchBy = () => {
    dispatch(setInputValue(""));
    clearData();
    setSearchBy(searchBy == "Author" ? "Title" : "Author");
  };

  useEffect(() => {
    switch (searchBy) {
      case "Title":
        getDataByTitle(inputValue);
        break;
      case "Author":
        getDataByAuthor(inputValue);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, limit]);

  return (
    <div className="form-container">
      <button onClick={SetOppositeSearchBy}>Search by: {searchBy}</button>
      <input
        type="text"
        name="searchText"
        onChange={(e) => dispatch(setInputValue(e.currentTarget.value))}
        value={inputValue}
        placeholder={searchBy}
      />
    </div>
  );
};

export default Form;
