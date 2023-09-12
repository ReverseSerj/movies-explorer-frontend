import React, { useRef, useState } from "react";
import './SearchForm.css';
import img from '../../../images/find.svg'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router-dom';

export default function SeachForm({onSearch, setIsShortsMovies, isShortsMovies, searchText}) {

  const location = useLocation();
  const storageVariable = location.pathname === '/movies' ? 'searchTextMovies' : 'searchTextsMovies';
  
  const inputRef = useRef(null);
  const [error, setError] = useState('');

 function handleSubmit(e) {
  e.preventDefault();
  onSearch(inputRef.current.value);
  localStorage.setItem(storageVariable, inputRef.current.value);
  setError(inputRef.current.value === '' ? 'Введите название фильма' : '')
 }



  return (
    <div className='search-form'>
      <div className='search-form__container'>
        <form className='search-form__form' onSubmit={handleSubmit}>
          <input className='search-form__input' placeholder='Фильм' ref={inputRef} defaultValue={searchText} type='text' name='searchMovie' autoComplete="off"/>
          <button className='search-form__button' type='submit'>
            <img className='serarch-form__find' src={img} alt='Найти'/>
          </button>
        </form>
        <span className="search-form__error">{error}</span>
        <FilterCheckbox setIsShortsMovies={setIsShortsMovies} isShortsMovies={isShortsMovies}/>
      </div>
    </div>
  )
}