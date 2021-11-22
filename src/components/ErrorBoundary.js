import React, { Component, useState } from "react";
import Card from "./UI/Cards";
// const ErrorBoundary = () =>{
//     const [hasError,setHasError] = useState(false);
//     const error = hasError ? <p>user not Found</p> : <p>props.children</p>
//     return(
//         {error}
//     )
// }

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error) {
    console.log(error)
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <p style={{ color: this.state.hasError ? "red" : "" }}>
          user nou found
        </p>
      );
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
