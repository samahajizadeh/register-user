import React, { Component, useContext, useEffect, useState } from "react";
import UserContext from "../../store/user-context";
import ErrorBoundary from "../ErrorBoundary";
import UserFrom from "./UserForm";
import Users from "./Users";

class UserFinder extends Component {
  static contextType = UserContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }
  searchChangeHandler(data) {
    debugger
    this.setState({ searchTerm: data});
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.context.user });
  }

  componentDidUpdate(perevProp, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.user.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  render() {
    return (
      <div className="row justify-content-center">
        <UserFrom searchInput={this.searchChangeHandler.bind(this)} />
        <div className="w-100"></div>
        <ErrorBoundary>
          <Users user={this.state.filteredUsers} />
        </ErrorBoundary>
      </div>
    );
  }
}

// const UserFinder = (props) => {
//   const userCtx = useContext(UserContext);
//   const { user } = userCtx;
//   const [filteredUsers, setFilteredUsers] = useState(user);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     debugger;
//     if (filteredUsers.length === 0) {
//       throw new Error("No Item");
//     }
//     setFilteredUsers(user.filter((user) => user.name.includes(searchTerm)));
//   }, [searchTerm]);

//   const searchChangeHandler = (data) => {
//     setSearchTerm(data);
//   };
//   return (
//     <div className="row justify-content-center">
//       <UserFrom searchInput={searchChangeHandler} />
//       <div className="w-100"></div>

//       <Users user={filteredUsers} />
//     </div>
//   );
// };
export default UserFinder;
