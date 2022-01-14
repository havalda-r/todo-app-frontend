class AuthenticationService {
  registerSuccesfulLogin(username, password) {
    console.log('registersSuccesfulLogin');
    sessionStorage.setItem('authenticatedUser', username);
  }

  logout() {
    console.log('logout');
    sessionStorage.removeItem('authenticatedUser');
  }
}

export default new AuthenticationService();
