import "assets/css/main.css";
import Layout from "components/layout";
import { BrowserRouter } from "react-router-dom";
import { Card, CardBody, Row, Button } from "reactstrap";
import { Colxx } from "components/common/Colxx";
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
