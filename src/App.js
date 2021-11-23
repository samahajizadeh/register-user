import React from "react";
import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";

const App = () => {
  return (
    <div className="container-fluid bg-dark">
      <div className="row justify-content-center">
        <BackwardCounter />
        <div className="w-100" ></div>
        <ForwardCounter />
      </div>
    </div>
  );
};
export default App;
