import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import CurrentUserContext from '../../context/CurrentUserContext';
import Preloader from "../Movies/Preloader/Preloader";
import './ProtectedRoute.css';

const ProtectedRoute = ({isUserReady}) => {
  const currentUser = React.useContext(CurrentUserContext);
  if(!isUserReady) {
    return (
      <main className="container">
        <Preloader/>
      </main>
    )
  }
  return (
    (Object.keys(currentUser).length > 0) ? <Outlet /> : <Navigate to="/signin" replace/>
  )
}

export default ProtectedRoute;