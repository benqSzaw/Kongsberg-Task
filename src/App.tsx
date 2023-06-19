import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import Form from "./components/Form/Form";
import Data from "./components/Data/Data";

const App = () => {
  return (
    <div className="main-container">
      <Form />
      <Data />
    </div>
  );
};

export default App;
