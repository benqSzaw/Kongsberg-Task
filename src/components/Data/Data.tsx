import "./data.scss";
import useData from "../../common/useData";
import { getImageUrl } from "../../common/Constants";

const Data = () => {
  const { data, isLoading, error } = useData();

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
                    <th className="cover-collumn">Image </th>
                    <th className="id-collumn">ID</th>
                    <th>Title:</th>
                    <th>Author:</th>
                    <th>ISBN:</th>
                    <th className="pages-collumn">Pages:</th>
                  </tr>
                </thead>
                <tbody>
                  {data.docs.map((book, id) => {
                    //MANY AUTHORS
                    //MANY ISBN
                    //TODO REST

                    return (
                      <tr key={id}>
                        <td className="cover-collumn">
                          {book.cover_i ? (
                            <img
                              src={getImageUrl(book.cover_i.toString(), "S")}
                              loading="lazy"
                            />
                          ) : <b>X</b>}
                        </td>
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
                          {book.number_of_pages_median
                            ? book.number_of_pages_median
                            : <b>X</b>}
                        </td>
                      </tr>
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
