import React, { Component } from 'react';
import Spinner from './Spinner.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

/* 
1. show login by default
2. after login Click - show spinner
3. show logout
4. after logout click - show login
*/

class Auth extends Component {
  // input: object
  // output: undefined
  state = {
    isLoggedIn: false,
    isLoading: false,
  };

  handleLoginClick = () => {
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      this.setState({
        isLoading: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn, isLoading } = this.state;

    if (isLoading) return <Spinner />;

    if (isLoggedIn) return <Logout onLogout={this.handleLogoutClick} />;

    return <Login onLogin={this.handleLoginClick} />;
  }
}

export default Auth;
