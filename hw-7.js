//task1
// let str = "AbCdEf";
// str = str.toUpperCase();
// console.log(str);

//task2
// function searchStart(arr, str) {
//   let newArr = [];
//   arr.forEach((substr) => {
//     if (substr.toLowerCase().startsWith(str.toLowerCase())) {
//       newArr.push(substr);
//     }
//   });
//   return newArr;
// }

// console.log(searchStart(["Кошка", "Кит", "Комар", "Носорог"], "ко"),
// searchStart(["яблоко", "груша", "гриб", "огурец"], "гру"),
// searchStart(["Дом", "Банк", "Больница", "Театр"], "Кино"));

//task3
// const int3 = 32.58884;
// console.log(Math.floor(int3), Math.ceil(int3), Math.round(int3));

//task4
// function getRandomInt(minValue, maxValue) {
//   return Math.round(Math.random() * (maxValue - minValue)) + minValue;
// }
// console.log(getRandomInt(1, 10));

//task5

// console.log(Math.min(52, 53, 49, 77, 21, 32));
// console.log(Math.max(52, 53, 49, 77, 21, 32));

// let str5 = "52,53,49,77,21,32";
// let arr5 = str5.split(",");
// let newArr5 = [];
// arr5.forEach((el) => {
//   newArr5.push(Number(el));
// });
// console.log(Math.min.apply(null, newArr5));
// console.log(Math.max.apply(null, newArr5));

//task6
function getRandomArrNumbers(maxValue) {
  let randomArr = [];
  for (let i = 0; i < Math.floor(maxValue / 2); i++) {
    randomArr.push(Math.round(Math.random() * maxValue));
  }
  return randomArr;
}
console.log(getRandomArrNumbers(7), getRandomArrNumbers(12));
