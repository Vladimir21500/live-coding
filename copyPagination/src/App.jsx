import React, { Component } from 'react';
import UsersList from './UsersList';
import Pagination from './Pagination';
import User from './User';

/* 
1. show login by default
2. after login Click - show spinner
3. show logout
4. after logout click - show login
*/

const App = () => {
  return (
    <>
      <div>test</div>
      <Pagination />
      <UsersList />
    </>
  );
};

export default App;
