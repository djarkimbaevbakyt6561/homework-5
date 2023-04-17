import './Movie-List.css'
import MovieItem from './Movie-Item'
const MovieList = ({ onClick, movies }) => {
    return (
        <ul>
            {movies.map(el => (
                <MovieItem
                key={el.id}
                id={el.id}
                title={el.title}
                rating={el.rating}
                img={el.img}
                onClick={onClick}
            />
            ))}
        </ul>
    );
};
export default MovieList