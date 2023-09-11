import React from "react";
import './FilterCheckbox.css';

export default function FilterCheckbox({setIsShortsMovies, isShortsMovies}) {

  function checkboxHandler() {
    if(isShortsMovies){
      localStorage.setItem('isShortMovie', '0');
    } else {
      localStorage.setItem('isShortMovie', '1');
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