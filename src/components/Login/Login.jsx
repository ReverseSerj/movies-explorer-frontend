import React from "react";
import Logo from '../Logo/Logo';
import AuthForm from "../AuthForm/AuthForm";
import './Login.css';

export default function Login() {
  return (
    <main>
      <section className="login">
        <div className="login__container">
          <Logo/>
          <AuthForm
            inputUserName={false}
            title={'Рады видеть!'}
            submitButton={'Войти'}
            question={'Ещё не зарегистрированы?'}
            link={'/signup'}
            linkTitle={'Регистрация'}
          />
        </div>
      </section>
    </main>
  )
}