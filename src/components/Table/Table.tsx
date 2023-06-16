import "./table.scss";
import useData from "../../common/useData";

const Table = () => {
  const { data, isLoading, error } = useData();

  console.log(data, error);

  return (
    <div className="table-container">
      {isLoading ? (
        <div>loading</div>
      ) : (
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
      )}
    </div>
  );
};

export default Table;
