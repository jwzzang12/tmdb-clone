import { Link } from "react-router-dom";
import Moment from "react-moment";

export default function Movie({ itemInfo }) {
  // const dateToFormat = itemInfo.release_date;
  // console.log(dateToFormat);
  return (
    <>
      <Link to={`/detail/${itemInfo.id}`}>
        <div className="img">
          <img src={`https://image.tmdb.org/t/p/w300/${itemInfo.poster_path}`} alt="poster" />
        </div>
        <div className="info">
          <span className="point">{parseInt(itemInfo.vote_average * 10)}</span>
          <h3>{itemInfo.title ? itemInfo.title : itemInfo.name}</h3>
          <p className="release">
            <Moment format="DD MMM YYYY">{itemInfo.release_date ? itemInfo.release_date : itemInfo.first_air_date}</Moment>
          </p>
        </div>
      </Link>
    </>
  );
}
