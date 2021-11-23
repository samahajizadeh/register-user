import React, { useEffect, useState } from "react";
import NewTask from "./components/Tasks/NewTask";
import TasksList from "./components/Tasks/TasksList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTask();
  }, []);


  const fetchTask = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-movies-d52dd-default-rtdb.firebaseio.com/tasks.json"
      );
      if (!response.ok) {
        throw new Error("no Task");
      }
      const data = await response.json();
      const taskArray = [];
      for (const key in data) {
        taskArray.push({id:key , title:data[key]});
      }
      setTasks(taskArray);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const taskAddHandler = (task) =>{
    setTasks((prevTasks) => prevTasks.concat(task));
  }

  return (
    <div className="container-fluid bg-dark">
      <div className="row justify-content-center">
        <NewTask onAddTask={taskAddHandler} />
        <div className="w-100"></div>
        <TasksList tasks={tasks} error={error} isLoading={isLoading}  />
      </div>
    </div>
  );
};
export default App;
