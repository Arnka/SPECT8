import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://ccdb.dev.vaudience.net/';

//Service for accessing data
class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
}

export default new UserService();