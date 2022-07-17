import { useEffect, useState, useRef } from "react";
import UseFetchData from "helpers/hooks/useFetchData";
import { Card, CardBody, Row, Button } from "reactstrap";
import { Colxx } from "components/common/Colxx";
import CountdownTimer from "components/timer/Timer";
import LoadingComp from "components/common/Loading";
import { TIMER_LIMIT, QOUESTION_LIMIT, ADDED_TIME } from "assets/constants";
import QuestionOptions from "components/question-options/Options";
import ResultPage from "./ResultPage";

const QuizPage = () => {
  const Data = UseFetchData();
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(TIMER_LIMIT);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [removeOption, setRemoveOption] = useState(false);
  const [removeOptionClicked, setRemoveOptionClicked] = useState(false);
  const [addedTime, setAddedTime] = useState(0);
  const [addedTimeClicked, setAddedTimeClicked] = useState(false);
  var addedTimeTimeout = null;

  useEffect(() => {
    if (!Data.loading) {
      handleQuestions();
    }
  }, [num]);

  useEffect(() => {
    if (addedTime === ADDED_TIME) {
      addedTimeTimeout = setTimeout(() => {
        setAddedTime(0);
      }, num * 1000);
    }
    return;
  }, [addedTime]);

  const handleQuestions = () => {
    if (num === TIMER_LIMIT + addedTime && count < QOUESTION_LIMIT) {
      setCount(count + 1);
      setAddedTime(0);
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

  const handleNext = () => {
    setNum(TIMER_LIMIT);
    setAddedTime(0);
    clearTimeout(addedTimeTimeout);
  };

  const handleAddedTime = () => {
    setAddedTimeClicked(true);
    setAddedTime(ADDED_TIME);
    setNum(num + ADDED_TIME);
  };

  const handleRemoveOptions = () => {
    setRemoveOption(true);
    setRemoveOptionClicked(true);
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
                limit={TIMER_LIMIT + addedTime}
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
                      removeOption={removeOption}
                      setRemoveOption={setRemoveOption}
                      num={num}
                      createAnswerModel={createAnswerModel}
                      options={Data.result[count].options}
                    />
                  </div>
                  <Row>
                    <Button onClick={handleNext}>next</Button>
                  </Row>
                  <Row>
                    <Button
                      disabled={removeOptionClicked}
                      onClick={handleRemoveOptions}
                    >
                      Remove two Options
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      disabled={addedTimeClicked}
                      onClick={handleAddedTime}
                    >
                      Add extra 10 seconds
                    </Button>
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
