import "./Movie-Item.css";
 const MovieItem = ({ title, key,id, rating, img, onClick }) => {
  return (
    <li key={key} className="movie-item">
      <div className="movie-item__image">
        <img src={img} alt={title} className="img" />
      </div>
      <div className="movie-item__info">
        <h2>{title}</h2>
        <div className="rating">
          <p>{rating}/5 stars</p>
          <button
            onClick={() => {
              onClick(id);
            }}
            className="btn btn--danger"
          >
            DELETE
          </button>
          <button className="btn-edit">EDIT</button>
        </div>
      </div>
    </li>
  );
};
export default MovieItem
