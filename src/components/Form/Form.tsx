import "./form.scss";
import { useState, useEffect } from "react";
import useData from "../../common/useData";
import { useAppSelector } from "../../redux/hooks";
import { selectInputValue, setInputValue } from "../../redux/appSlice";
import { useDispatch } from "react-redux";

const Form = () => {
  const [searchBy, setSearchBy] = useState<"Title" | "Author">("Title");
  const [limit, setLimit] = useState(10);
  const { data, clearData, getDataByTitle, getDataByAuthor } = useData();

  const dispatch = useDispatch();
  const inputValue = useAppSelector(selectInputValue);

  const SetOppositeSearchBy = () => {
    dispatch(setInputValue(""));
    clearData();
    setSearchBy(searchBy == "Author" ? "Title" : "Author");
  };

  const LoadMore = () => {
    setLimit((prev) => prev + 10);
  };

  useEffect(() => {
    if (inputValue == "") return;
    switch (searchBy) {
      case "Title":
        getDataByTitle(inputValue, limit);
        break;
      case "Author":
        getDataByAuthor(inputValue, limit);
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
      {data && data.numFound > 0 && (
        <button onClick={LoadMore}>Load more</button>
      )}
    </div>
  );
};

export default Form;
