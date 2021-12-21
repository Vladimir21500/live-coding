/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */

/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достань последний элемент массива numbersList1 и помести его в переменную lastNumber
// выведи в консоль эту переменную, а так же массив numbersList1 после выполнения pop

const numbersList1 = [1, 2, 3, 4, 5];

const res = numbersList1.push(222);
console.log(res);

function sum(from, to, printer) {
  let res = 0;
  for (let index = from; index <= to; index += 1) {
    res += index;
  }

  printer(res);
}
//test data

const num1 = 5;
const num2 = 10;

function printResult(res) {
  alert(res);
}

//sum(num1, num2, printResult);

//====

const anotherNumberList = [5, 9, 6, 5, -5, 7, -5];
//bad
/* const filterRes = anotherNumberList.filter(function (num) {
  return num > 0;
}); */

const filterRes = anotherNumberList.filter((num) => num > 0);

console.log(filterRes);
