import { Link } from "react-router-dom";
import Moment from "react-moment";

export default function SearchItem({ itemInfo }) {
  return (
    <Link to={`/${itemInfo.media_type}/${itemInfo.id}`}>
      <li>
        <div className="img">
          <img src={`https://image.tmdb.org/t/p/w300/${itemInfo.poster_path}`} alt="" />
        </div>
        <div className="info">
          <h3>{itemInfo.title ? itemInfo.title : itemInfo.name}</h3>
          <p className="release">
            <Moment format="DD MMM YYYY">{itemInfo.release_date ? itemInfo.release_date : itemInfo.first_air_date}</Moment>
          </p>
          <div className="desc">{itemInfo.overview}</div>
        </div>
      </li>
    </Link>
  );
}
