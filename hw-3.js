//task1
// let password = "qwerty";
// let userPassword = prompt(`Веведите пароль`);
// if (password === userPassword) {
//   alert("Пароль введен верно");
// } else {
//   alert("Пароль введен неправильно");
// }

//task2
// let c = -11;
// c > 0 && c < 10 ? console.log("Верно") : console.log("Неверно");

//task3
// let d = 10;
// let e = 10;
// d > 100 || e > 100 ? console.log("Верно") : console.log("Неверно");

//task4
// let a = '2';
// let b = '3';
// alert(Number(a) + Number(b));

//task5
// let monthNumber = prompt("Чтобы узнать время года укажи номер месяца:");
// switch (monthNumber) {
//   case "1":
//   case "2":
//   case "12":
//     console.log("Зима");
//     break;
//   case "3":
//   case "4":
//   case "5":
//     console.log("Весна");
//     break;
//   case "6":
//   case "7":
//   case "8":
//     console.log("Лето");
//     break;
//   case "9":
//   case "10":
//   case "11":
//     console.log("Осень");
//     break;
//   default:
//     console.log("Введи число от 1 до 12!");
//     break;
// }

//task7
let var7 = Number(prompt(`Пожалуйста, введите любое число`));
if (Number.isNaN(var7)) {
  console.log("Это не число!");
} else if (var7 % 2 > 0) {
  console.log("Это число нечетное");
} else {
  console.log("Это число четное");
}
