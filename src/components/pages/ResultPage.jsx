import { useEffect, useState } from "react";
import { Row, Card, CardBody, Button } from "reactstrap";
import { Colxx } from "components/common/Colxx";
import { useNavigate } from "react-router-dom";

const ResultPage = ({ selectedAnswers, data }) => {
  const [numCorrect, setNumCorrect] = useState(0);
  let navigate = useNavigate();

  const findCorrectAnswers = (selectedAnswers) => {
    let totalCorrectAnswers = 0;
    selectedAnswers.map((item, index) => {
      if (item.optionId === 44) {
        totalCorrectAnswers++;
      }
    });
    setNumCorrect(totalCorrectAnswers);
  };
  useEffect(() => {
    findCorrectAnswers(selectedAnswers);
  }, []);

  return (
    <div className="d-flex justify-content-center align-middle">
      <Card className="result-card">
        <CardBody>
          <h2 className="result-text">Your Result</h2>
          <Row>
            <Colxx>
              <h3 className="result-text">
                Number of correct answers = {numCorrect}
              </h3>
            </Colxx>
          </Row>
          <Row>
            <Colxx>
              <h3 className="result-text">
                Number of incorrect answers ={" "}
                {selectedAnswers.length - numCorrect}
              </h3>
            </Colxx>
          </Row>
          <Row>
            <Colxx>
              <h3 className="result-text">
                Number questions unanswered = {10 - selectedAnswers.length}
              </h3>
            </Colxx>
          </Row>
          <Row>
            <Colxx md="12" lg="5">
              <Button
                className="button-custom mt-2"
                onClick={() => navigate(`/home`)}
              >
                Home Page
              </Button>
            </Colxx>
            <Colxx md="12" lg="5">
              <Button
                className="button-custom mt-2"
                onClick={() => window.location.reload(false)}
              >
                Try Again
              </Button>
            </Colxx>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};
export default ResultPage;
