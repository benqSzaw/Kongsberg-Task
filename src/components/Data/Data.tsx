import "./data.scss";
import "./loader.scss";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Fragment } from "react";
import useData from "../../common/useData";
import { selectLimit, selectRow, setLimit, setRow } from "../../redux/appSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Home from "../Home/Home";
import MoreInfo from "../MoreInfo/MoreInfo";

const Data = () => {
  const dispatch = useAppDispatch();
  const limit = useAppSelector(selectLimit);
  const selectedRow = useAppSelector(selectRow);
  const { data, isLoading, error } = useData();

  const RowClickHandler = (id: number) => {
    if (selectedRow === id) dispatch(setRow(-1));
    else dispatch(setRow(id));
  };

  const LoadMore = () => {
    dispatch(setLimit(limit + 10));
  };

  const ScrollToTop = () => {
    dispatch(setRow(-1));
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <div className="data-container">
      {isLoading ? (
        <>
          <div className="book">
            <figure className="page"></figure>
            <figure className="page"></figure>
            <figure className="page"></figure>
          </div>
          <span className="loading-text">Loading</span>
        </>
      ) : error ? (
        <div className="error-message">{error.message}</div>
      ) : data ? (
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
                            {book.isbn?.[0] ?? <b>X</b>}
                          </td>
                          <td data-label="Pages" className="pages-collumn">
                            {book.number_of_pages_median ?? <b>X</b>}
                          </td>
                        </tr>
                        {selectedRow === id && <MoreInfo book={book} />}
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
              <button onClick={LoadMore}>Load more</button>
              <button className="scroll-top" onClick={ScrollToTop}>
                <AiOutlineArrowUp />
              </button>
            </>
          )}
        </>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default Data;
