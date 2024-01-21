//task1
let str = "AbCdEf";
str = str.toUpperCase();
console.log(str);

//task2
function searchStart(arr, str) {
  let newArr = [];
  arr.forEach((substr) => {
    if (substr.toLowerCase().startsWith(str.toLowerCase())) {
      newArr.push(substr);
    }
  });
  return newArr;
}

console.log(
  searchStart(["Кошка", "Кит", "Комар", "Носорог"], "ко"),
  searchStart(["яблоко", "груша", "гриб", "огурец"], "гру"),
  searchStart(["Дом", "Банк", "Больница", "Театр"], "Кино")
);

//task3
const int3 = 32.58884;
console.log(Math.floor(int3), Math.ceil(int3), Math.round(int3));

//task4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//task4 alter
let str5 = "52,53,49,77,21,32";
let arr5 = str5.split(",");
let newArr5 = [];
arr5.forEach((el) => {
  newArr5.push(Number(el));
});
console.log(Math.min.apply(null, newArr5));
console.log(Math.max.apply(null, newArr5));

//task5
function getRandomInt(minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandomInt(1, 10));

//task6
function getRandomArrNumbers(maxValue) {
  let randomArr = [];
  for (let i = 0; i < Math.floor(maxValue / 2); i++) {
    randomArr.push(Math.round(Math.random() * maxValue));
  }
  return randomArr;
}
console.log(getRandomArrNumbers(7), getRandomArrNumbers(12));

//task7
function getRandomInt7(minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

console.log(getRandomInt7(3, 5));

//task8
let currentDate8 = new Date();
console.log(currentDate8);

// task9
let currentDate9 = new Date();
currentDate9.setDate(currentDate9.getDate() + 73);
console.log(currentDate9);

//task10
function formatDate(currentDate) {
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  let newDate =
    "Дата: " +
    currentDate.getDate() +
    " " +
    months[currentDate.getMonth()] +
    " " +
    currentDate.getFullYear() +
    " - это " +
    days[currentDate.getDay()] +
    ". Время: " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

  return newDate;
}

console.log(formatDate(new Date()));

//task11
function words() {
  let arrWords = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];
  arrWords = arrWords.sort(() => Math.random() - 0.5);
  alert(`Запомните первое и последнее слово:  ${arrWords}`);
  let firstWord = arrWords[0].toLowerCase();
  let lastWord = arrWords[arrWords.length - 1].toLowerCase();
  let userFirstWord = String(prompt("Введите первое слово:")).toLowerCase();
  let userLastWord = String(prompt("Введите последнее слово:")).toLowerCase();
  if (firstWord === userFirstWord && lastWord === userLastWord) {
    alert("Поздравляю, все верно!");
  } else if (
    (firstWord === userFirstWord && lastWord !== userLastWord) ||
    (firstWord !== userFirstWord && lastWord === userLastWord)
  ) {
    alert("Вы были близки к победе!");
  } else {
    alert("Все неверно!");
  }
}
