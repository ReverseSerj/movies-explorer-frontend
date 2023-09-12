import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { moviesApi } from '../../../utils/MoviesApi';
import { mainApi } from "../../../utils/MainApi";
import Preloader from "../Preloader/Preloader";
import CurrentUserContext from '../../../context/CurrentUserContext';
 
export default function MoviesCardList({isFavoriteMovie, searchText, isShortsMovies}) { 
  const [allMovies, setAllMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [renderedMoreMovies, setRenderedMoreMovies] = useState([]);
  const [countView, setCountView] = useState(0);
  const currentUser = React.useContext(CurrentUserContext);

  function getCardsCount() {
    if(window.innerWidth >= 1280) {
      return 12;
    } else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
      return 8;
    } else {
      return 5;
    }
  }

  function getNewCardsCount() {
    if(window.innerWidth >= 1280) {
      return 3;
    } else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
      return 2;
    } else {
      return 2;
    }
  }

  useEffect(() => {
    if(Object.keys(currentUser).length > 0) {
      const allMoviesLocal = localStorage.getItem('allMovies');
      const favoriteMoviesLocal = localStorage.getItem('favoriteMovies');
      Promise.all([((allMoviesLocal) ? JSON.parse(allMoviesLocal) : moviesApi.getMovies()), ((favoriteMoviesLocal) ? JSON.parse(favoriteMoviesLocal) : mainApi.getMovies())])
      .then((res) => {
        setAllMovies(res[0]);
        localStorage.setItem('allMovies', JSON.stringify(res[0]));
        setCountView(getCardsCount());
        const filteredMovie = filterMovie(searchText, isShortsMovies, res[0])
        setRenderedMoreMovies(filteredMovie);
        setFavoriteMovies(res[1]);
        localStorage.setItem('favoriteMovies', JSON.stringify(res[1]));
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [currentUser]);

  const filterMovie = (searchText, isShorts, movies) => {
    return movies.filter(
      ({nameRU, nameEN, duration}) => {
        if (((isShorts && (duration <= 40)) || !isShorts) && (!searchText || (nameRU.toLowerCase().includes(searchText.toLowerCase()) || nameEN.toLowerCase().includes(searchText.toLowerCase())))) {
          return true
        }
        return false
      }
    );
  }

  useEffect(() => {
    const filteredMovie = filterMovie(searchText, isShortsMovies, allMovies)
    setRenderedMoreMovies(filteredMovie);
  }, [searchText, isShortsMovies]);

  function moreMoviesHandler() {
    setCountView(countView + getNewCardsCount());
  }

  function addFavoriteMovie(movie) {
    mainApi.saveMovie(movie)
    .then((movie) => {
      const newFavMovieArray = favoriteMovies.concat([movie]);
      setFavoriteMovies(newFavMovieArray);
      localStorage.setItem('favoriteMovies', JSON.stringify(newFavMovieArray));
      console.log(newFavMovieArray);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function delFavoriteMovie(id) {
    mainApi.delCard(id)
    .then((res) => {
      const newFavMovieArray = favoriteMovies.filter(({_id}) => {
        return( id !== _id);
      });
      setFavoriteMovies(newFavMovieArray);
      localStorage.setItem('favoriteMovies', JSON.stringify(newFavMovieArray));
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const location = useLocation();
  const movies = location.pathname === '/movies' ? renderedMoreMovies.slice(0, countView) : filterMovie(searchText, isShortsMovies, favoriteMovies);

  if(allMovies.length === 0) {
    return <Preloader/>
  }

  return(
    <section className='movies-cardlist'>
      <div className='movies-cardlist__container'>
        {movies.length === 0 ? (
          <p className="movies-cardlis__not-found-movie">Ничего не найдено</p>
        ) : (
          <div className='movies-cardlist__cards'>
          {movies.map((movie, index) => {
            const data = favoriteMovies.find(({movieId}) => (movieId === movie.id))
            return (<MoviesCard key={index} movie={movie} isFavoriteMovie={isFavoriteMovie} addFavoriteMovie={addFavoriteMovie} data={data} delFavoriteMovie={delFavoriteMovie}/>);
          })}
        </div>
        )}
        
        <div className='movies-cardlist__more'>
        {((location.pathname === '/movies') && (movies.length !== renderedMoreMovies.length )) &&
          <button className={`movies-cardlist__more-button ${movies.length === 0 ? 'movies-cardlist__more-button_disabled' : ''}`} type='button' onClick={moreMoviesHandler}>Ещё</button>
        }
        </div>
      </div>
    </section>
  )
}
