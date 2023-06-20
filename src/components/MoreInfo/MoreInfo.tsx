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

  const Truncate = (str: string, n: number) => {
    return str.length > n ? str.slice(0, n - 1) + "…" : str;
  };

  console.log(book)
  return (
    <tr className="moreinfo-container">
      <td colSpan={6}>
        <div className="main-div-container">
          <Breadcrumb>
            <Breadcrumb.Item onClick={HomeClick}>Home</Breadcrumb.Item>
            <Breadcrumb.Item onClick={LibaryClick}>Library</Breadcrumb.Item>
            <Breadcrumb.Item active>{Truncate(book.title, 30)}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="bottom-div">
            {book.cover_i ? (
              <img
                src={getImageUrl(book.cover_i.toString(), "M")}
                loading="lazy"
              />
            ) : (
              <div className="img-placeholder">No image</div>
            )}
            <div>
              First publish year: {book.first_publish_year ?? "Not found"}
            </div>
            <div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default MoreInfo;
