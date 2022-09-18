import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header">
      <Link to="/">
        <h1>TMDB</h1>
      </Link>
      <nav id="gnb">
        <h2 className="blind">gnb</h2>
        <ul className="menu">
          <li>Movies</li>
          <li>TV Shows</li>
          <li>People</li>
          <li>More</li>
        </ul>
      </nav>
    </header>
  );
}
