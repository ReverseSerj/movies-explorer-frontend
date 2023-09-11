import React from "react";
import MainHeader from "../MainHeader/MainHeader";
import './Techs.css';

export default function Techs() {
  return (
    <section className='tech'>
      <div className='tech__container'>
        <MainHeader text='Технологии'/>
        <div className='tech__description'>
          <h3 className='tech__title'>7 технологий</h3>
          <p className='tech__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className='tech__stack'>
            <li className='tech__item'>HTML</li>
            <li className='tech__item'>CSS</li>
            <li className='tech__item'>JS</li>
            <li className='tech__item'>React</li>
            <li className='tech__item'>Git</li>
            <li className='tech__item'>Express.js</li>
            <li className='tech__item'>mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  )
}