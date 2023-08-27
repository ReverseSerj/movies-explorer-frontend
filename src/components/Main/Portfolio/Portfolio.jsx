import React from "react";
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__link-list'>
          <a className='portfolio__link' href='https://github.com/ReverseSerj/how-to-learn' rel='noreferrer' target='_blank'>Статичный сайт<span className='portfolio__link-pointer'>↗</span></a>
        </li>
        <li className='portfolio__link-list'>
          <a className='portfolio__link' href='https://github.com/ReverseSerj/russian-travel' rel='noreferrer' target='_blank'>Адаптивный сайт<span className='portfolio__link-pointer'>↗</span></a>
        </li>
        <li className='portfolio__link-list'>
          <a className='portfolio__link' href='https://github.com/ReverseSerj/react-mesto-api-full-gha' rel='noreferrer' target='_blank'>Одностраничное приложение<span className='portfolio__link-pointer'>↗</span></a>
        </li>
      </ul>
    </section>
  )
}