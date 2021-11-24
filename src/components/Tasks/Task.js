import React, { useState } from "react";
import Button from "../UI/Button";
const Task = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  // const [enteredTaskIsValid, setEnteredTaskIsValid] = useState(false);
  const [enteredTaskIsTouched, setEnteredTaskIsTouched] = useState(false);

  const enteredTaskIsValid = enteredTask.trim() !== '';
  const TaskIsValid = !enteredTaskIsValid && enteredTaskIsTouched;


  const addTaskHandler = () => {
    setEnteredTaskIsTouched(true);
    // setEnteredTaskIsValid(false);
    // if (enteredTask.trim().length === 0) {
    //   setEnteredTaskIsValid(false);
    //   return
    // }
    if(!enteredTaskIsValid){
      return
    }
    // setEnteredTaskIsValid(true);

    props.onEnterTask(enteredTask);
    setEnteredTask("");
    setEnteredTaskIsTouched(false);

  };

  const changeHandler = (event) => {
    setEnteredTask(event.target.value);
    // if (enteredTask.trim().length !== 0) {
    //   setEnteredTaskIsValid(true);
    //   return;
    // }
  };

  const blurHandler = ()=>{
    setEnteredTaskIsTouched(true);
    // if (enteredTask.trim().length === 0) {
    //   setEnteredTaskIsValid(false);
    //   return;
    // }
  }

  // const TaskIsValid = !enteredTaskIsValid && enteredTaskIsTouched;
  return (
    <div className="row g-3 my-2">
      <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder="Task"
          aria-label="Task"
          onChange={changeHandler}
          onBlur={blurHandler}
          value={enteredTask}
          // ref={taskInputRef}
        />
        {TaskIsValid && <div className="text-danger text-start">Please enterd task</div>}
      </div>
      <div className="col-auto ">
        <Button className="btn-primary rounded-pill" onClick={addTaskHandler}>
          {!props.isLoading ? "  Add Task  " : "...isloading"}
        </Button>
      </div>
    </div>
  );
};
export default Task;
