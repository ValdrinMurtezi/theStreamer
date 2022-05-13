import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeaderBody from "./HeaderBody";
import "../styles/Header.scss";

function Header() {
  const APP_KEY = "c033d3977348ab9f9b8bbcc11094cdb0";
  const API_URL = "https://api.themoviedb.org/3";
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      `${API_URL}/discover/movie?sort_by=popularity.desc&api_key=${APP_KEY}`
    );
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="header">
      <Navbar />
      <HeaderBody />
    </div>
  );
}

export default Header;
