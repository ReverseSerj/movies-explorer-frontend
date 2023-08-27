import React from "react";
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2023</p>
        <div className="footer__links">
          <a className="footer__link" href='https://practicum.yandex.ru' rel='noreferrer' target='_blank'>Яндекс.Практикум</a>
          <a className="footer__link" href='https://github.com' rel='noreferrer' target='_blank'>Github</a>
        </div>
      </div>
    </footer>
  )
}