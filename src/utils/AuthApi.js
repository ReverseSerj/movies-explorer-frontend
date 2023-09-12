class AuthApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headerJSON = {'Content-Type': 'application/json'}
  }

  queryHandler(url, method = 'GET', obj) {
    let fetchConfig = {
      method: method,
      headers: this._headerJSON
    }

    if(obj) {
      fetchConfig = {
        ...fetchConfig,
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

  registerUser(name, email, password) {
    return this.queryHandler('signup', 'POST', {name: name, email: email, password: password});
  }

  authUser(email, password) {
    return this.queryHandler('signin', 'POST', {email: email, password: password});
  }
}

export const authApi = new AuthApi({baseUrl:'https://api.serj.movie-explorer.nomoreparties.co'})