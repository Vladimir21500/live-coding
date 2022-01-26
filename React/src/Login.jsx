import React from 'react';

// input
// func

// output: jsx
const Login = (props) => {
  return (
    <button className='login btn' onClick={props.onLogin}>
      Login
    </button>
  );
};

export default Login;
