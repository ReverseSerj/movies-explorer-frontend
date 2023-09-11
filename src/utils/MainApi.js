class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._token = options.token;
    this._header =  {authorization: this._token};
    this._headerJSON = {
      authorization: this._token,
      'Content-Type': 'application/json'
    }
  }

  queryHandler(url, method = 'GET', obj) {
    let fetchConfig = {
      method: method,
      headers: this._header
    }

    if(obj) {
      fetchConfig = {
        ...fetchConfig,
        headers: this._headerJSON,
        body: JSON.stringify(obj)
      }
    }

    return (fetch(`${this._baseUrl}/${url}`, fetchConfig)
      .then((res) => {
        if(res.ok) {
          return res.json()
        }
        return Promise.reject(res.status);
      })
    );
  }

  getMovies() {
    return this.queryHandler('movies');
  }

  getProfileInfo() {
    return this.queryHandler('users/me');
  }

  patchEditPorfile(obj) {
    return this.queryHandler('users/me', 'PATCH', obj);
  }

  saveMovie(movie) {
    return this.queryHandler('movies', 'POST', {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN
    });
  }

  delCard(movieId) {
    return this.queryHandler(`movies/${movieId}`, 'DELETE');
  }


  setToken(token) {
    this._token = `Bearer ${token}`;
    this._header =  {authorization: this._token};
    this._headerJSON = {
      authorization: this._token,
      'Content-Type': 'application/json'
    }
  }
}

export const mainApi = new MainApi({baseUrl:'https://api.serj.movie-explorer.nomoreparties.co'})