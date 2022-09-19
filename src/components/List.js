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
  const movieList = useRef();
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [type, setType] = useState("movie");
  const [time, setTime] = useState("day");
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${type}/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&page=1`).then((res) => {
      setPopular(res.data.results);
    });
    axios.get(`https://api.themoviedb.org/3/trending/all/${time}?api_key=${process.env.REACT_APP_MOVIE_KEY}&page=1`).then((res) => {
      setTrending(res.data.results);
    });
  }, [type, time]);

  return (
    <>
      <div id="mainSearchBox">
        <h3>Welcome.</h3>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <Search />
      </div>
      <div className="popular mainList">
        <div className="titleBox">
          <h2 className="title">What's Popular</h2>
          <div className="slideBtn">
            <div>
              <span
                onClick={() => {
                  setType("movie");
                }}
              >
                In Cinema
              </span>
            </div>
            <div>
              <span
                onClick={() => {
                  setType("tv");
                }}
              >
                On TV
              </span>
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
                <Movie itemInfo={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="trending mainList">
        <div className="titleBox">
          <h2 className="title">Trending</h2>
          <div className="slideBtn">
            <div>
              <span
                onClick={() => {
                  setTime("day");
                }}
              >
                Today
              </span>
            </div>
            <div>
              <span
                onClick={() => {
                  setTime("week");
                }}
              >
                This Week
              </span>
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
