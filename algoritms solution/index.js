/* 1. Проходимся по всем числам от 2 до num
2. по каждому из єтих чисел проходимся и проверяем является ли оно простым 
3. если простое выводим  в консоль*/

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % 2 === 0) return false;
  }
  return true;
}

function getPrimes(num) {
  for (let i = 2; i < num; i += 1) {
    // console.log('cheking number #' + i);
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

//data test

getPrimes(65);
