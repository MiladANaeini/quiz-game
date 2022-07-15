import { useEffect, useState } from "react";
import UseFetchData from "helpers/hooks/useFetchData";
import { Card, CardBody, Row } from "reactstrap";
import { Colxx } from "common/Colxx";
import LoadingComp from "common/Loading";

const QuizPage = () => {
  const Data = UseFetchData();
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <>
      {!Data.loading ? (
        <Card>
          <CardBody>
            <h4>Question {count + 1}</h4>
          </CardBody>
        </Card>
      ) : (
        <LoadingComp />
      )}
    </>
  );
};
export default QuizPage;
