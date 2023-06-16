import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

const App = () => {
  return (
    <div className="main-container">
      <Form />
      <Table />
    </div>
  );
};

export default App;
