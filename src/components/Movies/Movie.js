import { data } from "jquery";
import React, { useCallback, useEffect, useState } from "react";
import AddMovie from "./AddMovie";
import FetchMovie from "./FetchMovie";
import MovieList from "./MovieList";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // function fetchMovieHandler() {
  //   setIsLoading(true);
  //   fetch("https://swapi.dev/api/films/ddd")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("Something went wrong");
  //       }
  //     })
  //     .then((data) => {
  //       const transformData = data.results.map((data) => {
  //         return {
  //           id: data.episode_id,
  //           title: data.title,
  //           description: data.opening_crawl,
  //           releaseDate: data.release_date,
  //         };
  //       });

  //       setMovies(transformData);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       setIsLoading(false);
  //     });

  // }

  async function fetchMovieHandler() {
    console.log("fetchMovie");
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://react-movies-d52dd-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("found not movie");
      }
      const data = await response.json();
      let movieLists = [];
      for (const key in data) {
        movieLists.push(data[key]);
      }
      const transformData = movieLists.map((data) => {
        return {
          id: data.id,
          title: data.title,
          description: data.description,
          releaseDate: data.release_date,
        };
      });
      setMovies(transformData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  // const fetchMovieHandler = useCallback(async () => {
  //   console.log('fetchMovie')
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch("https://swapi.dev/api/films/dd");
  //     const data = await response.json();
  //     if(!response.ok){
  //       throw new Error('not found movie')
  //     }
  //     const transformData = data.results.map((data) => {
  //       return {
  //         id: data.episode_id,
  //         title: data.title,
  //         description: data.opening_crawl,
  //         releaseDate: data.release_date,
  //       };
  //     });
  //     setMovies(transformData);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false)
  // },[])

  useEffect(() => {
    fetchMovieHandler();
  }, []);

  // let content = <h3 className="text-warning"> faoun no Movie</h3>;
  // if (movies.length > 0) {
  //   content = <MovieList movie={movies} />;
  // }
  // if (error) {
  //   content = <h3 className="text-danger">{error}</h3>;
  // }
  // if (isLoading) {
  //   content = (
  //     <div className="spinner-border text-primary" role="status">
  //       <span className="visually-hidden">Loading...</span>
  //     </div>
  //   );
  // }
  const addMovieHandler = async (movie) => {
    setIsLoading(true);
    const response = await fetch(
      "https://react-movies-d52dd-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      }
    );
    const datamovie = await response.json();
    setIsLoading(false);
    fetchMovieHandler();
  };
  return (
    <div className="row justify-content-center">
      <AddMovie onAddMovie={addMovieHandler} />
      <div className="w-100"></div>
      <FetchMovie onClick={fetchMovieHandler} />
      <div className="w-100"></div>
      {/* {content} */}
      <MovieList movie={movies} isLoading={isLoading} error={error} />
    </div>
  );
};
export default Movie;
