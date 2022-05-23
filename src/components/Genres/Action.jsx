import React, { useState, useEffect } from "react";
import ".//Action.scss";
import Navbar from "../Navbar";

function Action() {
  const [movies, setMovies] = useState([]);
  const APP_KEY = "c033d3977348ab9f9b8bbcc11094cdb0";
  const API_URL = "https://api.themoviedb.org/3";
  const IMG_URL = "https://image.tmdb.org/t/p/w400";

  const getMovies = async () => {
    const response = await fetch(
      `${API_URL}/discover/movie?with_genres=28&primary_release_year=2014&api_key=${APP_KEY}`
    );
    const data = await response.json();
    setMovies(data.results);
    console.log(data.results);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <Navbar />
      <div className="action">
        <div className="movie-container">
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="movie">
                <img src={IMG_URL + movie.poster_path} alt="" />
                <div className="movie-info">
                  <h1>{movie.original_title}</h1>
                  <span>{movie.vote_average}</span>
                </div>
                <div className="overview">
                  <h2>Overview</h2>
                  <p>{movie.overview.slice(0, 400)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Action;
