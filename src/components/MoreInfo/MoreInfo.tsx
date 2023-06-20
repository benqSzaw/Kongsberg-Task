import "./moreInfo.scss";
import { Breadcrumb, Placeholder } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setInputValue, setRow } from "../../redux/appSlice";
import { AuthorData, Doc } from "../../common/Types";
import { getAuthorUrl, getBookUrl, getImageUrl } from "../../common/Constants";
import useData from "../../common/useData";
import axios from "axios";

const MoreInfo = ({ book }: { book: Doc }) => {
  const dispatch = useDispatch();
  const { clearData } = useData();
  const [isLoading, setIsLoading] = useState(true);
  const [authorData, setAuthorData] = useState<Array<AuthorData> | null>(null);

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

  useEffect(() => {
    axios
      .get(getAuthorUrl(book.author_key[0]))
      .then((res) => setAuthorData(res.data.entries))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <tr className="moreinfo-container">
      <td colSpan={6}>
        <div className="main-div-container">
          <Breadcrumb>
            <Breadcrumb.Item onClick={HomeClick}>Home</Breadcrumb.Item>
            <Breadcrumb.Item onClick={LibaryClick}>Library</Breadcrumb.Item>
            <Breadcrumb.Item active>
              <a href={getBookUrl(book.key)} target="_blank">
                {Truncate(book.title, 30)}{" "}
              </a>
            </Breadcrumb.Item>
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
              <b> First publish year:</b> <br />
              {book.first_publish_year ?? "Not found"}
            </div>
            <div>
              <b>Other works:</b>
              {isLoading ? (
                <Placeholder className="placeholders" as="div" animation="wave">
                  <Placeholder xs={12} />
                  <Placeholder xs={12} />
                  <Placeholder xs={12} />
                </Placeholder>
              ) : (
                authorData?.map((book, id) => {
                  return (
                    <div key={id}>
                      <a
                        href={`https://openlibrary.org/${book.key}`}
                        target="_blank"
                      >
                        {Truncate(book.title, 40)}
                      </a>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default MoreInfo;
