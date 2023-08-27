import React from "react";
import './MoviesCard.css';

export default function MoviesCard({image, nameRU, duration, isFavoriteMovie}) {

  const [isFavorite, setIsFavorite] = React.useState(false);
  const favoriteButton = (`movie-card__fav-add ${isFavorite ? 'movie-card__fav-add_active' : ''}`)
  
  function handleFavAdd() {
    setIsFavorite(!isFavorite)
  }

  return (
    <article className='movie-card'>
      <img className='movie-card__poster' src={image} alt='Постер фильма'/>
      <div className='movie-card__info'>
        <h2 className='movie-card__title'>{nameRU}</h2>
        {isFavoriteMovie ? ( 
          <button className='movie-card__delete-btn'/>
        ) : ( 
          <button className={favoriteButton} onClick={handleFavAdd}/>
        )}
      </div>
      <p className='movie-card__duration'>{duration}</p>
    </article>
  )
}