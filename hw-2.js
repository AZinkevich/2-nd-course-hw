//task 1
let a = 10;
alert(a);
a = 20;
alert(a);

//task 2
const yearIphone1 = 2007;
alert(`Первый Iphone был выпущен в ${yearIphone1}`);

//task 3
const JSCreator = "Брендан Эйх";
alert(`${JSCreator} - создатель языка JavaScript`);

//task4
let a4 = 10;
let b4 = 2;
let sum4 = a4 + b4;
let dif4 = a4 - b4;
let prod4 = a4 * b4;
let quot4 = a4 / b4;
alert(`${sum4}, ${dif4}, ${prod4}, ${quot4}`);

//task5
let result5 = 2 ** 5;
alert(result5);

//task6
let a6 = 9;
let b6 = 2;
alert(a6 % b6);

//task7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//task8
let age = Number(prompt("Сколько вам лет?"));
alert(age);

//task9.0
const user = {
  name: "Александр",
  age: 47,
  isAdmin: true,
};

//task9.1
user["city of residence"] = "Магадан";

//task9.2
user.age = 48;

//task9.3
delete user["city of residence"];

//task9.4
let info = prompt(`Какую информацию хотите узнать о пользователе?`);
alert(user[info]);

//task10
let name10 = prompt("Введи свое имя");
alert(`Привет, ${name10}!`);
