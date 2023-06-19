import "./form.scss";
import { useState, useRef } from "react";
import useData from "../../common/useData";

const Form = () => {
  const [searchBy, setSearchBy] = useState<"Title" | "Author">("Title");
  const inputRef = useRef<HTMLInputElement>(null);
  const { clearData, getDataByTitle, getDataByAuthor } = useData();

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
        getDataByTitle(inputValue);
        break;
      case "Author":
        getDataByAuthor(inputValue);
        break;
    }
  };

  return (
    <div className="form-container">
      <button onClick={SetOppositeSearchBy}>Search by: {searchBy}</button>
      <input
        type="text"
        name="searchText"
        onChange={GetBooks}
        ref={inputRef}
        placeholder={searchBy}
      />
    </div>
  );
};

export default Form;
