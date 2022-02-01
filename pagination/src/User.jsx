/* 
input: name, age
output: jsx
*/

import React from 'react';

const User = ({ user }) => {
  return (
    <li class='user'>
      <span class='user__name'>{user.name}</span>
      <span class='user__age'>{user.age}</span>
    </li>
  );
};

export default User;
