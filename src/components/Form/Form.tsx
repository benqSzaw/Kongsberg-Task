import "./form.sass";
import { useRef } from "react";

const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const GetBooks = () => {
    //
  };

  return (
    <div>
      <div>Title</div>
      <input type="text" ref={inputRef} />
      <button onClick={GetBooks}> Get books </button>
    </div>
  );
};

export default Form;
