import React from "react";
import './AuthForm.css';
import { Link } from 'react-router-dom';
import { useValidationForm } from "../hooks/useValidationForm";

export default function AuthForm({title, question ,inputUserName, submitButton, link, linkTitle}) {
  
  const form = useValidationForm();

  return(
    <form className="auth-form" noValidate>
      <div className="auth-form__container">
        <h2 className="auth-form__title">{title}</h2>
        {inputUserName &&
          <label className="auth-form__label-input">Имя
            <input 
              className={(`auth-form__input ${ form.errors.name ? 'auth-form__input_novalid' : ''}`)}
              type='text'
              minLength='2'
              maxLength='30'
              name='name'
              onChange={form.handleChange}
              value={form.value}
              pattern='^[a-zA-Zа-яЁёА-Я\s\-]+$'
              required
            />
            <span className={(`auth-form__input-err ${form.errors.name ? 'auth-form__input-err_active' : ''}`)}>{form.errors.name}</span>
          </label>
        }
        <label className="auth-form__label-input">E-mail
          <input
            className={(`auth-form__input ${ form.errors.email ? 'auth-form__input_novalid' : ''}`)}
            type='email'
            name='email'
            onChange={form.handleChange}
            value={form.value}
            pattern='^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
            required
          />
          <span className={(`auth-form__input-err ${form.errors.email ? 'auth-form__input-err_active' : ''}`)}>{form.errors.email}</span>
        </label>
        <label className="auth-form__label-input">Пароль
          <input
            className={(`auth-form__input ${ form.errors.password ? 'auth-form__input_novalid' : ''}`)}
            type='password'
            name='password'
            minLength='6'
            onChange={form.handleChange}
            value={form.value}
            required
          />
          <span className={(`auth-form__input-err ${form.errors.password ? 'auth-form__input-err_active' : ''}`)}>{form.errors.password}</span>
        </label>
      </div>
      <div className="auth-form__container">
        <button className='auth-form__button' type='submit' disabled={!form.isValid}>{submitButton}</button>
        <p className='auth-form__question'>{question} <Link className='auth-form__link' to={link}>{linkTitle}</Link></p>
      </div>
    </form>
  )
}