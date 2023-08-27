import React from "react";
import './FilterCheckbox.css';

export default function FilterCheckbox() {
  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__container'>
        <input type='checkbox' className='filter-checkbox__input'/>
        <span className='filter-checkbox__slider'></span>
      </label>
      <p className='filter-checkbox__text'>Короткометражки</p>
    </div> 
  )
}