import { Card, CardBody, Row, Button } from "reactstrap";
import { Colxx } from "components/common/Colxx";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-center">
        <Row>
          <Colxx>
            <h3>Home Page</h3>
          </Colxx>
        </Row>
      </div>
      <div className="d-flex justify-content-center">
        <Row className="d-flex justify-content-center">
          <Colxx>
            <Button onClick={() => navigate(`/quiz`)}>Start The Quiz</Button>
          </Colxx>
        </Row>
      </div>
    </>
  );
};
export default HomePage;
