import React, { useRef, useState } from "react";
import Card from "../UI/Cards";
import Button from "../UI/Button";

const AddMovie = (props) => {
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  const addMovieHandler = (event) => {
    event.preventDefault();
    let data = {
      id: Math.random(),
      title: titleRef.current.value,
      description: descRef.current.value,
      release_date: dateRef.current.value,
    };
    props.onAddMovie(data);
    
    titleRef.current.value = "";
    descRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <Card>
      <form onSubmit={addMovieHandler}>
        <div className="mb-3">
          <label htmlFor="titleForm" className="form-label float-start">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="titleForm"
            ref={titleRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descForm" className="form-label float-start">
            Description
          </label>
          <textarea
            className="form-control"
            id="descForm"
            rows="3"
            ref={descRef}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="dateForm" className="form-label float-start">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="dateForm"
            ref={dateRef}
          />
        </div>
        <div className="mb-3">
          <Button className="btn-primary" type="submit">
            Add Movie
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default AddMovie;
