import { useEffect, useState, useRef } from "react";
import UseFetchData from "helpers/hooks/useFetchData";
import { Card, CardBody, Row } from "reactstrap";
import { Colxx } from "components/common/Colxx";
import CountdownTimer from "components/timer/Timer";
import LoadingComp from "components/common/Loading";
import { TIMER_LIMIT, QOUESTION_LIMIT } from "assets/constants";
const QuizPage = () => {
  const Data = UseFetchData();
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(-1);
  const [num, setNum] = useState(TIMER_LIMIT);

  useEffect(() => {
    if (num === TIMER_LIMIT) {
      setCount(count + 1);
    }
  }, [num]);

  return (
    <>
      {!Data.loading ? (
        <Card>
          <CardBody>
            <CountdownTimer
              count={count}
              num={num}
              setNum={setNum}
              limit={TIMER_LIMIT}
            />
            {count < QOUESTION_LIMIT && (
              <div>
                <h4>Question {count + 1}</h4>
                {Data.result[count].question}
              </div>
            )}
          </CardBody>
        </Card>
      ) : (
        <LoadingComp />
      )}
    </>
  );
};
export default QuizPage;
