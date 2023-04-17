import "./Main-Content.css";
import MovieList from "../movie/Movie-List";

function MainContent({ movies, onClick }) {
  return (
    <div className="content-text">
      <MovieList movies={movies} onClick={onClick}></MovieList>
    </div>
  );
}
export default MainContent;
