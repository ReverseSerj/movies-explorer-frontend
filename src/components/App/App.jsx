import React from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Register from '../Register/Register';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {

  return (
    <div className='app__content'>
        <Routes>
          <Route exact path='/signup' element={<Register/>}/>
          <Route exact path='/signin' element={<Login/>}/>
          <Route exact path='/' 
            element={<>
            <Header isLoggedIn={false}/>
            <Main/>
            <Footer/>
          </>}/>
          <Route exact path='/movies'
            element={<>
              <Header isLoggedIn={true}/>
              <Movies/>
              <Footer/>
          </>}/>
          <Route exact path='/saved-movies' 
            element={<> 
            <Header isLoggedIn={true}/> 
            <SavedMovies/>
            <Footer/> 
          </>}/>
          <Route exact path='/profile'
            element={<>
              <Header isLoggedIn={true}/>
              <Profile/>
          </>}/>
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
    </div>
  );
}

export default App;
