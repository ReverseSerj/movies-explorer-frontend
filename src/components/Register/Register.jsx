import React from "react";
import Logo from "../Logo/Logo";
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';

export default function Register() {
  return (
    <section className='register'>
      <div className='register__container'>
        <Logo/>
        <AuthForm 
          inputUserName={true} 
          title={'Добро пожаловать!'} 
          submitButton={'Зарегистрироваться'} 
          question={'Уже зарегистрированы?'}
          link={'/signin'}
          linkTitle={'Войти'}
        />
      </div>
    </section>
  )
}