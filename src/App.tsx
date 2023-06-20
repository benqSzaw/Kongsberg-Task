import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import Header from "./components/Header/Header";
import Data from "./components/Data/Data";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Data />
    </div>
  );
};

export default App;
