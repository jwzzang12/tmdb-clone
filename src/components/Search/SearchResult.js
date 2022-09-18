import axios from "axios";
import qs from "qs";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Search from "./Search";
import SearchItem from "./SearchItem";

export default function List() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const searchMovie = qs.parse(location.search, { ignoreQueryPrefix: true }).movie;
  useEffect(() => {
    axios
      .get(
        `
    https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&page=1&query=${searchMovie}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [searchMovie]);
  return (
    <div className="searchResult">
      <Search />
      <ul className="movieList">
        {movies.map((item, idx) => {
          console.log(item);
          return <SearchItem movieInfo={item} key={idx} className="searchItem" />;
        })}
      </ul>
    </div>
  );
}
