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
  const [count, setCount] = useState(0); //counts number of questions
  const [num, setNum] = useState(TIMER_LIMIT); //is the countdown timer number which is shown every second
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
    //is only called when user clicks add extra time button
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

  const createAnswerModel = (optionId = "", correct = false) => {
    let answers = selectedAnswers;
    let currentQuestionId = Data.result[count].id;
    let existingAnswer = null;
    let chosenAnswer = {
      questionId: currentQuestionId,
      optionId,
      correct,
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
          <div>
            {count < QOUESTION_LIMIT ? (
              <CountdownTimer
                count={count}
                num={num}
                setNum={setNum}
                limit={TIMER_LIMIT + addedTime}
              />
            ) : (
              <Row className="m-auto">
                <Colxx>
                  <ResultPage
                    data={Data.result}
                    selectedAnswers={selectedAnswers}
                  />
                </Colxx>
              </Row>
            )}
          </div>
          {count < QOUESTION_LIMIT && (
            <Row className="d-flex justify-content-center">
              <Colxx lg="6" md="10">
                <Card className="question-card mt-3">
                  <div>
                    <CardBody>
                      <Row>
                        <Colxx sm="12">
                          <h4 className="question-text">
                            {count + 1} . {Data.result[count].question}{" "}
                          </h4>
                        </Colxx>
                      </Row>
                      <div>
                        <Row>
                          <Colxx sm="12">
                            <QuestionOptions
                              removeOption={removeOption}
                              setRemoveOption={setRemoveOption}
                              num={num}
                              createAnswerModel={createAnswerModel}
                              options={Data.result[count].options}
                            />
                          </Colxx>
                        </Row>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Colxx>
            </Row>
          )}
          <div className="d-flex justify-content-center">
            {count < QOUESTION_LIMIT && (
              <Row className="d-flex justify-content-center">
                <Colxx xs="10" sm="10" md="12" lg="12">
                  <Button className="button-custom mt-2" onClick={handleNext}>
                    Next
                  </Button>
                </Colxx>
                <Colxx xs="10" sm="10" md="6" lg="6">
                  <Button
                    className="button-lifeLine mt-2"
                    disabled={removeOptionClicked}
                    onClick={handleRemoveOptions}
                  >
                    Remove Two Options
                  </Button>
                </Colxx>
                <Colxx xs="10" sm="10" md="6" lg="6">
                  <Button
                    className="button-lifeLine mt-2"
                    disabled={addedTimeClicked}
                    onClick={handleAddedTime}
                  >
                    Add extra 10 seconds
                  </Button>
                </Colxx>
              </Row>
            )}
          </div>
        </>
      ) : (
        <LoadingComp />
      )}
    </div>
  );
};
export default QuizPage;
