import React from "react";
import UserFinder from "./components/Users/UserFinder";
import { UserProvider } from "./store/user-context";

const App = () => {
  return (
    <div className="container-fluid bg-dark">
      <UserProvider>
        <UserFinder />
      </UserProvider>
    </div>
  );
};
export default App;
