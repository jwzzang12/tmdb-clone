import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const searchHandler = (e) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <div className="searchBox">
      <input
        type="text"
        spellCheck="false"
        placeholder="Search for a movie, tv show..."
        onChange={searchHandler}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            navigate(`/search?query=${search}`);
          }
        }}
      />
      <Link to={`/search?query=${search}`}>
        <button className="btnSearch">Search</button>
      </Link>
    </div>
  );
}
