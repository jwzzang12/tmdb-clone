import { Link } from "react-router-dom";
import Moment from "react-moment";
import { useEffect, useRef } from "react";

export default function Movie({ itemInfo, type }) {
  const rating = parseInt(itemInfo.vote_average * 10);
  const ratingRef = useRef();
  let color = "";
  const ratingColor = () => {
    if (rating > 69) {
      return (color = "#0f0");
    } else if (rating > 39) {
      return (color = "#ff0");
    } else if (rating > 0) {
      return (color = "#f00");
    } else return (color = "#555");
  };
  ratingColor();
  return (
    <Link to={itemInfo.media_type ? `/${itemInfo.media_type}/${itemInfo.id}` : `/${type}/${itemInfo.id}`}>
      <div className="img">
        <img src={`https://image.tmdb.org/t/p/w300/${itemInfo.poster_path}`} alt="poster" />
      </div>
      <div className="info">
        <span className="point" ref={ratingRef} style={(ratingRef.style = { borderColor: color })}>
          {rating}
        </span>
        <h3>{itemInfo.title ? itemInfo.title : itemInfo.name}</h3>
        <p className="release">
          <Moment format="DD MMM YYYY">{itemInfo.release_date ? itemInfo.release_date : itemInfo.first_air_date}</Moment>
        </p>
      </div>
    </Link>
  );
}
