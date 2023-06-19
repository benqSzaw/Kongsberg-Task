import "./moreInfo.scss";
import { Doc } from "../../common/Types";
import { getImageUrl } from "../../common/Constants";

const MoreInfo = ({ book }: { book: Doc }) => {
  return (
    <tr className="moreinfo-container">
      <td colSpan={6}>
        <div>
          {book.cover_i ? (
            <img
              src={getImageUrl(book.cover_i.toString(), "M")}
              loading="lazy"
            />
          ) : (
            <b>X</b>
          )}
        </div>
      </td>
    </tr>
  );
};

export default MoreInfo;
