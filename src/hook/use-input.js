import { useState } from "react";

const useInput = (validData) =>{
    const [enteredValue,setEnteredValue] = useState('');
    const [IsTouched,setIsTouch] = useState(false);
    const vlaueIsValid = validData(enteredValue);
    const hasError = !vlaueIsValid && IsTouched;
    const changeHandler = (event) =>{
        setEnteredValue(event.target.value);
    }
    const blurHandler = () =>{
        setIsTouch(true);
    }

    const reset = () =>{
        setEnteredValue('');
        setIsTouch(false)
    }

    return{
        value:enteredValue,
        hasError,
        isValid:vlaueIsValid,       
        changeHandler,
        blurHandler,
        reset
    }
}
export default useInput;