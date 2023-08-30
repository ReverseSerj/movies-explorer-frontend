import React from "react";
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from "./MoviesCardList/MoviesCardList";

export default function Movies() {
  return (
    <main className="main-movies">
      <SearchForm/>
      <MoviesCardList
        isFavoriteMovie={false}
      />
    </main>
  )
}