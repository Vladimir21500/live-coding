function compareObjects(obj1, obj2) {
  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);

  if (keysObj1.length !== keysObj2.length) return false;

  return !keysObj1.some((key) => obj1[key] !== obj2[key]);
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
