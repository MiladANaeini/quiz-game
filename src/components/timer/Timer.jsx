import React, { useRef, useEffect } from "react";
import { QOUESTION_LIMIT } from "assets/constants";
import { Card, CardBody, Row } from "reactstrap";
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
      <Row className="text-center">
        <Colxx xs="12" sm="4" md="3" lg="2">
          <Card className="timer-card">
            <CardBody>
              <h4 className="timer-num">Timer : {num}</h4>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </div>
  );
};
export default CountdownTimer;
