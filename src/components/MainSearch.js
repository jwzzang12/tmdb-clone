export default function MainSearch() {
  return (
    <div id="mainSearchBox">
      <h3>Welcome.</h3>
      <p>Millions of movies, TV shows and people to discover. Explore now.</p>
      <div className="searchBox">
        <input type="text" spellCheck="false" placeholder="Search for a movie..." />
        <button className="btnSearch">Search</button>
      </div>
    </div>
  );
}
