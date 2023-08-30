import React from "react";
import './Navigation.css';
import { NavLink, Link } from 'react-router-dom';

export default function Navigation({onClose, isOpen}) {
 return (  
  <div  className={(`navigation ${isOpen ? 'navigation_active' : ''}`)}>
    <div className={(`navigation__container ${isOpen ? 'navigation__container_opened' : ''}`)}>
      <button className="navigation__close-btn" onClick={onClose}/>
      <nav className="navigation__nav">
        <NavLink to='/' className='navigation__link'>Главная</NavLink>
        <NavLink to='/movies' className='navigation__link'>Фильмы</NavLink>
        <NavLink to='/saved-movies' className='navigation__link'>Сохранённые фильмы</NavLink>
      </nav>
      <nav className="navigation__account-container">
        <Link to='/profile' className="navigation__account-btn">Аккаунт</Link>
        <a className="navigation__account-icon" href='/profile'></a>
      </nav>
    </div>
  </div>
 )
}