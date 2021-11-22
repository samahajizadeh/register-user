import React, { useState } from "react";
import Card from "../UI/Cards";
import User from "./User";
import Button from "../UI/Button";


const Users = (props) => {
  const [isShowList, setIsShowList] = useState(true);

  const ToggleHandler = () => {
    setIsShowList((prevState) => !prevState);
  };

  const userItem = props.user.map(item => <User className="list-group-item" key={item.id} name={item.name}/>)


  return (
    <Card>
      <Button
        type="button"
        className="btn-success alight-item-center d-block w-25 mx-auto my-3"
        onClick={ToggleHandler}
      >
        {`${isShowList ? "SHOW" : "HIDE"} USER `}
      </Button>
      {isShowList && (
        <ul className="list-group py-3">
            {userItem}
        </ul>
      )}
    </Card>
  );
};
export default Users;
