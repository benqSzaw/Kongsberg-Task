import "./form.scss";
import { useState } from "react";
import useData from "../../common/useData";

const Form = () => {
  const [searchBy, setSearchBy] = useState<"Title" | "Author">("Title");
  const { getDataByTitle, getDataByAuthor } = useData();

  const SetOppositeSearchBy = () => {
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
      <input type="text" onChange={(e) => GetBooks(e)} placeholder={searchBy} />
    </div>
  );
};

export default Form;
