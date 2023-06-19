import "./table.scss";
import useData from "../../common/useData";
import { getImageUrl } from "../../common/Constants";

const Table = () => {
  const { data, isLoading, error } = useData();

  return (
    <div className="table-container">
      {isLoading ? (
        <div>loading</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        data !== null && (
          <>
            {data.numFound !== 0 && <div> Founded: {data.numFound} books </div>}

            <table>
              <thead>
                <tr>
                  <th />
                  <th>ID</th>
                  <th>Title:</th>
                  <th>Author:</th>
                  <th>ISBN:</th>
                  <th>Median nr of pages:</th>
                </tr>
              </thead>
              {data.docs.map((book, id) => {
                //MANY AUTHORS
                //MANY ISBN
                //TODO REST
                return (
                  <tbody key={id}>
                    <tr>
                      <td>
                        {book.cover_i && (
                          <img
                            src={getImageUrl(book.cover_i.toString(), "S")}
                          />
                        )}
                      </td>
                      <td>{id + 1}</td>
                      <td>{book.title}</td>
                      <td>
                        {book.author_name &&
                          book.author_name.map((author, id) => {
                            return <div key={id}>{author}</div>;
                          })}
                      </td>
                      <td>{book.isbn?.[0]}</td>
                      <td>{book.number_of_pages_median}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </>
        )
      )}
    </div>
  );
};

export default Table;
