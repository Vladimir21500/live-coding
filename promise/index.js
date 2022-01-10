/* 
input: obj
out: undefined
*/

const saveUser = (userData) => {
  console.log(JSON.stringify(userData));
  /* 
    input:string, obj
    output: promise
    */
  const httpPromise = fetch(
    'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }
  );

  // input: callback
  // ----- input: promise result
  // ----- output: any
  // output: promise
  httpPromise
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      alert(JSON.stringify(res));
    });
};

const user = {
  email: 'test@gmail.com',
  userName: 'user111',
  password: 'dfbdgb',
};

saveUser(user);
