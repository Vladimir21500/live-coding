//input: array1, array2
//output: object

/* 
1,create empty obj
2. iterate arrays and put key/value to the obj
*/

//bad
/* function buildObject(keysList, valuesList) {
  let res = {};
  for (let index = 0; index < keysList.length; index += 1) {
    res[keysList[index]] = valuesList[index];
  }

  return res;
} */

//good
function buildObject(keysList, valuesList) {
  return keysList.reduce(
    (acc, key, index) => ({ ...acc, [key]: valuesList[index] }),
    {}
  );
}

// testData
const keys = ['name', 'isStudent', 'age', 'car', 'house'];
const values = ['Bob', 'true', 34, 'LADA', null];
const result = buildObject(keys, values);
console.log(result); //===> {name: 'Bob', isStudent: 'true', age: 34, car: 'LADA', house: null}
