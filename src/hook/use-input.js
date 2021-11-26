import { useReducer, useState } from "react";
const defaultValue = { value: "", IsTouched: false };
const reduserInput = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      IsTouched: state.IsTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      IsTouched: true,
      value: state.value,
    };
  }
  if (action.type === "RESET") {
    return defaultValue;
  }
  return defaultValue;
};
const useInput = (validData) => {
  // const [enteredValue,setEnteredValue] = useState('');
  // const [IsTouched,setIsTouch] = useState(false);
  const [inpustState, dispatch] = useReducer(reduserInput, defaultValue);
  const vlaueIsValid = validData(inpustState.value);
  const hasError = !vlaueIsValid && inpustState.IsTouched;
  const changeHandler = (event) => {
    // setEnteredValue();
    dispatch({ type: "INPUT", value: event.target.value });
  };
  const blurHandler = () => {
    // setIsTouch(true);
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
    // setEnteredValue("");
    // setIsTouch(false);
  };

  return {
    value: inpustState.value,
    hasError,
    isValid: vlaueIsValid,
    changeHandler,
    blurHandler,
    reset,
  };
};
export default useInput;
