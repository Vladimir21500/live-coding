import React from 'react';
import User from './User';
/* 
input: users[]
output: jsx
*/

const UsersList = ({ users }) => {
  return (
    <ul class='users'>
      {users.map((user) => {
        return <User name={user.name} age={user.age} />;
      })}
    </ul>
  );
};

export default UsersList;
