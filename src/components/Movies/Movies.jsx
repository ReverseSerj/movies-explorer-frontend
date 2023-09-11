import React from "react";
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from "./MoviesCardList/MoviesCardList";

export default function Movies({searchText, setSearchText, isShortsMovies, setIsShortsMovies}) {
  
  return (
    <main className="main-movies">
      <SearchForm 
        onSearch={setSearchText}
        setIsShortsMovies={setIsShortsMovies}  
        isShortsMovies={isShortsMovies} 
        searchText={searchText}/>
      <MoviesCardList
        searchText={searchText}
        isFavoriteMovie={false}
        isShortsMovies={isShortsMovies}
      />
    </main>
  )
}