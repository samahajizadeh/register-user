import React from "react";
import Card from "../UI/Cards";
import MovieItem from "./Movieitem";
const MovieList = (props) => {
  // console.log('movieList')
  // let content = props.movie.map((item) => (
  //   <MovieItem
  //     key={item.id}
  //     title={item.title}
  //     description={item.description}
  //     releaseDate={item.releaseDate}
  //   />
  // ));
  let content = <h3> found not movie</h3>;
  if (props.movie.length > 0) {
    content = props.movie.map((item) => (
      <MovieItem
        key={item.id}
        title={item.title}
        description={item.description}
        releaseDate={item.releaseDate}
      />
    ));
  }
  if (props.error) {
    content = <h3>{props.error}</h3>;
  }
  if (props.isLoading) {
    content = (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
 
  return <Card className="p-4">{content}</Card>;
};
export default React.memo(MovieList);
