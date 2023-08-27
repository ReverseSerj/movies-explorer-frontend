import React from "react";
import './Navigation.css';
import { Link } from 'react-router-dom';

export default function Navigation({onClose, isOpen}) {
 return (  
  <div  className={(`navigation ${isOpen ? 'navigation_active' : ''}`)}>
    <div className={(`navigation__container ${isOpen ? 'navigation__container_opened' : ''}`)}>
      <button className="navigation__close-btn" onClick={onClose}/>
      <nav className="navigation__nav">
        <Link to='/' className="navigation__link">Главная</Link>
        <Link to='/movies' className="navigation__link navigation__link_active">Фильмы</Link>
        <Link to='/saved-movies' className="navigation__link">Сохранённые фильмы</Link>
      </nav>
      <nav className="navigation__account-container">
        <Link to='/profile' className="navigation__account-btn">Аккаунт</Link>
        <a className="navigation__account-icon" href='/profile'></a>
      </nav>
    </div>
  </div>
 )
}