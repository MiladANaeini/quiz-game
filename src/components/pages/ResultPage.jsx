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
    <>
      <Card className="timer-card">
        <CardBody>
          <h2 className="timer-num">Your Result</h2>
          <Row>
            <Colxx>
              <h3 className="timer-num">
                Number of correct answers = {numCorrect}
              </h3>
            </Colxx>
          </Row>
          <Row>
            <Colxx>
              <h3 className="timer-num">
                Number of incorrect answers ={" "}
                {selectedAnswers.length - numCorrect}
              </h3>
            </Colxx>
          </Row>
          <Row>
            <Colxx>
              <h3 className="timer-num">
                Number questions unanswered = {10 - selectedAnswers.length}
              </h3>
            </Colxx>
          </Row>
          <Row>
            <Colxx>
              <Button
                className="button-custom mt-2"
                onClick={() => navigate(`/home`)}
              >
                Home Page
              </Button>
            </Colxx>
            <Colxx>
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
    </>
  );
};
export default ResultPage;
