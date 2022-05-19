import React, { useState, useEffect } from "react";
import Carosuel from "react-elastic-carousel";
import "../styles/movies.scss";

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 838, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

function Movies() {
  const APP_KEY = "c033d3977348ab9f9b8bbcc11094cdb0";
  const API_URL = "https://api.themoviedb.org/3";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        `${API_URL}/discover/movie?sort_by=popularity.desc&api_key=${APP_KEY}`
      );
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results);
    };
    getMovies();
  }, []);

  return (
    <section>
      <div className="crs-1">
        <h1>New </h1>
        <Carosuel breakPoints={breakPoints}>
          {movies.map((movie, index) => (
            <div className="movie" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                alt="poster"
              />
              <h4>{movie.title}</h4>
            </div>
          ))}
        </Carosuel>
      </div>

      <div className="crs-2">
        <h1>Popular now</h1>
        <Carosuel breakPoints={breakPoints}>
          {movies.map((movie, index) => (
            <div className="movie" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                alt="poster"
              />
              <h4>{movie.title}</h4>
            </div>
          ))}
        </Carosuel>
      </div>
    </section>
  );
}

export default Movies;
