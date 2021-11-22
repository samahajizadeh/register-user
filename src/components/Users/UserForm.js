import React from "react";
import Card from "../UI/Cards";

const UserFrom = (props) => {

    const searchHandler =(event) =>{
        props.searchInput(event.target.value)
    }

  return (
    <Card>
      <div className="row">
        <div className="col-md-8 offset-md-2 my-4">
          <input
            className="form-control"
            type="text"
            placeholder="Default input"
            aria-label="default input example"
            onChange={searchHandler}
          />
        </div>
      </div>
    </Card>
  );
};
export default UserFrom;
