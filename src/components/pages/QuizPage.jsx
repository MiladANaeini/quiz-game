import { useEffect, useState } from "react";
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
    let currentQuestionId = Data.result[count].id;
    let existingAnswer = null;
    let chosenAnswer = {
      questionId: currentQuestionId,
      optionId,
    };
    if (selectedAnswers.length > 0) {
      existingAnswer = answers.find(
        (element) => element.questionId === currentQuestionId
      );
    }
    if (!existingAnswer) {
      answers.push(chosenAnswer);
    } else {
      let index = answers.indexOf(existingAnswer);
      answers.splice(index, 1, chosenAnswer);
    }
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
        <>
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
            <Row>
              <Colxx lg="12" md="12">
                <Card className="question-card">
                  <CardBody>
                    {count < QOUESTION_LIMIT && (
                      <div>
                        <Row>
                          <Colxx>
                            <h4 className="question-text">
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
                      </div>
                    )}
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
          </div>
          <div className="d-flex justify-content-center">
            <Row>
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
                <Button disabled={addedTimeClicked} onClick={handleAddedTime}>
                  Add extra 10 seconds
                </Button>
              </Row>
            </Row>
          </div>
        </>
      ) : (
        <LoadingComp />
      )}
    </div>
  );
};
export default QuizPage;
