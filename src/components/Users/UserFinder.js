import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../store/user-context";
import UserFrom from "./UserForm";
import Users from "./Users";

const UserFinder = (props) => {
  const userCtx = useContext(UserContext);
  const { user } = userCtx;
  const [filteredUsers, setFilteredUsers] = useState(user);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredUsers(user.filter((user) => user.name.includes(searchTerm)));
  }, [searchTerm]);

  const searchChangeHandler = (data) => {
    setSearchTerm(data);
  };
  return (
    <div className="row justify-content-center">
      <UserFrom searchInput={searchChangeHandler} />
      <div className="w-100"></div>

      <Users user={filteredUsers} />
    </div>
  );
};
export default UserFinder;
