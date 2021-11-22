import React from "react";
const UserContext = React.createContext({
  user: []
});
export default UserContext;

const DUMMY_USER = [
  { id: 1, name: "sama" },
  { id: 2, name: "soodabeh" },
  { id: 3, name: "fariba" },
  { id: 4, name: "sahar" },
  { id: 5, name: "zahra" },
];

export const UserProvider = (props) => {
  return (
    <UserContext.Provider value={{ user: DUMMY_USER }}>
      {props.children}
    </UserContext.Provider>
  );
};
