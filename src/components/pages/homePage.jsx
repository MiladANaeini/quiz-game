import { Card, Row, Button } from "reactstrap";
import { Colxx } from "components/common/Colxx";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-center">
        <Card className="home-page-card">
          <Row>
            <Colxx>
              <h3 className="question-text">Home</h3>
            </Colxx>
          </Row>
        </Card>
      </div>
      <div className="d-flex justify-content-center">
        <Row className="d-flex justify-content-center">
          <Colxx>
            <Button
              data-testid="startQuizButton"
              className="button-custom mt-2"
              onClick={() => navigate(`/quiz`)}
            >
              Start The Quiz
            </Button>
          </Colxx>
        </Row>
      </div>
    </>
  );
};
export default HomePage;
