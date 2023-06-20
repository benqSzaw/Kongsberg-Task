import { apiUrl } from "../../common/Constants";
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

const Home = () => {
  return (
    <div className="home-container">
      <div className="technologies">
        <span>Used technologies:</span>
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
      <div className="author">Made by Beniamin Szawracki</div>
    </div>
  );
};

export default Home;
