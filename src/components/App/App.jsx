import React, { useState, useEffect } from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Register from '../Register/Register';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { authApi } from '../../utils/AuthApi';
import { mainApi } from '../../utils/MainApi';
import CurrentUserContext from '../../context/CurrentUserContext';

function App() {

  const [isUserReady, setIsUserReady] = useState(false);
  const [isPreLoggedIn, setIsPreLoggedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [conflictErr, setConflictErr] = useState('');
  const [unauthErr, setUnauthErr] = useState('');
  const [successUpdate, setSuccessUpdate] = useState('');

  const navigate = useNavigate();

  function handleRegisterUser({name, email, password}) {
    authApi.registerUser(name, email, password)
      .then((data) =>{
        return(handleAuthUser({email: email, password: password}));
      })
      .catch((err) => {
        err === 409 ? setConflictErr('Пользователь с такой почтой уже существует') : setConflictErr('При регистрации пользователя произошла ошибка');
      })
  }

  function handleAuthUser({email, password}) {
    authApi.authUser(email, password) 
      .then((data) => {
        if(data.token) {
          localStorage.setItem('jwt', data.token);
          mainApi.setToken(data.token);

          setIsUserReady(false);
          setIsPreLoggedIn(true);
          
          navigate('/movies');
        } else {
          console.log('получен не верный объект от сервера');
        }
      })
      .catch((err) => {
        err === 401 ? setUnauthErr('Неверный логин или пароль') : setUnauthErr('При авторизации пользователя произошла ошибка');
      })
  }

  function signOut() {
    localStorage.clear();
    setIsLoggedIn(false);
    setIsPreLoggedIn(false);
    setCurrentUser({});
    navigate('/');
  }

  function handleUpdateUser(data) {
    console.log(data)
    mainApi.patchEditPorfile(data)
      .then((newData) => {
        setCurrentUser(newData);
        setConflictErr('')
        setSuccessUpdate('Данные изменены');
        setTimeout(() => {
          setSuccessUpdate('');
        }, 2500)
      })
      .catch((err) => {
        err === 409 ? setConflictErr('Пользователь с такой почтой уже существует') : setConflictErr('При обновлении профиля произошла ошибка');
      })
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.setToken(jwt);
      setIsPreLoggedIn(true);
    } else {
      setIsUserReady(true);
    }
  }, []);

  useEffect(() => {
    if (isPreLoggedIn) {
      mainApi
        .getProfileInfo()
        .then((userInfo) => {
          setCurrentUser(userInfo);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          setIsPreLoggedIn(false);
        })
        .finally(() => {
          setIsUserReady(true);
        })
    }
  }, [isPreLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app__content'>
          <Routes>
            <Route element={<ProtectedRoute isUserReady={isUserReady} isAuth={false}/>}>
              <Route exact path='/signup' element={<Register onRegister={handleRegisterUser} error={conflictErr} />}/>
              <Route exact path='/signin' element={<Login onLogin={handleAuthUser} error={unauthErr}/>}/>
            </Route>
            <Route exact path='/' 
              element={<>
              <Header isLoggedIn={isLoggedIn}/>
              <Main/>
              <Footer/>
            </>}/>
            <Route element={<ProtectedRoute isUserReady={isUserReady} isAuth={true}/>}>
              <Route exact path='/movies'
                element={<>
                  <Header isLoggedIn={isLoggedIn}/>
                  <Movies/>
                  <Footer/>
              </>}/>
              <Route exact path='/saved-movies' 
                element={<> 
                <Header isLoggedIn={isLoggedIn}/> 
                <SavedMovies/>
                <Footer/> 
              </>}/>
              <Route exact path='/profile'
                element={<>
                  <Header isLoggedIn={isLoggedIn}/>
                  <Profile onUpdateUser={handleUpdateUser} error={conflictErr} updtMessege={successUpdate} onSignOut={signOut}/>
            </>}/>
            </Route>
            <Route path='*' element={<PageNotFound/>} />
          </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
