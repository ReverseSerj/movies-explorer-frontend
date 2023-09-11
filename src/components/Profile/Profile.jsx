import React, { useEffect } from "react";
import './Profile.css';
import  CurrentUserContext from '../../context/CurrentUserContext';
import { useValidationForm } from "../hooks/useValidationForm";

export default function Profile({onSignOut, onUpdateUser, error, updtMessege}) {

  const currentUser = React.useContext(CurrentUserContext);
  const [editButton, setEditButton] = React.useState(false);
  const {values, errors, isValid, setValues, handleChange, setIsValid} = useValidationForm();
  const [editedInput, setEditedInput] = React.useState(false);

  useEffect(() => {
    setValues({...currentUser});
    setIsValid(true);
  }, [currentUser, setValues]);

  useEffect(() => {
    if((currentUser.name === values.name) && (currentUser.email === values.email)) {
      setEditedInput(false);
    } else {
      setEditedInput(true);
    }
  }, [currentUser, values]);

  function handleEditButton() {
    setEditButton(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email
    });
    setEditButton(false);
  } 
 
  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <form className="profile__form" onSubmit={handleSubmit} noValidate>
            <label className="profile__label-input">Имя
              <input
                name='name'
                className={(`profile__input ${errors.name ? 'profile__input_err' : ''}`)}
                value={values.name || ''}
                type='text'
                minLength='2'
                maxLength='30'
                pattern='^[a-zA-Zа-яЁёА-Я\s\-]+$'
                required
                placeholder="Введите Имя"
                disabled={!editButton}
                onChange={handleChange}
              />
            </label>
            <label className="profile__label-input">E-mail
              <input
                name='email'
                className={(`profile__input ${errors.email ? 'profile__input_err' : ''}`)}
                value={values.email || ''}
                type='email'
                pattern='^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$'
                required
                placeholder="Введите Email"
                disabled={!editButton}
                onChange={handleChange}
              />
            </label>
            <div className="profile__container">
              <div className={`profile__buttons-kit ${editButton ? 'profile__buttons-invisible' : ''}`}>
                <span className="profile__success">{updtMessege}</span>
                <button className="profile__edit-btn" type='button' onClick={handleEditButton}>Редактировать</button>
                <button className="profile__logout-btn" onClick={onSignOut}>Выйти из аккаунта</button>
              </div>
              <div className={`profile__buttons-kit ${!editButton ? 'profile__buttons-invisible' : ''}`}>
                <span className='profile__input-err'>{error}</span>
                <button className="profile__save-btn" disabled={!(isValid && editedInput)} type='submit'>Сохранить</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}