import "./table.scss";
import useData from "../../common/useData";
import { getImageUrl } from "../../common/Constants";

const Table = () => {
  const { data, isLoading, error } = useData();

  console.log(data, error);

  return (
    <div className="table-container">
      {isLoading ? (
        <div>loading</div>
      ) : (
        <>
          {data !== null && (
            <>
              {data.numFound !== 0 && (
                <div> Founded: {data.numFound} books </div>
              )}
              <br />
              {data.docs.map((book) => {
                return (
                  <>
                    {/* MANY AUTHORS */}
                    <div>
                      Author:
                      {book.author_name.map((author) => {
                        return <div>{author}</div>;
                      })}
                    </div>
                    <div>Title: {book.title}</div>
                    {/* MANY ISBN */}
                    <div>
                      ISBN:
                      {book.isbn?.[0]}
                    </div>
                    <div>
                      Median numbers of pages: {book.number_of_pages_median}
                    </div>
                    {book.cover_i && (
                      <img src={getImageUrl(book.cover_i.toString(), "S")} />
                    )}
                    {/* TODO REST */}
                    <br />
                  </>
                );
              })}
            </>
          )}

          <table>
            <thead>
              <tr>
                <th>a</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>b</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Table;
