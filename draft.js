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
const timer = (deadline) => {
    if (isNaN(+deadline)) { // + − приводим значение к number, если это NaN,
        console.log('Передано некорректное число'); // выводим сообщение
        return; // выходим из функции
    }

    let time = deadline;
    const interval = setInterval(() => {
        time -= 1;
        console.log(time);
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('Время истекло!')
    }, deadline * 1000)
};

const deadline = prompt('На сколько секунд вы хотите поставить таймер?');
timer(deadline);