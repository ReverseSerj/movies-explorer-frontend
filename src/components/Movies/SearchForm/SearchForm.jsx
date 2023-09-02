import React from "react";
import './SearchForm.css';
import img from '../../../images/find.svg'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

export default function SeachForm() {
  return (
    <div className='search-form'>
      <div className='search-form__container'>
        <form className='search-form__form'>
          <input className='search-form__input' placeholder='Фильм' />
          <button className='search-form__button' type='submit'>
            <img className='serarch-form__find' src={img} alt='Найти'/>
          </button>
        </form>
        <FilterCheckbox/>
      </div>
    </div>
  )
}