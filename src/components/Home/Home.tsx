import "./home.scss";
import {
  SiRedux,
  SiReact,
  SiTypescript,
  SiBootstrap,
  SiAxios,
  SiSass,
  SiPrettier,
  SiEslint,
} from "react-icons/si";
import { apiUrl } from "../../common/Constants";

const Home = () => {
  return (
    <div className="home-container">
      <div className="technologies">
        <span>Technologies used:</span>
        <div className="logos">
          <SiReact />
          <SiTypescript />
          <SiRedux />
          <SiBootstrap />
          <SiAxios />
          <SiSass />
          <SiPrettier />
          <SiEslint />
        </div>
      </div>
      <div className="api">
        <a href={apiUrl} target="_blank">
          Api from: {apiUrl}
        </a>
      </div>
      <div className="author">
        <div>Made by</div> <div> Beniamin Szawracki</div>
      </div>
    </div>
  );
};

export default Home;
