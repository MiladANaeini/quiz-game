import { useEffect, useState, useRef } from "react";
import UseFetchData from "helpers/hooks/useFetchData";
import { Card, CardBody, Row, Button } from "reactstrap";
import { Colxx } from "components/common/Colxx";
import CountdownTimer from "components/timer/Timer";
import LoadingComp from "components/common/Loading";
import { TIMER_LIMIT, QOUESTION_LIMIT } from "assets/constants";
import QuestionOptions from "components/question-options/Options";
import ResultPage from "./ResultPage";

const QuizPage = () => {
  const Data = UseFetchData();
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(TIMER_LIMIT);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    if (!Data.loading) {
      handleQuestions();
    }
  }, [num]);

  const handleQuestions = () => {
    if (num === TIMER_LIMIT && count < QOUESTION_LIMIT) {
      setCount(count + 1);
    }
  };

  const createAnswerModel = (optionId = "") => {
    let answers = selectedAnswers;
    answers.push({
      questionId: Data.result[count].id,
      optionId,
    });
    setSelectedAnswers(answers);
  };

  return (
    <div>
      {!Data.loading ? (
        <Card>
          {console.log("selectedAnswers", selectedAnswers)}
          <CardBody>
            {count < QOUESTION_LIMIT ? (
              <CountdownTimer
                count={count}
                num={num}
                setNum={setNum}
                limit={TIMER_LIMIT}
              />
            ) : (
              <div>
                <ResultPage
                  data={Data.result}
                  selectedAnswers={selectedAnswers}
                />
              </div>
            )}
            <div className="d-flex justify-content-center">
              {count < QOUESTION_LIMIT && (
                <div>
                  <Row>
                    <Colxx>
                      <h4>
                        {count + 1} . {Data.result[count].question}{" "}
                      </h4>
                    </Colxx>
                  </Row>
                  <div>
                    <QuestionOptions
                      num={num}
                      createAnswerModel={createAnswerModel}
                      options={Data.result[count].options}
                    />
                  </div>
                  <Row>
                    <Button onClick={() => setNum(TIMER_LIMIT)}>next</Button>
                  </Row>
                </div>
              )}
            </div>
          </CardBody>
        </Card>
      ) : (
        <LoadingComp />
      )}
    </div>
  );
};
export default QuizPage;
