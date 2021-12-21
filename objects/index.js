/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */
//input:object, string, value
//output:object
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

const addPropertyV2 = (obj, key, value) => Object.assign(obj, { [key]: value });

const addPropertyV3 = (obj, key, value) =>
  Object.assign({}, obj, { [key]: value });

const addPropertyV4 = (obj, key, value) => {
  return { ...obj, [key]: value };
};

const transaction = {
  value: 170,
};
console.log(
  addPropertyV1(transaction, 'currency', 'USD') // ==> { value: 170, currency: 'USD' }
);
console.log(transaction);

console.log(
  addPropertyV2(transaction, 'currency', 'USD') // ==> { value: 170, currency: 'USD' }
);
console.log(transaction);

console.log(
  addPropertyV3(transaction, 'currency', 'UAH') // ==> { value: 170, currency: 'USD' }
);
console.log(transaction);
