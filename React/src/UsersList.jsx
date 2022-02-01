import React from 'react';
import User from './User.jsx';

/* 
input: users[]
output: jsx
*/

const UsersList = ({ users }) => {
  return (
    <ul className='users'>
      {users.map((user) => {
        return <User key={user.id} name={user.name} age={user.age} />;
      })}
    </ul>
  );
};

export default UsersList;
