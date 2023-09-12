import React from "react";
import './FilterCheckbox.css';
import { useLocation } from 'react-router-dom';

export default function FilterCheckbox({setIsShortsMovies, isShortsMovies}) {

  const location = useLocation();
  const storageVariable = location.pathname === '/movies' ? 'isShortMovieMovies' : 'isShortMoviesMovies';

  function checkboxHandler() {
    if(isShortsMovies){
      localStorage.setItem(storageVariable, '0');
    } else {
      localStorage.setItem(storageVariable, '1');
    }
    setIsShortsMovies(!isShortsMovies);
  }

  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__container'>
        <input type='checkbox' className='filter-checkbox__input' onChange={checkboxHandler}  checked={isShortsMovies}/>
        <span className='filter-checkbox__slider'></span>
      </label>
      <p className='filter-checkbox__text'>Короткометражки</p>
    </div> 
  )
}