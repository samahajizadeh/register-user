import React, { useEffect, useState } from "react";
import NewTask from "./components/Tasks/NewTask";
import TasksList from "./components/Tasks/TasksList";
import useHttp from "./hook/use-http";

const App = () => {
  const [tasks, setTasks] = useState([]);

 

  const {isLoading,error,sendRequest:fetchTask} = useHttp()

  useEffect(() => {
    const transformData = data =>{
      const taskArray = [];
        for (const key in data) {
          taskArray.push({id:key , title:data[key].title});
        }
        setTasks(taskArray);
    }

    fetchTask({ url:"https://react-movies-d52dd-default-rtdb.firebaseio.com/tasks.json"},transformData);
  }, []);

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
