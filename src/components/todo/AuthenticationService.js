class AuthenticationService {
  registerSuccesfulLogin(username, password) {
    console.log('registersSuccesfulLogin');
    sessionStorage.setItem('authenticatedUser', username);
  }
}

export default new AuthenticationService();
