export default function SearchItem({ movieInfo }) {
  return (
    <li>
      <div className="img">
        <img src={`https://image.tmdb.org/t/p/w300/${movieInfo.poster_path}`} alt="" />
      </div>
      <div className="info">
        <h3>{movieInfo.title}</h3>
        <p className="release">{movieInfo.release_date}</p>
        <div className="desc">{movieInfo.overview}</div>
      </div>
    </li>
  );
}
