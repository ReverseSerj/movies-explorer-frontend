import React, { useState } from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import { Link, useLocation } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";

export default function Header({isLoggedIn}) {

  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const location = useLocation();

  function burgerOpen() {
    setIsBurgerOpened(true)
  }

  function burgerClose() {
    setIsBurgerOpened(false)
  }

  return (
    <>
      {isLoggedIn ? (
        <header className={`header ${location.pathname === '/'? 'header_main' : ''}`}>
          <Logo/>
          <nav className="header__movies-container">
            <Link to='/movies' className="header__movies-btn">Фильмы</Link>
            <Link to='/saved-movies' className="header__movies-btn">Сохранённые фильмы</Link>
          </nav>
          <nav className="header__account-container">
            <Link to='/profile' className="header__account-btn">Aккаунт</Link>
            <a className="header__account-icon" href="/profile"/>
          </nav>
          <button className="header__btn-nav" onClick={burgerOpen}/>
          <Navigation isOpen={isBurgerOpened} onClose={burgerClose}/>
        </header>
      ) : (
        <header className='header header_main'>
          <Logo/>
          <nav className="header__auth-container">
            <Link to ='/signup' className="header__auth-btn">Регистрация</Link>
            <Link to ='/signin' className="header__auth-btn">Войти</Link>
          </nav>
        </header>
      )}
    </>
  )
}