import "./moreInfo.scss";
import { Doc } from "../../common/Types";
import { getImageUrl } from "../../common/Constants";
import { Breadcrumb } from "react-bootstrap";
import useData from "../../common/useData";
import { useDispatch } from "react-redux";
import { setInputValue } from "../../redux/appSlice";

const MoreInfo = ({ book }: { book: Doc }) => {
  const dispatch = useDispatch();
  const { clearData } = useData();

  const HomeClick = () => {
    clearData()
    dispatch(setInputValue(""))
  }

  return (
    <tr className="moreinfo-container">
      <td colSpan={6}>
        <div>
          <Breadcrumb>
            <Breadcrumb.Item onClick={HomeClick}>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Library</Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
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
