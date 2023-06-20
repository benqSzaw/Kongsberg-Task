import "./moreInfo.scss";
import { Doc } from "../../common/Types";
import { getImageUrl } from "../../common/Constants";
import { Breadcrumb } from "react-bootstrap";
import useData from "../../common/useData";
import { useDispatch } from "react-redux";
import { setInputValue, setRow } from "../../redux/appSlice";

const MoreInfo = ({ book }: { book: Doc }) => {
  const dispatch = useDispatch();
  const { clearData } = useData();

  const HomeClick = () => {
    clearData();
    dispatch(setInputValue(""));
  };

  const LibaryClick = () => {
    dispatch(setRow(-1));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <tr className="moreinfo-container">
      <td colSpan={6}>
        <div>
          <Breadcrumb>
            <Breadcrumb.Item onClick={HomeClick}>Home</Breadcrumb.Item>
            <Breadcrumb.Item onClick={LibaryClick}>Library</Breadcrumb.Item>
            <Breadcrumb.Item active>{book.title}</Breadcrumb.Item>
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
