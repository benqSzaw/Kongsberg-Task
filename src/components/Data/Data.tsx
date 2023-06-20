import "./data.scss";
import useData from "../../common/useData";
import { Fragment } from "react";
import MoreInfo from "../MoreInfo/MoreInfo";
import { selectLimit, selectRow, setLimit, setRow } from "../../redux/appSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Data = () => {
  const { data, isLoading, error } = useData();
  //TODO IN REDUX
  const dispatch = useAppDispatch();
  const limit = useAppSelector(selectLimit);
  const selectedRow = useAppSelector(selectRow);

  const RowClickHandler = (id: number) => {
    if (selectedRow === id) dispatch(setRow(-1));
    else dispatch(setRow(id));
  };

  const LoadMore = () => {
    dispatch(setLimit(limit + 10));
  };

  return (
    <div className="data-container">
      {isLoading ? (
        <span className="loader"></span>
      ) : error ? (
        <div className="error-message">{error.message}</div>
      ) : (
        data && (
          <>
            {<div className="header"> Founded: {data.numFound} books </div>}
            {data.numFound > 0 && (
              <>
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
                <button onClick={LoadMore}>Load more</button>
              </>
            )}
          </>
        )
      )}
    </div>
  );
};

export default Data;
