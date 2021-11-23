import React from "react";
import Card from "../UI/Cards";

const TasksList = (props) => {
  let taskTitle = <h1>No tasks found.Start addin some!</h1>;
  if (props.isLoading) {
    taskTitle = (
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  if (props.tasks.length > 0) {
    taskTitle = props.tasks.map((data) => (
      <div key={data.id} className="alert alert-info my-2" role="alert">
        {data.title}
      </div>
    ));
  }
  return <Card>{taskTitle}</Card>;
};
export default TasksList;
