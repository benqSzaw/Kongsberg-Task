import "./form.scss";
import { useRef, useState } from "react";

const Form = () => {
  const [searchBy, setSearchBy] = useState<"Title" | "Author">("Title");
  const inputRef = useRef<HTMLInputElement>(null);

  const SetOppositeSearchBy = () => {
    setSearchBy(searchBy == "Author" ? "Title" : "Author");
  };

  const GetBooks = () => {
    //
  };

  return (
    <div className="form-container">
      <button onClick={SetOppositeSearchBy}>Search by: {searchBy}</button>
      <input
        type="text"
        onChange={GetBooks}
        placeholder={searchBy}
        ref={inputRef}
      />
    </div>
  );
};

export default Form;
