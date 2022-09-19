import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Moment from "react-moment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Scrollbar, Mousewheel } from "swiper";

export default function Detail() {
  const { type, id } = useParams();
  const location = useLocation();
  console.log(location);
  const [detail, setDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [cast, setCast] = useState([]);
  const score = parseInt(detail.vote_average * 10);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_KEY}&include_adult=false`).then((res) => {
      console.log(res.data);
      setDetail(res.data);
      setGenres(res.data.genres);
    });
    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_MOVIE_KEY}&include_adult=false`).then((res) => {
      console.log(res.data);
      setCast(res.data.cast);
    });
  }, []);

  return (
    <div id="detail" className="detail">
      <div className="detailBox">
        <div className="img">
          <img src={`https://image.tmdb.org/t/p/w300/${detail.poster_path}`} alt="" />
        </div>
        <div className="info">
          <div className="titleBox">
            <h3>{detail.title}</h3>
            <span>
              (<Moment format="YYYY">{detail.release_date ? detail.release_date : detail.first_air_date}</Moment>)
            </span>
          </div>
          <span className="release">
            <Moment format="DD/MM/YYYY">{detail.release_date ? detail.release_date : detail.first_air_date}</Moment>
          </span>

          <span className="genres">
            {genres.map((item, idx) => {
              return <span key={idx}>{item.name}</span>;
            })}
          </span>
          <span className="runtime">
            {parseInt(detail.runtime / 60)}h {detail.runtime % 60}m
          </span>
          <div className="miniMenu">
            <div className="score">
              <div className="circle">
                {score}
                <span class="material-icons">percent</span>
              </div>
              <span>
                User <br />
                Score
              </span>
            </div>
            <span>
              <span class="material-icons">format_list_bulleted</span>
            </span>
            <span>
              <span class="material-icons">favorite</span>
            </span>
            <span>
              <span class="material-icons">bookmark</span>
            </span>
            <span>
              <span class="material-icons">star</span>
            </span>
          </div>
          <div className="tagline">{detail.tagline}</div>
          <div className="overview">
            <h4>Overview</h4>
            <div className="desc">{detail.overview}</div>
          </div>

          <div className="bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})` }}></div>
        </div>
      </div>
      <div className="profileBox">
        <h3>Top Billed Cast</h3>
        <Swiper
          modules={[Navigation, Scrollbar, Mousewheel]}
          className="profileList"
          spaceBetween={20}
          navigation
          mousewheel
          slidesPerView={"auto"}
          scrollbar={{ draggable: true }}
        >
          {cast
            .filter((item, idx) => {
              if (idx < 10) {
                return true;
              }
            })
            .map((item, idx) => {
              return (
                <SwiperSlide className="profile" key={idx}>
                  <img src={`https://image.tmdb.org/t/p/w185/${item.profile_path}`} alt={item.name} />
                  <div className="castName">{item.name}</div>
                  <span>{item.character}</span>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}
