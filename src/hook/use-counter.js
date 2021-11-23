import React, { useEffect, useState } from "react";
const useCounter = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const Interval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    return () => {
      clearInterval(Interval);
    };
  }, []);

  return counter;
};
export default useCounter;
