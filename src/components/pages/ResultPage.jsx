import { useEffect, useState } from "react";
import { Row, Card, CardBody, Button } from "reactstrap";
import { Colxx } from "components/common/Colxx";
import { TIMER_LIMIT } from "helpers/constants";
import { average } from "helpers/functions";
const ResultPage = ({ selectedAnswers }) => {
  const [numCorrect, setNumCorrect] = useState(0);
  const [quickestAnswer, setQuickestAnswer] = useState(0);
  const [longestAnswer, setLongestAnswer] = useState(TIMER_LIMIT);
  const [averageTimeSpent, setAverageTimeSpent] = useState(TIMER_LIMIT);

  const findCorrectAnswers = (selectedAnswers) => {
    let totalCorrectAnswers = 0;
    let timeSpent = [];
    selectedAnswers.map((item) => {
      timeSpent.push(item.timeSpent);
      if (item.correct) {
        totalCorrectAnswers++;
      }
    });
    if (timeSpent.length > 0) {
      let min = Math.min(...timeSpent);
      let max = Math.max(...timeSpent);
      let avg = average(timeSpent);
      setQuickestAnswer(min);
      setLongestAnswer(max);
      setAverageTimeSpent(avg);
    }
    setNumCorrect(totalCorrectAnswers);
  };
  useEffect(() => {
    findCorrectAnswers(selectedAnswers);
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <Card className="result-card">
        <CardBody>
          <h4 className="mb-2">Your Result</h4>
          <Row>
            <Colxx>
              <h4 className="result-text">
                Number of correct answers : {numCorrect}
              </h4>
            </Colxx>
          </Row>
          <Row>
            <Colxx>
              <h4 className="result-text">
                Number of incorrect answers :{" "}
                {selectedAnswers.length - numCorrect}
              </h4>
            </Colxx>
          </Row>
          <Row>
            <Colxx>
              <h4 className="result-text">
                Number questions unanswered : {10 - selectedAnswers.length}
              </h4>
            </Colxx>
          </Row>
          {selectedAnswers.length > 0 && (
            <>
              <div className="mt-4 mb-2">
                <h4>Statistics About Answered Questions</h4>
              </div>
              {
                <Row>
                  <Colxx>
                    <h4 className="result-text">
                      {quickestAnswer < 1 ? (
                        <>Quickest answering time : Less than 1 second</>
                      ) : (
                        <>
                          Quickest answering time : {quickestAnswer} second(s){" "}
                        </>
                      )}
                    </h4>
                  </Colxx>
                </Row>
              }
              <Row>
                <Colxx>
                  <h4 className="result-text">
                    {longestAnswer < 1 ? (
                      <>Longest answering time : Less than 1 second</>
                    ) : (
                      <>Longest answering time : {longestAnswer} second(s)</>
                    )}
                  </h4>
                </Colxx>
              </Row>
              <Row>
                <Colxx>
                  <h4 className="result-text">
                    {averageTimeSpent < 1 ? (
                      <>Average answering time : Less than 1 second</>
                    ) : (
                      <>Average answering time : {averageTimeSpent} second(s)</>
                    )}
                  </h4>
                </Colxx>
              </Row>
            </>
          )}
          <Row className="d-flex justify-content-center mt-3">
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
