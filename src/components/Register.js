import React from "react";
import useHttp from "../hook/use-http";
import useInput from "../hook/use-input";
import Button from "./UI/Button";
import Card from "./UI/Cards";
const Register = (props) => {
  const enteredStatusData = [
    { id: 1, value: "single" },
    { id: 2, value: "engaged" },
    { id: 3, value: "married" },
    { id: 4, value: "divorced" },
  ];
  const {
    value: enteredFirstName,
    isValid: firstNameisValid,
    hasError: firstNameHasError,
    changeHandler: firstNameChange,
    blurHandler: firstNameBlur,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLastName,
    isValid: lastNameisValid,
    hasError: lastNameHasError,
    changeHandler: lastNameChange,
    blurHandler: lastNameBlur,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: emailValid,
    hasError: emailHasError,
    changeHandler: emailChange,
    blurHandler: emailBlur,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));
  const {
    value: enteredStatus,
    isValid: statusisValid,
    hasError: statusHasError,
    changeHandler: statusChange,
    blurHandler: statusBlur,
    reset: statusReset,
  } = useInput((value) => value.trim() !== '');

  let formIsVaild = false;

  if (firstNameisValid && lastNameisValid && emailValid && statusisValid) {
    formIsVaild = true;
  }
  const {isLoading ,isError ,sendRequest }=useHttp()


  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsVaild) {
      return;
    }
    const registerData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      status: enteredStatus,
    };
    const transformData = (data) =>{
      const generate = data.name;
      const creatData = {id:generate , ...registerData}
      console.log("creat data   " ,creatData)
      props.onAddUser(creatData)
    }
    sendRequest({
      url:'https://react-movies-d52dd-default-rtdb.firebaseio.com/register.json',
      method:'POST',
      headers:{
        'Content-Type' : 'applicaton/json'
      },
      body: registerData
    },
    transformData
    )
    firstNameReset();
    lastNameReset();
    emailReset();
    statusReset();
  };

  return (
    <Card>
      <form className="row g-3 py-3" onSubmit={submitHandler}>
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            FirstName
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={enteredFirstName}
            onBlur={firstNameBlur}
            onChange={firstNameChange}
          />
          {firstNameHasError && (
            <p className="text-sm text-danger">this is empty</p>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            LastName
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={enteredLastName}
            onBlur={lastNameBlur}
            onChange={lastNameChange}
          />
          {lastNameHasError && (
            <p className="text-sm text-danger">this is empty</p>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={enteredEmail}
            onBlur={emailBlur}
            onChange={emailChange}
          />
          {emailHasError && (
            <p className="text-sm text-danger">email is invlalid</p>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="materialStatus" className="form-label">
            Material Status
          </label>
          <select
            id="materialStatus"
            className="form-select"
            value={enteredStatus}
            onBlur={statusBlur}
            onChange={statusChange}
          >
            <option value="">choose...</option>
            {enteredStatusData.map((x) => (
              <option key={x.id} value={x.value}>
                {x.value}
              </option>
            ))}
          </select>
          {statusHasError && (
            <p className="text-sm text-danger">this is empty</p>
          )}
        </div>
        { isError &&
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            respponse is Error
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        }
        <div className="col-12">
          <Button type="submit" className="btn-primary" disabled={!formIsVaild}>
            {isLoading ? 'sending...' : 'Sign in'}
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default Register;
