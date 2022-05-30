// проверка Array.isArray()
/*
напомню массивы не образуют отдельный тип даных
они основаны на объектах
*/

let obj = {};
let arr = [];

console.log(typeof obj); //object
console.log(typeof arr); //object

//как же нам узнать где массив а где нет

if (Array.isArray(arr)) { //метод возвращает true или false
  console.log("массив");
} else {
  console.log(`не массив`)
};

if (Array.isArray(obj)) {
  console.log("массив");
} else {
  console.log(`не массив`)
};