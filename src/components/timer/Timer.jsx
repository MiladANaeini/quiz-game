import React, { useRef, useEffect, useState } from "react";

const CountdownTimer = () => {
  const [num, setNum] = useState(15);

  let intervalRef = useRef();

  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <div>{num}</div>
    </div>
  );
};
export default CountdownTimer;
