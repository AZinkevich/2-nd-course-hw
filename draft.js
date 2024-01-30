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
//     let newStr = a.split('');
//     let filterStr = newStr.filter((str) => str.toLowerCase() === b.toLowerCase())
//     return filterStr.length
// }

// //task2
// function squarSum(arr) {
//     let squarArr = arr.map((el) => el ** 2)
//     let squarSumArr = squarArr.reduce((a, b) => a + b)
//     return squarSumArr
// }
// squarSum([1, 2, 2])

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

//task4
// let str = "world";
// let arrStr = str.split("");
// arrStr.reverse();
// let newStr = arrStr.join("");
// console.log(newStr);

//task5
// function countLiter(str) {
//   let arrStr = str.split(" ");
//   let newArr = arrStr.map((el) => el + " " + el.length);
//   return newArr;
// }

//countLiter("I am very hungry");

//task6
// function mango(quant, price) {
//     if (quant > 2) {
//         return price * (quant - Math.floor(quant / 3));
//     }
//     return price * quant;
// }

// console.log(mango(3, 3));


//task7
// const water = 0.5
// const litres = (time) => { return Math.floor(water * time) }

// console.log(litres(3))


//task8
