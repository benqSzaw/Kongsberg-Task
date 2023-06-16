import "./form.scss";
import { useState, useRef } from "react";
import useData from "../../common/useData";

const Form = () => {
  const [searchBy, setSearchBy] = useState<"Title" | "Author">("Title");
  const inputRef = useRef<HTMLInputElement>(null);
  const { clearData, getDataByTitle, getDataByAuthor } = useData();

  const SetOppositeSearchBy = () => {
    if (inputRef.current) inputRef.current.value = "";
    clearData()
    setSearchBy(searchBy == "Author" ? "Title" : "Author");
  };

  const GetBooks = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (searchBy) {
      case "Title":
        getDataByTitle(e.currentTarget.value);
        break;
      case "Author":
        getDataByAuthor(e.currentTarget.value);
        break;
    }
  };

  return (
    <div className="form-container">
      <button onClick={SetOppositeSearchBy}>Search by: {searchBy}</button>
      <input type="text" onChange={(e) => GetBooks(e)} ref={inputRef} placeholder={searchBy} />
    </div>
  );
};

export default Form;
