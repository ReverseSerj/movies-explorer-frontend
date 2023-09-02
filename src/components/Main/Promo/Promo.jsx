import React from 'react';
import './Promo.css'
import logo from '../../../images/promo-logo.svg';

export default function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__header'>Учебный проект студента факультета Веб-разработки.</h1>
        <img className='promo__logo' src={logo} alt='логотип Пракикума'></img>
      </div>
    </section>
  )
}