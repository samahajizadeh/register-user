import React, { useRef, useState } from "react";
import Task from "./Task";
import Card from "../UI/Cards";

const NewTask = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const enterTaskHandler = async (task) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-movies-d52dd-default-rtdb.firebaseio.com/tasks.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        }
      );
      if (!response.ok) {
        throw new Error("no Task");
      }
      const data = await response.json();
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, title: task };
      props.onAddTask(createdTask);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };
  return (
    <Card>
      <Task onEnterTask={enterTaskHandler} isLoading={isLoading} />
      {error && <p>{error}</p>}
    </Card>
  );
};
export default NewTask;
