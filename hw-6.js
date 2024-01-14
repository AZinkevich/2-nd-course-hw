//task1
const arr1 = [1, 5, 4, 10, 0, 3];
for (let index = 0; index < arr1.length; index++) {
    console.log(arr1[index]);
    if (arr1[index] == 10) break;
}

//task2
const arr2 = [1, 5, 4, 10, 0, 3];
let posItem2 = arr2.indexOf(4);
console.log(posItem2);

//task3
let arr3 = [1, 3, 5, 10, 20];
arr3 = arr3.join(' ');
console.log(arr3);

//task4
let arr4 = [];
for (let i = 0; i < 3; i++) {
  arr4[i] = [];
  for (let k = 0; k < 3; k++) {
    arr4[i][k] = 1;
  }
}
console.log(arr4);

//task5
const arr5 = [1, 1, 1];
for (let h = 0; h < 3; h++) {
    arr5.push(2);
}
console.log(arr5);

//task6
const arr6 = [9, 8, 7, "a", 6, 5];
arr6.sort();
arr6.pop();
console.log(arr6);

//task7
const arr7 = [9, 8, 7, 6, 5];
let search = arr7.includes(Number(prompt("Введите число")));
if (search == 1) {
  alert("Угадал");
} else {
  alert("Не угадал");
}

//task8
let str8 = 'abcdef';
let newArr8 = str8.split('');
newArr8.reverse();
newArr8 = newArr8.join('');
console.log(newArr8);

//task9
const arr9 = [
  [1, 2, 3],
  [4, 5, 6],
];

let newArr9 = [];

for (let arr9In of arr9) {
  for (item of arr9In) {
    newArr9.push(item);
  }
}
console.log(newArr9);

//task10
const arr10 = [1, 3, 5, 6, 3, 8, 8, 10];

for (let q = 0; q < arr10.length - 1; q++) {
  let sum = arr10[q] + arr10[q + 1];
  console.log(sum);
}

//task11
const quadFn = (Arr11) => {
  return Arr11.map((el) => el ** 2);
};

const Arr11 = [1, 2, 3, 4];
console.log(quadFn(Arr11));

//task12
const getLengthWords = (Arr12) => {
  let newArr12 = [];
  Arr12.forEach((el) => {
    newArr12.push(el.length);
  });
  return newArr12;
};

const Arr12 = ["слово", "", "слог", "длинное предложение", "буква"];
console.log(getLengthWords(Arr12));

//task13
function filterPositive(array) {
  let negative = array.filter((el) => el < 0);
  return negative;
}

console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]
console.log(filterPositive([-25, 25, 0, -1000, -2])); // => [-25, -1000, -2]

//task14
let randomArr14 = [];
for (let i = 0; i < 10; i++) {
  randomArr14.push(Math.floor(Math.random() * 10) + 1);
}
let parityArr = randomArr14.filter((el) => el % 2 == 0);
console.log(randomArr14);
console.log(parityArr);

//task15
let randomArr15 = [];
for (let i = 0; i < 6; i++) {
  randomArr15.push(Math.floor(Math.random() * 10) + 1);
}
let average = randomArr15.reduce((a, b) => a + b) / randomArr15.length;

console.log(average);
