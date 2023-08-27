import React from "react";
import './NavTab.css';
import { Link } from 'react-scroll';

export default function NavTab() {
  return (
    <div className='nav-tab'>
      <nav className='nav-tab__container'>
        <Link to='about-project' className='nav-tab__link' smooth={true} duration={600}>О проекте</Link>
        <Link to='tech' className='nav-tab__link' smooth={true} duration={600}>Технологии</Link>
        <Link to='about-me' className='nav-tab__link' smooth={true} duration={600}>Студент</Link>
      </nav>
    </div>
  )
}