// while (true) {
//     const msg = prompt("введите сообщение");
//     if (msg === 'continue') {
//         continue;
//     }
//     console.log(msg);
//     if (msg === 'end') {
//         break;
//     }
// }
// let monthNumber = 1;

// while (monthNumber <= 12) {
//     if (monthNumber >= 1 && monthNumber <=2 || monthNumber === 12) {
//         console.log('Зима');
//     } else if (monthNumber >= 3 && monthNumber <= 5) {
//         console.log('Весна');
//     } else if (monthNumber >= 6 && monthNumber <= 8) {
//         console.log('Лето');
//     } else if (monthNumber >= 9 && monthNumber <= 11) {
//         console.log('Осень');
//     }
// 	monthNumber++; // Увеличиваем значение monthNumber для следующего шага на 1
// }

//task1
// for (let count = 0; count < 2; count++) {
//   console.log("Привет");
// }

// //task2
// let num2 = 1;
// while (num2 < 6) {
//   console.log(num2);
//   num2++;
// }

// //task3
// let num3 = 7;
// while (num3 < 73) {
//   console.log(num3);
//   num3++;
// }

//task4
// const obj = {
//   Коля: 200,
//   Вася: 300,
//   Петя: 400,
// };

// for (let name in obj) {
//   console.log(`${name} - зарплата ${obj[name]} долларов.`);
// }

//task5
let n = 1000;
let i = 0;
while (n > 50) {
  n = n / 2;
  i++;
}

console.log(n);
console.log(i);
