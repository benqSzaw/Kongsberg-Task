import "./moreInfo.scss";
import { Doc } from "../../common/Types";

const MoreInfo = ({ book }: { book: Doc }) => {
  return (
    <tr className="moreinfo-container">
      <td colSpan={6}>
        <div>{book.cover_i}</div>
      </td>
    </tr>
  );
};

export default MoreInfo;
