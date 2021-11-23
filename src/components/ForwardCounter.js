import React, { useEffect, useState } from "react";
import Card from "./UI/Cards";
const ForwardCounter = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const Interval = setInterval(() => {
      setCounter(counter +1);
    },1000);
    return()=>{
        clearInterval(Interval)
    }
  }, [counter]);


  return (
    <Card>
      <h1>Counter</h1>
      <h2 className="text-success">{counter}</h2>
    </Card>
  );
};
export default ForwardCounter;