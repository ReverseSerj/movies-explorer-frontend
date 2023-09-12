import React from "react";
import './MoviesCard.css';

export default function MoviesCard({isFavoriteMovie, addFavoriteMovie, delFavoriteMovie, movie, data}) {
  const {image, nameRU, duration, trailerLink} = movie;
  const favoriteButton = (`movie-card__fav-add ${data ? 'movie-card__fav-add_active' : ''}`)
  const imageUrl = (typeof(image) === "string") ? image : `https://api.nomoreparties.co${image.url}`; 
  
  function handleFavAdd() {
    if(data) {
      delFavoriteMovie(data._id);
    } else {
      addFavoriteMovie(movie);
    }
  }

  function handleFavDel() {
    delFavoriteMovie(movie._id);
  }

  return (
    <article className='movie-card'>
      <a className="movie-card__trailer-link" href={trailerLink}><img className='movie-card__poster'  src={imageUrl} alt='Постер фильма'/></a>
      <div className='movie-card__info'>
        <h2 className='movie-card__title'>{nameRU}</h2>
        {isFavoriteMovie ? ( 
          <button className='movie-card__delete-btn' onClick={handleFavDel}/>
        ) : ( 
          <button className={favoriteButton} onClick={handleFavAdd}/>
        )}
      </div>
      <p className='movie-card__duration'>{Math.floor(duration /60)}ч {duration % 60}м</p>
    </article>
  )
}