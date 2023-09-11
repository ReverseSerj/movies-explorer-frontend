import React from "react";
import './AuthForm.css';
import { Link } from 'react-router-dom';
import { useValidationForm } from "../hooks/useValidationForm";

export default function AuthForm(props) {
  
  const form = useValidationForm();

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(form.values);
  } 

  return(
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      <div className="auth-form__container">
        <h2 className="auth-form__title">{props.title}</h2>
        {props.inputUserName &&
          <label className="auth-form__label-input">Имя
            <input 
              className={(`auth-form__input ${ form.errors.name ? 'auth-form__input_novalid' : ''}`)}
              type='text'
              minLength='2'
              maxLength='30'
              name='name'
              onChange={form.handleChange}
              value={form.value}
              autoComplete="off"
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
            autoComplete="off"
            pattern='^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$'
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
            autoComplete='new-password'
            required
          />
          <span className={(`auth-form__input-err ${form.errors.password ? 'auth-form__input-err_active' : ''}`)}>{form.errors.password}</span>
        </label>
      </div>
      <div className="auth-form__container">
        <span className="auth-form__submit-err">{props.error}</span>
        <button className='auth-form__button' type='submit' disabled={!form.isValid}>{props.submitButton}</button>
        <p className='auth-form__question'>{props.question} <Link className='auth-form__link' to={props.link}>{props.linkTitle}</Link></p>
      </div>
    </form>
  )
}