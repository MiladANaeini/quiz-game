import { useEffect, useState } from "react";
import { Row } from "reactstrap";
import { Colxx } from "components/common/Colxx";

const ResultPage = ({ selectedAnswers, data }) => {
  const [numCorrect, setNumCorrect] = useState(0);

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
    <div>
      Result page
      <Row>
        <Colxx>number of correct answers = {numCorrect}</Colxx>
      </Row>
      <Row>
        <Colxx>
          number of incorrect answers = {selectedAnswers.length - numCorrect}
        </Colxx>
      </Row>
      <Row>
        <Colxx>
          number questions unanswered = {10 - selectedAnswers.length}
        </Colxx>
      </Row>
    </div>
  );
};
export default ResultPage;
