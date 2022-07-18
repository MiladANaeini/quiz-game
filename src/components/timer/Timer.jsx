import React, { useRef, useEffect } from "react";
import { QOUESTION_LIMIT } from "assets/constants";
import { Card, CardBody, Row, Button } from "reactstrap";
import { Colxx } from "components/common/Colxx";
const CountdownTimer = ({ limit, num, setNum, count }) => {
  let intervalRef = useRef();

  const decreaseNum = () => setNum((prev) => (prev <= 0 ? limit : prev - 1));

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (count === QOUESTION_LIMIT) {
      setNum(0);
      return () => clearInterval(intervalRef.current);
    }
  }, [count]);

  return (
    <div>
      <Card className="timer-card">
        <CardBody>
          <h3 className="timer-num">Timer : {num}</h3>
        </CardBody>
      </Card>
    </div>
  );
};
export default CountdownTimer;
