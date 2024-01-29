//task1
const people = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];

console.log(people.sort(orderSort));

function orderSort(a, b) {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  return 0;
}

// //task2
function isPositive(number) {
  return number >= 0;
}

function isMale(item) {
  return item.gender === "male";
}

function filter(arr, ruleFunction) {
  const outArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
      outArr.push(arr[i]);
    }
  }
  return outArr;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people2 = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];

console.log(filter(people2, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

//task3
let TimerId = setInterval(() => console.log(new Date()), 3000);
setTimeout(() => {
  clearInterval(TimerId);
  console.log("30 секунд прошло");
}, 30000);

// //task4
function delayForSecond(callback) {
  setTimeout(() => callback(), 1000);
}

delayForSecond(function () {
  console.log("Привет, Глеб!");
});

//task5
function delayForSecond5(cb) {
  setTimeout(() => {
    console.log("Прошла одна секунда");
    if (cb) {
      cb();
    }
  }, 1000);
}

function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

delayForSecond5(() => sayHi("Глеб"));