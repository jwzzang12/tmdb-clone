import { Link } from "react-router-dom";

export default function Movie({ movieInfo }) {
  return (
    <>
      <Link to={`/detail/${movieInfo.id}`}>
        <div className="img">
          <img src={`https://image.tmdb.org/t/p/w300/${movieInfo.poster_path}`} alt="poster" />
        </div>
        <div className="info">
          <span className="point">{movieInfo.vote_average * 10}</span>
          <h3>{movieInfo.title}</h3>
          <p className="release">{movieInfo.release_date}</p>
        </div>
      </Link>
    </>
  );
}
