import React from "react";

const MovieItem = (props) => {
  return (
    <div className="jumbotron bg-info bg-gradient rounded-3 shadow p-2 m-4">
      <h1 className="display-3">{props.title}</h1>
      <p className="lead">{props.description}</p>
      <hr className="my-4" />
      <p>{props.releaseDate}</p>
    </div>
  );
};

export default MovieItem;
