import React from "react";
import MainHeader from "../MainHeader/MainHeader";
import './AboutMe.css';
import photo from '../../../images/about-me-photo.jpg'
import Portfolio from '../Portfolio/Portfolio';

export default function AboutMe() {
  return (
    <section className='about-me'>
      <div className='about-me__container'>
        <MainHeader text='Студент'/>
        <div className='about-me__wrapper'>
          <div className='about-me__info'>
            <h3 className='about-me__name'>Cергей</h3>
            <p className='about-me__subtitle'>Фронтенд-разработчик, 24 года</p>
            <p className='about-me__text'>Родился и живу в Санкт-Петербурге, закончил направление "Многоканальные телекоммуникационные сети" в колледже телекоммуникации и пошёл работать на завод металлопроката. В настоящее время, учусь в Яндекс Практикуме. бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла.</p>
            <a className='about-me__github' href='https://github.com/ReverseSerj' target='_blank' rel='noreferrer'>Github</a>
          </div>
          <img className='about-me__photo' src={photo} alt='Фотография'/>
        </div>
        <Portfolio/>
      </div>
    </section>
  )
}