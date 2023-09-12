import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import CurrentUserContext from '../../context/CurrentUserContext';
import Preloader from "../Movies/Preloader/Preloader";
import './ProtectedRoute.css';

const ProtectedRoute = ({isUserReady, isAuth}) => {
  const currentUser = React.useContext(CurrentUserContext);
  if(!isUserReady) {
    return (
      <main className="container">
        <Preloader/>
      </main>
    )
  }

  if(!isAuth && (Object.keys(currentUser).length > 0)) {
    return (<Navigate to="/" replace/>);
  }

  if(isAuth && (Object.keys(currentUser).length === 0)) {
    return (<Navigate to="/signin" replace/>);
  }

  return (
    <Outlet/>
  )
}

export default ProtectedRoute;