import "./form.scss";
import { useState, useRef, useEffect } from "react";
import useData from "../../common/useData";
import { useAppSelector } from "../../redux/hooks";
import { selectInputValue, setInputValue } from "../../redux/appSlice";
import { useDispatch } from "react-redux";

const Form = () => {
  const [searchBy, setSearchBy] = useState<"Title" | "Author">("Title");
  const [limit, setLimit] = useState(10);
  const inputRef = useRef<HTMLInputElement>(null);
  const { data, clearData, getDataByTitle, getDataByAuthor } = useData();

  const inputValue = useAppSelector(selectInputValue);
  const dispatch = useDispatch();

  const SetOppositeSearchBy = () => {
    if (inputRef.current) inputRef.current.value = "";
    clearData();
    setSearchBy(searchBy == "Author" ? "Title" : "Author");
  };

  const GetBooks = () => {
    if (!inputRef.current) return;

    const inputValue = inputRef.current.value;
    switch (searchBy) {
      case "Title":
        getDataByTitle(inputValue, limit);
        break;
      case "Author":
        getDataByAuthor(inputValue, limit);
        break;
    }
  };

  const LoadMore = () => {
    setLimit((prev) => prev + 10);
  };
  useEffect(() => {
    GetBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  return (
    <div className="form-container">
      <button onClick={SetOppositeSearchBy}>Search by: {searchBy}</button>
      <input
        type="text"
        name="searchText"
        onChange={GetBooks}
        ref={inputRef}
        onInput={e => dispatch(setInputValue(e.currentTarget.value))}
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
