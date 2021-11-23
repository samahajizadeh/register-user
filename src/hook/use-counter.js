import React, { useEffect, useState } from "react";
const useCounter = (forward=true) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const Interval = setInterval(() => {
        if(forward){
            setCounter(prevCounter => prevCounter + 1);
        }else{
            setCounter(prevCounter => prevCounter - 1);
        }
      
    }, 1000);
    return () => {
      clearInterval(Interval);
    };
  }, [forward]);

  return counter;
};
export default useCounter;
