import React from "react";
import MainHeader from "../MainHeader/MainHeader";
import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className='about-project'>
      <div className='about-project__container'>
        <MainHeader text='О проекте'/>
        <div className='about-project__info'>
          <div className="about-project__info-container">
            <h3 className='about-project__title'>Дипломный проект включал 5 этапов</h3>
            <p className='about-project__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__info-container">
            <h3 className='about-project__title'>На выполнение диплома ушло 5 недель</h3>
            <p className='about-project__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='about-project__timelapse'>
          <div className='about-project__backend'>1 неделя</div>
          <div className='about-project__frontend'>4 недели</div>
          <p className='about-project__subtitle-bakend'>Back-end</p>
          <p className='about-project__subtitle-frontend'>Front-end</p>
        </div>
      </div>
    </section>
  )
}