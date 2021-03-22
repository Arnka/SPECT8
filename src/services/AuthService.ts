import axios from 'axios';

const API_URL = 'https://ccdb.dev.vaudience.net/auth/';

class AuthService {

  // POST {username, password} & JWT to Local Storage
  login(email: string, password: string) {
    return axios
      .post(API_URL + 'login', {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  // remove JWT from Local Storage
  logout() {
    localStorage.removeItem('user');
  }

  // POST {email, password}
  register(email: string, password: string) {
    return axios.post(API_URL + 'signup', {
      email,
      password
    });
  }
}

export default new AuthService();