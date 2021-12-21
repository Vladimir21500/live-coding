'use strict';

function printMessage(country, city) {
  console.log(this);

  console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}

const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};

// input: obj
// output: func

// optin1
const bindedFunc1 = printMessage.bind(user);
bindedFunc1('Ukraine', 'Odesa');

const bindedFunc2 = printMessage.bind(user, 'UK');
bindedFunc2('London');

const bindedFunc3 = printMessage.bind(user, 'UK', 'Liverpool');
bindedFunc3();

// input: obj
// output: function
function myBind(func, context, ...bindArgs) {
  return function (...funcArgs) {
    func.apply(context, [...bindArgs, ...funcArgs]);
  };
}
//option1
const myBindedFunc = myBind(printMessage, user);
myBindedFunc('Ukraine', 'Odesa');

//option2
const mybindedFunc2 = printMessage.bind(user, 'UK');
mybindedFunc2('London');

//option3
const myBindedFunc2 = printMessage.bind(user, 'UK', 'Liverpool');
myBindedFunc2();

//bonus
// bind without call and apply
