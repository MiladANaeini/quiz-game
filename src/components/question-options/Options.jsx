import { useState, useEffect } from "react";
import { Card, CardBody, Row } from "reactstrap";
import { Colxx } from "components/common/Colxx";
import { TIMER_LIMIT } from "assets/constants";

const QuestionOptions = ({ options, num, createAnswerModel }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const createSelectedOption = (id) => {
    setSelectedValue(id);
    createAnswerModel(id);
  };
  useEffect(() => {
    if (num === TIMER_LIMIT) {
      setSelectedValue("");
    }
  }, [num]);
  return (
    <div>
      <CardBody>
        {options.map((item, i) => (
          <div
            className={`cursor--pointer mt-4 question-option ${
              item.id === selectedValue ? "option-selected" : ""
            }`}
            tabindex="1"
            onClick={() => createSelectedOption(item.id)}
          >
            {i + 1 + ". " + item.answer}
          </div>
        ))}
      </CardBody>
    </div>
  );
};
export default QuestionOptions;
