import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Movie from "./Movie";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Search from "./Search/Search";

export default function List({ type }) {
  const movieList = useRef();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${type}/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&page=1`).then((res) => {
      console.log(res.data);
      setMovies(res.data.results);
    });
  }, []);
  return (
    <>
      <div id="mainSearchBox">
        <h3>Welcome.</h3>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <Search />
      </div>
      <div className="popular">
        <h2 className="title">What's Popular</h2>
        <Swiper className="movieList" ref={movieList} spaceBetween={20} slidesPerView={"auto"}>
          {movies.map((item, idx) => {
            return (
              <SwiperSlide key={idx} className="item">
                <Movie movieInfo={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
