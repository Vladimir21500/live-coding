//input: object
//output:array

//algo
/* 
1.get key
2.
*/
const getCustomersList = (obj) => {
  return Object.entries(obj)
    .map(([id, customer]) => ({ ...customer, id }))
    .sort((a, b) => a.age - b.age);
};

const arr = [1, 2, 3];
const [el1, el2] = arr;
console.log(el1, el2);

const obj = {
  name: 'ivan',
  age: 5,
};

const { age, name } = obj;
console.log(age);
console.log(name);

const consumers = {
  'consumer-id-1': {
    name: 'William',
    age: 54,
  },
  'consumer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

console.log(getCustomersList(consumers));
