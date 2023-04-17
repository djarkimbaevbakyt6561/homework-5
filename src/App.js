import './App.css';
import Header from './components/header/Header';
import MainContent from "./components/main-content/Main-Content"
import { useState } from 'react';
import { useEffect } from "react";
function App() {
  const Movies_Key = "Movies";
  const moviesFromLocalStorage = localStorage.getItem(Movies_Key);
  const movies = moviesFromLocalStorage ? JSON.parse(moviesFromLocalStorage) : [];
  const [movieItem, setMovieItem] = useState(movies);

  const addNewExpensesHandler = (data) => {
    setMovieItem([...movieItem, data]);
  };
  function deleteMovie(id) {
    const newData = movieItem.filter((el) => el.id !== id)
    setMovieItem(newData)
  }
  useEffect(() => {
    localStorage.setItem(Movies_Key, JSON.stringify(movieItem));
  }, [movieItem]);

  return (
    <div className="App">
      <Header onSubmit={addNewExpensesHandler}></Header>
      <MainContent onClick={deleteMovie} movies={movieItem}></MainContent>
    </div>
  );
}

export default App;
