/* import otherName, { value } from './file1.js';

otherName();
console.log(value);
 */
class Human {
  constructor(age) {
    this.age = age;
  }

  sayHi() {
    console.log('Hi');
  }
}

class Vasia extends Human {
  constructor(age) {
    super(age);
  }
}

const vasia = new Vasia(5);
vasia.sayHi();
console.log(vasia.age);
