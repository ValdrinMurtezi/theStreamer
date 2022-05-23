import React, { useState, useEffect } from "react";
import ".//Genres.scss";
import Navbar from "../Navbar";

function Adventure() {
  const [movies, setMovies] = useState([]);
  const API_KEY = "c033d3977348ab9f9b8bbcc11094cdb0";
  const API_URL = "https://api.themoviedb.org/3";
  const IMG_URL = "https://image.tmdb.org/t/p/w400";

  const getMovies = async () => {
    const response = await fetch(
      `${API_URL}/discover/movie?with_genres=99|12|18&include_adult=false&api_key=${API_KEY}`
    );
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Navbar />
      <div className="adventure">
        <div className="movie-container">
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="movie">
                <img src={IMG_URL + movie.poster_path} alt="" />
                <div className="movie-info">
                  <h1>{movie.title}</h1>
                  <span>{movie.vote_average}</span>
                </div>
                <div className="overview">
                  <h2>Overview</h2>
                  <p>{movie.overview}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      ;
    </>
  );
}

export default Adventure;
