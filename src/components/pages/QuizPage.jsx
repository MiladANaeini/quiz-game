import { useEffect, useState, useRef } from "react";
import UseFetchData from "helpers/hooks/useFetchData";
import { Card, CardBody, Row } from "reactstrap";
import { Colxx } from "components/common/Colxx";
import CountdownTimer from "components/timer/Timer";
import LoadingComp from "components/common/Loading";
import { TIMER_LIMIT, QOUESTION_LIMIT } from "assets/constants";
import QuestionOptions from "components/question-options/Options";

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
          <CardBody>
            {count < QOUESTION_LIMIT ? (
              <CountdownTimer
                count={count}
                num={num}
                setNum={setNum}
                limit={TIMER_LIMIT}
              />
            ) : (
              <div>Your test is complete</div>
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
