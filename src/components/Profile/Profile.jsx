import React from "react";
import './Profile.css';
import { user } from '../../utils/constants';
export default function Profile() {

  const [name, setName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);
  const [editButton, setEditButton] = React.useState(false);

  function handleEditButton() {
    setEditButton(true);
  }

  function handleSaveButton(e) {
    e.preventDefault();
    setEditButton(false)
  }

  function handleEditName(e) {
    setName(e.target.value);
  }

  function handleEditEmail(e) {
    setEmail(e.target.value)
  }

  return (
      <section className="profile">
        <div className="profile__container">
        <h2 className="profile__title">Привет, {user.name}!</h2>
          <label className="profile__lable-input">Имя
            <input
              className="profile__input"
              value={name}
              type='text'
              minLength='2'
              maxLength='30'
              onChange={handleEditName}
              required
            />
          </label>
          <label className="profile__lable-input">E-mail
            <input
              className="profile__input"
              value={email}
              type='email'
              onChange={handleEditEmail}
              required
            />
          </label>
          <div className="profile__container">
            <div className={`profile__buttons-kit ${editButton ? 'profile__buttons-invisible' : ''}`}>
              <button className="profile__edit-btn" onClick={handleEditButton}>Редактировать</button>
              <button className="profile__logout-btn">Выйти из аккаунта</button>
            </div>
            <div className={`profile__buttons-kit ${!editButton ? 'profile__buttons-invisible' : ''}`}>
              <span className="prfile__input-err">При обновлении профиля произошла ошибка.</span>
              <button className="profile__save-btn" onClick={handleSaveButton}>Сохранить</button>
            </div>
          </div>
        </div>
      </section>
  )
}