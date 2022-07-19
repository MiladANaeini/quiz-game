import { useState, useEffect } from "react";
import { CardBody } from "reactstrap";
import { TIMER_LIMIT } from "assets/constants";
import { randomize } from "helpers/functions";

const QuestionOptions = ({
  options,
  num,
  createAnswerModel,
  removeOption,
  setRemoveOption,
}) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [answerOptions, setAnswerOptions] = useState(options);

  const createSelectedOption = (id, correct) => {
    setSelectedValue(id);
    createAnswerModel(id, correct);
  };

  useEffect(() => {
    if (num === TIMER_LIMIT) {
      setSelectedValue("");
    }
  }, [num]);

  useEffect(() => {
    setAnswerOptions(options);
  }, [options]);

  useEffect(() => {
    if (removeOption) removeTwoOptions();
  }, [removeOption]);

  const removeTwoOptions = () => {
    let finalOptions = [];
    let correctOption = answerOptions.find(
      (element) => element.correct === true
    );
    let wrongOptions = answerOptions.filter(
      (element) => element.correct === false
    );
    let randomWrongOption = randomize(wrongOptions, 1);
    finalOptions.push(correctOption);
    finalOptions.push(randomWrongOption[0]);
    setAnswerOptions(finalOptions);
    setRemoveOption(false);
  };

  return (
    <div>
      <CardBody>
        {answerOptions.map((item, i) => (
          <div
            className={`cursor--pointer question-text mt-4 question-option ${
              item.id === selectedValue ? "option-selected" : ""
            }`}
            tabindex="1"
            onClick={() => createSelectedOption(item.id, item.correct)}
          >
            {i + 1 + ". " + item.answer}
          </div>
        ))}
      </CardBody>
    </div>
  );
};
export default QuestionOptions;
