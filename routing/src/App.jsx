import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Users from './Users.jsx';

const App = () => {
  return (
    <Router>
      <div className='page'>
        <ul className='navigation'>
          <li className='navigation__item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='navigation__item'>
            <Link to='/users'>Users</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/users' component={Users} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
