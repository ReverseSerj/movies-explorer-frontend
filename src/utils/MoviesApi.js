class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`)
  };

  getMovies() {
    return fetch(this._baseUrl , {method:'GET', header: {'Content-Type': 'application/json'}})
     .then((res) => this._getResponse(res));
  }
}

export const moviesApi =  new MoviesApi({baseUrl:'https://api.nomoreparties.co/beatfilm-movies'})