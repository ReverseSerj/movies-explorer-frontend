import React from "react";
import './AuthForm.css';
import { Link } from 'react-router-dom';

export default function AuthForm({title, question ,inputUserName, submitButton, link, linkTitle}) {
  return(
    <form className="auth-form" noValidate>
      <div className="auth-form__container">
        <h2 className="auth-form__title">{title}</h2>
        {inputUserName &&
          <label className="auth-form__label-input">Имя
            <input 
              className="auth-form__input"
              type='text'
              minLength='2'
              maxLength='30'
              required
            />
            <span className='auth-form__input-err'>Что-то пошло не так...</span>
          </label>
        }
        <label className="auth-form__label-input">E-mail
          <input
            className="auth-form__input"
            type='email'
            required
          />
          <span className='auth-form__input-err'>Что-то пошло не так...</span>
        </label>
        <label className="auth-form__label-input">Пароль
          <input
            className="auth-form__input"
            type='password'
            required
          />
          <span className='auth-form__input-err auth-form__input-err_active'>Что-то пошло не так...</span>
        </label>
      </div>
      <div className="auth-form__container">
        <button className='auth-form__button' type='submit'>{submitButton}</button>
        <p className='auth-form__question'>{question} <Link className='auth-form__link' to={link}>{linkTitle}</Link></p>
      </div>
    </form>
  )
}