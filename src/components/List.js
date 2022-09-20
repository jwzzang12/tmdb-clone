import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Movie from "./Movie";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import Search from "./Search/Search";

export default function List() {
  const randomNum = parseInt(Math.random() * 24);
  console.log(randomNum);

  const movieList = useRef();
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [backdrop, setBackdrop] = useState(0);

  const [type, setType] = useState("movie");
  const [time, setTime] = useState("day");
  const [movieActive, setMovieActive] = useState(true);
  const [tvActives, setTvActives] = useState(false);
  const [dayActive, setDayActive] = useState(true);
  const [weekActives, setWeekActives] = useState(false);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${type}/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&page=1`).then((res) => {
      setPopular(res.data.results);
    });
    axios.get(`https://api.themoviedb.org/3/trending/all/${time}?api_key=${process.env.REACT_APP_MOVIE_KEY}&page=1`).then((res) => {
      setTrending(res.data.results);
    });
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_KEY}`
      )
      .then((res) => {
        setBackdrop(res.data.results[randomNum]);
      });
  }, [type, time]);
  return (
    <>
      <div id="mainSearchBox">
        <h3>Welcome.</h3>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <Search />
        <div className="bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop.backdrop_path})` }}></div>
      </div>
      <div className="popular mainList">
        <div className="titleBox">
          <h2 className="title">What's Popular</h2>
          <div className="slideBtn">
            <div
              className={movieActive ? "on" : ""}
              onClick={() => {
                setType("movie");
                setMovieActive(true);
                setTvActives(false);
              }}
            >
              <span>In Cinema</span>
            </div>
            <div
              className={tvActives ? "on" : ""}
              onClick={() => {
                setType("tv");
                setMovieActive(false);
                setTvActives(true);
              }}
            >
              <span>On TV</span>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Scrollbar, Mousewheel]}
          className="movieList"
          ref={movieList}
          spaceBetween={20}
          navigation
          mousewheel
          slidesPerView={"auto"}
          scrollbar={{ draggable: true }}
        >
          {popular.map((item, idx) => {
            return (
              <SwiperSlide key={idx} className="item">
                <Movie itemInfo={item} type={type} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="trending mainList">
        <div className="titleBox">
          <h2 className="title">Trending</h2>
          <div className="slideBtn">
            <div
              className={dayActive ? "on" : ""}
              onClick={() => {
                setTime("day");
                setDayActive(true);
                setWeekActives(false);
              }}
            >
              <span>Today</span>
            </div>
            <div
              className={weekActives ? "on" : ""}
              onClick={() => {
                setTime("week");
                setDayActive(false);
                setWeekActives(true);
              }}
            >
              <span>This Week</span>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Scrollbar, Mousewheel]}
          className="movieList"
          ref={movieList}
          spaceBetween={20}
          navigation
          mousewheel
          slidesPerView={"auto"}
          scrollbar={{ draggable: true }}
        >
          {trending.map((item, idx) => {
            return (
              <SwiperSlide key={idx} className="item">
                <Movie itemInfo={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
