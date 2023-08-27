import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { initialMovies,  favoriteMovies} from '../../../utils/constants';
import { useLocation } from "react-router-dom";
 
export default function MoviesCardList({isFavoriteMovie}) {
    
  const location = useLocation();
  const movies = location.pathname === '/movies' ? initialMovies : favoriteMovies;

  function getCardsStack(cards) {
    if(window.innerWidth >= 1280) {
      return cards.slice(0, 13);
    } else if (window.innerWidth < 1280 && window.innerWidth > 761) {
      return cards.slice(0, 8);
    } else {
      return cards.slice(0, 5);
    }
  }

  return(
    <section className='movies-cardlist'>
      <div className='movies-cardlist__container'>
        <div className='movies-cardlist__cards'>
          {getCardsStack(movies).map((movie, id) => (
            <MoviesCard key={id} {...movie} isFavoriteMovie={isFavoriteMovie}/>
          ))}
        </div>
        <div className='movies-cardlist__more'>
        {location.pathname === '/movies' &&
          <button className='movies-cardlist__more-button' type='button'>Ещё</button>
        }
        </div>
      </div>
    </section>
  )
}
