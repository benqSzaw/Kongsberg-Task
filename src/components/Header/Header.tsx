import "./header.scss";
import { AiOutlineHome } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import {
  selectInputValue,
  selectLimit,
  setInputValue,
} from "../../redux/appSlice";
import useData from "../../common/useData";

const Header = () => {
  const dispatch = useDispatch();
  const inputValue = useAppSelector(selectInputValue);
  const limit = useAppSelector(selectLimit);

  const [searchBy, setSearchBy] = useState<"Title" | "Author">("Title");
  const { isLoading, clearData, getDataByTitle, getDataByAuthor } = useData();

  const ClearDataAndInput = () => {
    dispatch(setInputValue(""));
    clearData();
  };

  const SetOppositeSearchBy = () => {
    ClearDataAndInput();
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
    <div className="header-container">
      <div>
        <button
          disabled={isLoading}
          className="home"
          onClick={ClearDataAndInput}
        >
          <AiOutlineHome />
        </button>
        <button disabled={isLoading} onClick={SetOppositeSearchBy}>
          Search by: {searchBy}
        </button>
      </div>
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

export default Header;
