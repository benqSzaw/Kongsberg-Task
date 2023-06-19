import "./data.scss";
import useData from "../../common/useData";
import { useState, Fragment } from "react";
import MoreInfo from "../MoreInfo/MoreInfo";

const Data = () => {
  const { data, isLoading, error } = useData();
  //TODO IN REDUX
  const [selectedRow, setSelectedRow] = useState(-1);

  const RowClickHandler = (id: number) => {
    if (selectedRow === id) setSelectedRow(-1);
    else setSelectedRow(id);
  };

  return (
    <div className="data-container">
      {isLoading ? (
        <span className="loader"></span>
      ) : error ? (
        <div className="error-message">{error.message}</div>
      ) : (
        data !== null && (
          <>
            {<div className="header"> Founded: {data.numFound} books </div>}
            {data.numFound !== 0 && (
              <table>
                <thead>
                  <tr>
                    <th className="id-collumn">ID</th>
                    <th>Title:</th>
                    <th>Author:</th>
                    <th>ISBN:</th>
                    <th className="pages-collumn">Pages:</th>
                  </tr>
                </thead>
                <tbody>
                  {data.docs.map((book, id) => {
                    return (
                      <Fragment key={id}>
                        <tr
                          className={selectedRow === id ? "active-row" : ""}
                          onClick={() => RowClickHandler(id)}
                        >
                          <td data-label="ID" className="id-collumn">
                            {id + 1}
                          </td>
                          <td data-label="Title">{book.title}</td>
                          <td data-label="Author">
                            {book.author_name &&
                              book.author_name.map((author, id) => {
                                return <div key={id}>{author}</div>;
                              })}
                          </td>
                          <td data-label="ISBN">
                            {book.isbn ? book.isbn[0] : <b>X</b>}
                          </td>
                          <td data-label="Pages" className="pages-collumn">
                            {book.number_of_pages_median ? (
                              book.number_of_pages_median
                            ) : (
                              <b>X</b>
                            )}
                          </td>
                        </tr>
                        {selectedRow === id && <MoreInfo book={book} />}
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            )}
          </>
        )
      )}
    </div>
  );
};

export default Data;
