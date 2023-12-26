//task1
for (let count = 0; count < 2; count++) {
  console.log("Привет");
}

// //task2
let num2 = 1;
while (num2 < 6) {
  console.log(num2);
  num2++;
}

// //task3
let num3 = 7;
while (num3 < 73) {
  console.log(num3);
  num3++;
}

//task4
const obj = {
  Коля: 200,
  Вася: 300,
  Петя: 400,
};
for (let name in obj) {
  console.log(`${name} - зарплата ${obj[name]} долларов.`);
}

//task5
let n = 1000;
let num5 = 0;
while (n > 50) {
  n = n / 2;
  num5++;
}
console.log(n);
console.log(num5);

//task6
for (let dn = 5; dn <= 31; dn += 7) {
  console.log(`Сегодня пятница, ${dn}-е число. Необходимо подготовитьь отчет.`);
}
