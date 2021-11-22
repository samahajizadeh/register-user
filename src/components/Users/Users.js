import React, { Component, useEffect, useState } from "react";
import Card from "../UI/Cards";
import User from "./User";
import Button from "../UI/Button";

class Users extends Component {
  constructor(){
    super();
    this.state={
      isShowList: true,
    }
  }

  componentDidUpdate() {
    if (this.props.user.length === 0) {
      throw new Error('No users provided!');
    }
  }

  ToggleHandler(){
    this.setState((curState)=>{
      return{ isShowList:!curState.isShowList}
    })
  }

  
  render() {
    const userItem = this.props.user.map((item) => (
      <User className="list-group-item" key={item.id} name={item.name} />
    ));
    return (
      <Card>
        <Button
          type="button"
          className="btn-success alight-item-center d-block w-25 mx-auto my-3"
          onClick={this.ToggleHandler.bind(this)}
        >
          {`${this.state.isShowList ? "SHOW" : "HIDE"} USER `}
        </Button>
        {this.state.isShowList && <ul className="list-group py-3">{userItem}</ul>}
      </Card>
    );
  }
}

// const Users = (props) => {
//   const [isShowList, setIsShowList] = useState(true);

//   const ToggleHandler = () => {
//     setIsShowList((prevState) => !prevState);
//   };

//   useEffect(() => {
//     if (props.user.length === 0) {
//       throw new Error("No users provided!");
//     }
//   }, [props.user]);

//   const userItem = props.user.map((item) => (
//     <User className="list-group-item" key={item.id} name={item.name} />
//   ));

//   return (
//     <Card>
//       <Button
//         type="button"
//         className="btn-success alight-item-center d-block w-25 mx-auto my-3"
//         onClick={ToggleHandler}
//       >
//         {`${isShowList ? "SHOW" : "HIDE"} USER `}
//       </Button>
//       {isShowList && <ul className="list-group py-3">{userItem}</ul>}
//     </Card>
//   );
// };
export default Users;
