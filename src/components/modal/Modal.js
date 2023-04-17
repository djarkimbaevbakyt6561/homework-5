import "./Modal.css";
import { useState } from "react";
const Modal = ({ onClick, className, onSubmit }) => {
  const [inputText, setInputText] = useState('');
  const [inputImage, setInputUrl] = useState('');
  const [inputRating, setInputRating] = useState('');
  function getInputText(e) {
    setInputText(e.target.value);
  }

  function getInputUrl(e) {
    setInputUrl(e.target.value);
  }

  function getInputRating(e) {
    setInputRating(e.target.value);
  }


  function addMovieHandler(e) {
    e.preventDefault();
    const movie = {
      title: inputText,
      img: inputImage,
      rating: inputRating,
      id: Math.random()
    };
    onSubmit(movie);
    setInputText('');
    setInputUrl('');
    setInputRating('');
    onClick();
    localStorage.setItem("Movies", JSON.stringify(movie));
  }
  return (
    <div>
      <div className={className} id="backdrop"></div>
      <div className={className} id="add-modal">
        <div className="modal__content">
          <label for="title">Movie Title</label>
          <input value={inputText} onChange={getInputText} type="text" name="title" id="title" />
          <label for="image-url">Image URL</label>
          <input value={inputImage} onChange={getInputUrl} type="text" name="image-url" id="image-url" />
          <label for="rating">Your Rating</label>
          <input
            value={inputRating}
            type="number"
            name="rating"
            id="rating"
            onChange={getInputRating}

          />
        </div>
        <div className="modal__actions">
          <button onClick={onClick} className="button button--passive" id="cancel">
            Cancel
          </button>
          <button onClick={addMovieHandler} className="button button--success" id="add-movie">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
