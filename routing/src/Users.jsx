import React from 'react';
import User from './User.jsx';
import { Switch, Route, Link } from 'react-router-dom';

const Users = ({ match }) => {
  return (
    <div className='page__content'>
      <h1>Users</h1>
      <ul className='navigation'>
        <li className='navigation__item'>
          <Link to='/users/Vladimir21500'>Github</Link>
        </li>
        <li className='navigation__item'>
          <Link to='/users/facebook'>Facebook</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={`${match.url}/:userId`} component={User} />
        <Route path={`${match.url}`}>
          <span>Select a user please</span>
        </Route>
      </Switch>
    </div>
  );
};

export default Users;
