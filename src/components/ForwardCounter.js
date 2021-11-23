import React, { useEffect, useState } from "react";
import useCounter from "../hook/use-counter";
import Card from "./UI/Cards";
const ForwardCounter = () => {
    const counter = useCounter();


  return (
    <Card>
      <h1>Counter</h1>
      <h2 className="text-success">{counter}</h2>
    </Card>
  );
};
export default ForwardCounter;
