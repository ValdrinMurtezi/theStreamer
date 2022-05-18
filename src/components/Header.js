import React, { useState, useEffect } from "react";

import "../styles/Header.scss";

function Header() {
  const [currentSlide, setCurrentSlide] = useState(2);
  const APP_KEY = "c033d3977348ab9f9b8bbcc11094cdb0";
  const API_URL = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      `${API_URL}/discover/movie?sort_by=popularity.desc&api_key=${APP_KEY}`
    );
    const data = await response.json();
    setMovies(data.results);
    movies.push(data.results);
  };

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === movies.length - 1 ? 0 : currentSlide + 1);
  };

  const autoSlide = true;
  let setSlide;

  const auto = () => {
    setSlide = setInterval(nextSlide, 50000);
  };

  useEffect(() => {
    if (autoSlide) {
      auto();
      return () => clearInterval(setSlide);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  return (
    <div className="header-body">
      {movies.map((item, index) => {
        return (
          <div
            className={index === currentSlide ? "item current " : "item"}
            key={index}
          >
            {index === currentSlide && (
              <div className="movie">
                <img
                  src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}
                  alt="imgg"
                />
                <div className="info">
                  <h1>{item.title.slice(0, 33)}</h1>

                  <p>{item.overview.slice(0, 300)}</p>
                  <div className="rating">
                    <span>{item.release_date}</span>
                    <span className="number">
                      {item.vote_average}
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>
                  <button onClick={nextSlide}>
                    <i className="fa-solid fa-play"></i> Watch Now
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Header;
