import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Cards";

const FetchMovie = (props) => {
  return (
    <Card>
      <Button className="btn-primary my-3" onClick={props.onClick}>Fetch Movie</Button>
    </Card>
  );
};
export default FetchMovie;
