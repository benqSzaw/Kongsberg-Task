import "./form.sass";
import { useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";

const Form = () => {
  const [searchBy, setSearchBy] = useState<"Title" | "Author">("Title");
  const inputRef = useRef<HTMLInputElement>(null);

  const GetBooks = () => {
    //
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Search by
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSearchBy("Title")}>
            Title
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSearchBy("Author")}>
            Author
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <input type="text" placeholder={searchBy} ref={inputRef} />
      <button onClick={GetBooks}> Get books </button>
    </div>
  );
};

export default Form;
