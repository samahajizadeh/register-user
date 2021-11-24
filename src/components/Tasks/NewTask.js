import React, { useRef, useState } from "react";
import Task from "./Task";
import Card from "../UI/Cards";
import useHttp from "../../hook/use-http";

const NewTask = (props) => {
  const { isLoading, error, sendRequest } = useHttp();
  const enterTaskHandler = async (task) => {
    const transfomData = (data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, title: task };
      props.onAddTask(createdTask);
    };
    sendRequest(
      {
        url: "https://react-movies-d52dd-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { title: task },
      },
      transfomData
    );
  };

  return (
    <Card>
      <Task onEnterTask={enterTaskHandler} isLoading={isLoading} />
      {error && <p>{error}</p>}
    </Card>
  );
};
export default NewTask;
