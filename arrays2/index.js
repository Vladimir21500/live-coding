const numberList = [5, 9, 6, 5, -5, 7, -5];

const filterRes = numberList.filter((num) => num > 0);

console.log(filterRes);

/* 
const mapRes = filterRes.map(el => {
    const res = el * el;
    return res;     
});
*/
console.log(`========map=========`);

const mapRes = filterRes.map((el) => el * el);

console.log(mapRes);

console.log(`=========forEach========`);

numberList.forEach((el) => {
  if (el > 0) {
    console.log(el);
  }

  return el;
});

console.log(`========find=========`);
//bad
/* const findRes = numberList.find((el) => {
  if (el % 2 === 1) {
    return true;
  }

  return false;
}); */
//good
const findRes = numberList.find((el) => el % 2 === 1);

console.log(findRes);

console.log(`=====with filter=======`);

const secondRes = numberList.filter((el) => el % 2 === 1)[0];

console.log(secondRes);

console.log(`=====reduce=======`);

const transactions = [5, 0, 56, 3546, 757, 34657];

/* const reducRes = transactions.reduce((acc, el) => {
  console.log(`acc` + acc);
  console.log(`el ` + el);

  return acc + el;
}); */

const reducRes = transactions.reduce((acc, el) => acc + el);

console.log(reducRes);
