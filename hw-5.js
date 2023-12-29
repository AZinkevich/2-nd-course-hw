//task1
function min() {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else {
    return a;
  }
}

//task2
function parity() {
  let n = Number(prompt("Введите число"));
  if (n % 2 == 0) {
    return "Число четное";
  } else {
    return "Число нечетное";
  }
}

//task3.1
function sq31() {
  let n3 = Number(prompt("Введите число"));
  console.log(n3 * n3);
}

sq31();

//task3.2
function sq32() {
  let n3 = Number(prompt("Введите число"));
  return n3 * n3;
}

sq32();

//task4
function age() {
  let userAge = Number(prompt("Ваш возраст?"));
  if (userAge >= 0 && userAge <= 12) {
    alert("Привет, друг!");
  } else if (userAge >= 13) {
    alert("Добро пожаловать!");
  } else {
    alert("Вы ввели неправильное значение");
  }
}

age();

//task5
function numbers(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Одно или оба значения не являются числом";
  } else {
    return a * b;
  }
}

numbers(prompt("число а"), prompt("число b"));

//task6
let n = 0;
while (n >= 0 && n <= 10) {
  cub(n);
  n++;
}

function cub(n) {
  if (isNaN(n)) {
    return "Переданный параметр не является числом";
  } else {
    return n ** 3;
  }
}

//task7
const circle1 = {
  radius: 5,
  area: getArea,
  perimeter: getPerimeter,
};

const circle2 = {
  radius: 10,
  area: getArea,
  perimeter: getPerimeter,
};

function getArea() {
  return Math.PI * this.radius ** 2;
}

function getPerimeter() {
  return Math.PI * 2 * this.radius;
}

console.log(circle1.area());
console.log(circle2.area());
console.log(circle1.perimeter());
console.log(circle2.perimeter());
