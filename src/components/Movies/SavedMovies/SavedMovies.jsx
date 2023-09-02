import React from "react";
import './SavedMovies.css';
import SeachForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies() {
  return (
    <main>
      <SeachForm/>
      <MoviesCardList isFavoriteMovie={true}/>
    </main>
  )
}