const array = [1, 2, 3, 4, 45, 65];
console.log(array);

const filterArrayElements = (arr, callback) => {
  const result = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index], index, arr)) {
      result.push(arr[index]);
    }
  }
  return result;
};

console.log(filterArrayElements(array, (el) => el % 3 === 0));
//==> [3]
console.log(filterArrayElements(array, (el, index) => index < 3));

//==============map

/* 
1. mapArray 
input: array, callback
output: new array

2.callback
input:el, index, arr
output:new el*/

const mapArrayElements = (arr, callback) => {
  const result = [];

  for (let index = 0; index < arr.length; index += 1) {
    result.push(callback(arr[index], index, arr));
  }
  return result;
};
//test data
const array2 = [1, 4, 45, -46, 0, 35];

console.log(mapArrayElements(array2, (el) => el ** 2));
console.log(mapArrayElements(array2, (el) => el));
console.log(mapArrayElements(array2, (el) => el + 2));
console.log(mapArrayElements(array2, (el) => `${el}`));
