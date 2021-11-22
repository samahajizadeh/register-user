import React, { Component } from "react";

class User extends Component {
  render(){
    return(
      <li className="list-group-item">{this.props.name}</li>
    )
  }
}
// const User = (props) => {

//   return (
//     <li className="list-group-item">{props.name}</li>
//   )
     
// };

export default User;
