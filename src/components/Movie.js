import { Link } from "react-router-dom";
import Moment from "react-moment";
import { useEffect, useRef } from "react";

export default function Movie({ itemInfo }) {
  const rating = parseInt(itemInfo.vote_average * 10);
  // const ratingRef = useRef();
  // useEffect(() => {
  //   if (rating > 70) {
  //     ratingRef.style = { borderColor: "#f00" };
  //     console.log("aaa");
  //   }
  // });
  // console.log(`/${itemInfo.media_type}/${itemInfo.id}`);

  return (
    <Link to={`/${itemInfo.media_type}/${itemInfo.id}`}>
      <div className="img">
        <img src={`https://image.tmdb.org/t/p/w300/${itemInfo.poster_path}`} alt="poster" />
      </div>
      <div className="info">
        <span className="point">{rating}</span>
        <h3>{itemInfo.title ? itemInfo.title : itemInfo.name}</h3>
        <p className="release">
          <Moment format="DD MMM YYYY">{itemInfo.release_date ? itemInfo.release_date : itemInfo.first_air_date}</Moment>
        </p>
      </div>
    </Link>
  );
}
