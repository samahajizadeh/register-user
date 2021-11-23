import React, { useRef } from "react";
import Button from "../UI/Button";
const Task = (props) => {
  const taskInputRef = useRef();

  const addTaskHandler = () => {
    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
    taskInputRef.current.value = ''
  };
  return (
      <div className="row g-3 my-2">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Task"
            aria-label="Task"
            ref={taskInputRef}
          />
        </div>
        <div className="col-auto ">
          <Button className="btn-primary rounded-pill" onClick={addTaskHandler}>
            {!props.isLoading ? '  Add Task  ' : '...isloading'}
          </Button>
        </div>
      </div>
  );
};
export default Task;
