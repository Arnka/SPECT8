export default function authHeader() {

    // checks Local Storage for user item
    const storedUser = localStorage.getItem('user');
    let user = JSON.parse(storedUser ? storedUser : "");
  
    // if there is a logged in user with accessToken, return HTTP Authorization header, if it is not return an empty object
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }