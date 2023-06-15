import "./form.scss";
import { useRef, useState } from "react";

const Form = () => {
  const [searchBy, setSearchBy] = useState<"Title" | "Author">("Title");
  const inputRef = useRef<HTMLInputElement>(null);

  const SetOppositeSearchBy = () => {
    searchBy == "Author" ? setSearchBy("Title") : setSearchBy("Author")
  }

  const GetBooks = () => {
    //
  };

  return (
    <div className="form-container">
      <button onClick={SetOppositeSearchBy}>Search by: {searchBy}</button>
      <input type="text" onChange={GetBooks} placeholder={searchBy} ref={inputRef} />
    </div>
  );
};

export default Form;
