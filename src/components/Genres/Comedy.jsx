import React, { useState, useEffect } from "react";
import ".//Genres.scss";
import Navbar from "../Navbar";

function Comedy() {
  const [movies, setMovies] = useState([]);
  const API_KEY = "c033d3977348ab9f9b8bbcc11094cdb0";
  const API_URL = "https://api.themoviedb.org/3";
  const API_IMG = "https://image.tmdb.org/t/p/w400";

  const getMovies = async () => {
    const response = await fetch(
      `${API_URL}/discover/movie?with_genres=35&1&primary_release_date.gte=2010-01-01&primary_release_date.lte=2021-12-31&api_key=${API_KEY}`
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
      <div className="comedy">
        <div className="movie-container">
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="movie">
                <img src={API_IMG + movie.poster_path} alt="" />

                <div className="movie-info">
                  <h1>{movie.title}</h1>
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

export default Comedy;
