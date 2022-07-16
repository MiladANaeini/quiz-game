import React, { useRef, useEffect } from "react";
import { QOUESTION_LIMIT } from "assets/constants";
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
      <div>{num}</div>
    </div>
  );
};
export default CountdownTimer;
