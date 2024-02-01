// function greeting(name) {
//     alert("Hello " + name);
//   }

//   function processUserInput(callback) {
//     var name = prompt("Please enter your name.");
//     callback(name);
//   }

//   processUserInput(greeting);

//----------------------------------------------------
// function callbackWithArrayLength(arr, callback) {
//     //console.log(arr);

//    callback(arr.length);
// }

// callbackWithArrayLength([1], (length) => {
//     console.log(length);
// });

// callbackWithArrayLength([1, 1], (len) => {
//     console.log(len);
// });
// callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
//     console.log(l);
// });

//-----------------------------------------------------
// function log(arrItem) {
//     console.log("Элемент массива:", arrItem);
// }

// function each(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i]);

//     }
// }

// each(["Глеб", "Олег", "Татьяна", "Платон"], log);

//--------------------------------------------------
// function square(number) {
//     return number * number;
//   }

//   function map(arr, ruleFunction) {
//     const output = [];

//       // Добавил в консоль лог для отладки
//       console.log('ruleFunction', ruleFunction);

//     for (let i = 0; i < arr.length; i++) {
//       output.push(ruleFunction(arr[i]));
//     }

//     return output;
//   }

//   console.log(map([1, 4, 9, 16], square));
//------------------------------------------------
// function add(number1, number2) {
//     return number1 + number2;
//   }

//   function map(arr, ruleFunction) {
//     const output = [];

//     // // Добавил консоль лог для отладки
//     // console.log("ruleFunction", ruleFunction);

//     for (let i = 0; i < arr.length; i++) {
//       output.push(ruleFunction(arr[i]));
//     }

//     return output;
//   }

//   console.log(
//     map([1, 4, 9, 16], (item) => {
//       return add(item, 10);
//     })
//   );

//----------------------------------------------
// const timer = (deadline) => {
//     if (isNaN(+deadline)) { // + − приводим значение к number, если это NaN,
//         console.log('Передано некорректное число'); // выводим сообщение
//         return; // выходим из функции
//     }

//     let time = deadline;
//     const interval = setInterval(() => {
//         time -= 1;
//         console.log(time);
//     }, 1000);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('Время истекло!')
//     }, deadline * 1000)
// };

// const deadline = prompt('На сколько секунд вы хотите поставить таймер?');
// timer(deadline);

// //task1
// function str_count(a, b) {
//   let newStr = a.split("");
//   let filterStr = newStr.filter((str) => str.toLowerCase() === b.toLowerCase());
//   return filterStr.length;
// }

// //task2
// function squarSum(arr) {
//   let squarArr = arr.map((el) => el ** 2);
//   const initialValue = 0;
//   let squarSumArr = squarArr.reduce((a, b) => a + b, initialValue);
//   return squarSumArr;
// }
// console.log(squarSum([]));

//task3
// function nearest_Sq(n) {
//   if (Number.isInteger(Math.sqrt(n))) {
//     return n;
//   } else {
//     let up;
//     let down;
//     for (let u = n; !Number.isInteger(Math.sqrt(u)); u++) {
//       up = u + 1;
//     }
//     for (let d = n; !Number.isInteger(Math.sqrt(d)); d--) {
//       down = d - 1;
//     }
//     if (up - n > n - down) {
//       return down;
//     }
//     return up;
//   }
// }
// console.log(nearest_Sq(111));

// // //task3 gibrid
// const nearest_Sq = (n) => {
//   if (Number.isInteger(Math.sqrt(n))) {
//     return n;
//   } else {
//     const nearestSquare = Math.round(Math.sqrt(n)) ** 2;
//     return nearestSquare;
//   }
// };
// console.log(nearest_Sq(100));

//task3 alter
// function nearestSq(n) {
//   const sqrtN = Math.sqrt(n);
//   if (sqrtN === Math.floor(sqrtN)) {
//     return n;
//   }
//   const nearestSquare = Math.round(sqrtN) ** 2;
//   return nearestSquare;
// }

// console.log(nearestSq(143));

//task4
//let str = "world";
// function solution(str){
// let arrStr = str.split("");
// arrStr.reverse();
// let newStr = arrStr.join("");
// return}
// console.log(solution('world'));

//task5
// function countLiter(str) {
//   let arrStr = str.split(" ");
//   let newArr = arrStr.map((el) => el + " " + el.length);
//   return newArr;
// }

//countLiter("I am very hungry");

//task6
// function mango(quantity, price) {
//     if (quantity > 2) {
//         return price * (quantity - Math.floor(quantity / 3));
//     }
//     return price * quantity;
// }

// console.log(mango(3, 3));

//task7
//const water = 0.5
// const litres = (time) => { return Math.floor(0.5 * time) }

// console.log(litres(3))

//task8
// const invert = (Arr) => Arr.map(el => {
//     if (el !== 0) {
//         return el * -1
//     } return 0
// })

// console.log(invert([1, -3, 3, -6, 0]))

//task9
// const fnPow = (n) => {
//   let arr = [];
//   for (i = 0; i <= n; i++) {
//     arr.push(Math.pow(2, i));
//   }
//   return arr;
// };

// console.log(fnPow(0));

//task10
// const grow = (arr) => {
//   if (arr.length > 0) {
//     let mult = arr.reduce((a, b) => a * b);
//     return mult;
//   }
//   return;
// };
// console.log(grow([1,2,3,4]));



//FD
sayHi()

function sayHi() {
  alert("Привет");
}

//FE
let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
  function() { alert("Привет!"); } :
  function() { alert("Здравствуйте!"); };

welcome();