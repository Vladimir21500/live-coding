import React from 'react';
import User from './User.jsx';
import { Switch, Route, Link } from 'react-router-dom';

class Users extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <>
        <h1>Users</h1>
        <ul className='navigation'>
          <li className='navigation__item'>
            <Link to='/users/github'>Github</Link>
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
      </>
    );
  }
}

export default Users;
