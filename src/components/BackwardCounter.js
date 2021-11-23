import React, { useEffect, useState } from "react";
import useCounter from "../hook/use-counter";
import Card from "./UI/Cards";
const BackwardCounter = () => {
 const counter = useCounter(false);
  return (
    <Card>
      <h1>Counter</h1>
      <h2 className="text-danger">{counter}</h2>
    </Card>
  );
};
export default BackwardCounter;
