import React from "react";
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies() {
  const [searchText, setSearchText] = React.useState('');
  const [isShortsMovies, setIsShortsMovies] = React.useState(false);

  return (
    <main>
       <SearchForm 
        onSearch={setSearchText}
        setIsShortsMovies={setIsShortsMovies}  
        isShortsMovies={isShortsMovies} 
        searchText={searchText}
      />
      <MoviesCardList
        searchText={searchText}
        isFavoriteMovie={true}
        isShortsMovies={isShortsMovies}
      />
    </main>
  )
}