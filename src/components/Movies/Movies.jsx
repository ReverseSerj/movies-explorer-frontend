import React from "react";
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from "./MoviesCardList/MoviesCardList";

export default function Movies() {

  let initSearchText = '';
  const tmpSearchText = localStorage.getItem('searchTextMovies');
  if (tmpSearchText) {
    initSearchText = tmpSearchText;
  }

  let initIsShortMovies = false;
  const tmpShortsMovies = localStorage.getItem('isShortMovieMovies');
  if (tmpShortsMovies) {
    if(tmpShortsMovies === '0') {
      initIsShortMovies = false;
    } else {
      initIsShortMovies = true;
    }
  }

  const [searchText, setSearchText] = React.useState(initSearchText);
  const [isShortsMovies, setIsShortsMovies] = React.useState(initIsShortMovies);
  
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