import React from "react";
import "../styles/movies.scss";

function Movies() {
  // const APP_KEY = "c033d3977348ab9f9b8bbcc11094cdb0";
  // const API_URL = "https://api.themoviedb.org/3";

  // // eslint-disable-next-line no-unused-vars
  // // const [movies, setMovies] = useState([]);

  // // useEffect(() => {
  // //   const getMovies = async () => {
  // //     const response = await fetch(
  // //       `${API_URL}/discover/movie?sort_by=popularity.desc&api_key=${APP_KEY}`
  // //     );
  // //     const data = await response.json();
  // //     setMovies(data.results);
  // //     // console.log(data.results);
  // //   };
  // //   getMovies();
  // // }, []);

  return (
    <div className="movies">
      <h1>Coming soon </h1>
      <i class="fa-solid fa-clapperboard"></i>
    </div>
  );
}

export default Movies;
