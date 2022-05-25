// объявление функции (Funcion Decloration)
/*
funcrion имя(параметры){
  тело (код) функции
}
*/

//имя функции и её предназначение

/*
как правило в именни используются определенные префиксы
обозначающие действие после которых следует объект действия

например функции начинаются с 
"show..." обычно что то показывают
"get..." возвращают значение
"calc..." что то вычисляют
"create..." что то создают
"check..." что то проверяют и возвращают 
логическое значение и т.д.

Примеры
showMessage - показать сообщение
getOptions - получить параметры
calcSum - посчитать сумму
*/

//функция вывода сообщения
showMessage(); // можно вызывать функцию до ее объявления
function showMessage() {
  console.log(`сообщение`);
}
showMessage();

//вложенность и видимость функци
function getSumm() {
  let numOne, numTwo;
  function getNumOne() {
    numOne = 1;
  }
  function getNumTwo() {
    numTwo = 2;
  }
  getNumOne();
  getNumTwo();
  let numSumm = numOne + numTwo;
  console.log(`функция getSumm ${numSumm}`);
}
getSumm();
// getNumOne(); попытка вызова дочерней функции за пределами
//родительской выдает ошибку  
//в стогом режиме функции объявленные в нутри циклов
//тоже не доступны

function showMessage2() {
  let message = 'текст';
  console.log(message);
}
showMessage2();
// console.log(message);
//переменные объявленные в нутри функция остаются не видимымив не ее

//внещние переменные
let testMessage;
function showMessage3() {
  //использутесять внешняя переменная
  testMessage = `внешняя переменная`;

}
showMessage3();
console.log(testMessage);

let testMessage1 = "внешня";
function showMessage4() {
  let testMessage1 = `внутренняя`;
  console.log(testMessage1);
}
showMessage4();
console.log(testMessage1);

//параметры (аргументы)
function calcSum2(one, two) {
  //можно добавить параметры по умолчанию one=1, two=2 
  //они будут использоватся если в функцию не передали аргументы
  console.log(`переменная one ${one}`);
  console.log(`переменная two ${two}`);
  let numSumm2 = one + two;
  console.log(`сумма ${numSumm2}`);
}
calcSum2(1, 2);

//функции колбэки
function calcSum3(num1, num2, more, less) {
  let numSumm = num1 + num2;
  if (numSumm > 3) {
    more();
  } else {
    less();
  }
}
function showMoreMessage() {
  console.log(`больше чем`);
}
function showLessMessage() {
  console.log(`меньше чем`);
}
calcSum3(1, 5, showMoreMessage, showLessMessage);

//возврат результата
function calcSum4(numPar1, numPar2) {
  let numSumm = numPar1 + numPar2;
  //возврат
  return numSumm;
  //дальше код выполнятся не будет
}
let testReturn = calcSum4(1, 2);
console.log(`сумма ${testReturn}`);

//рекурсия
function calcRecurs(numRec, numRec2) {
  let result = 1;
  //умножаем ruselt на numRec , numRec2 раз в цикле
  for (let i = 0; i < numRec2; i++) {
    result *= numRec;
  }
  return result;
}
console.log(calcRecurs(2, 3));

//тоже самое

function calcRecurs2(numA, numB) {
  if (numB === 1) {
    return numA;
  } else {
    return numA * calcRecurs2(numA, numB - 1)
  }
}
console.log(calcRecurs2(2, 3));

//функционально выражение (Function Expression)
let showExpress = function () {
  console.log(`vasan`);
};
showExpress();
//можно помещать с переменную и вызать как
//по имени переменной так и по имени функции
let vasan = showExpress;
vasan();
//!!! функционально выражение можно вызвать только
//после его объявления

// при строгом кодинге не будет выполнятся функция 'use strick'
//которая находится в нутри цикла
if (2 > 1) {
  function getDec() {
    let summ = 1 + 2;
    console.log(summ);
  }
}
getDec();
// но можно объявить переменную а потом 
//в нутри цикла присвоеть ей функцию
let vasanLol;
if (2 > 1) {
  vasanLol = function () {
    let summ = 1 + 2;
    console.log(summ);
  }
}
vasanLol();

//функции стрелки (arrow function)

//функционально выражение
/*
let имя переменной=function(параметр,... параметр){
  return выражение
}
*/

//стрелочная функция
/*
let переменная =(параметр,...параметр)=> выражение
*/
//пример
let getMessage = (text, name) => text + ' ' + name + '!';
console.log(getMessage('васян', 'проу'));
//пример многострочной
let getMessage1 = (text, name) => {
  let message = text + ' ' + name + '!';
  return message;
}
console.log(getMessage1('васян', 'проу'));

//планирование setTimeout setInterval 
/*
что бы реализовать планирование существуют два метода
1 setTimeout позволяет вызвать функцию один раз
через определнный итервал времени
2 setInterval позволяет вызывать функции регульрно
повторяя вызов через определенный интервал времени

setTimeout(функция или код,задержка,параметр,...параметр)
setInterval(функция или код,задержка,параметр,...параметр)
*/
//пример
function showVasan(text, name) {
  console.log(`${text},${name}`);
}
// setTimeout(showVasan, 3000, 'васян', 'проу');
// setInterval(showVasan, 1000, 'васян', 'проу');

function showVasan1(text, name) {
  console.log(`${text},${name}`);
  setTimeout(showVasan1, 500, text, name);

}
// setTimeout(showVasan1, 500, 'васян', 'Lol');
function showNumber(num) {
  console.log(num);
  if (num < 5) {
    setTimeout(showNumber, 1000, ++num);
  }
}
setTimeout(showNumber, 1000, 1);

// clearTimeout останавливает setTimeout
function shownumb(num) {
  console.log(num);
  let timeID = setTimeout(shownumb, 1000, ++num);
  if (num === 6) {
    clearTimeout(timeID);
  }
}
setTimeout(shownumb, 1000, 1);

let result = 0;
function showNum(num) {
  result += num;
  console.log(result);
  if (result === 5) {
    clearInterval(timeID2);
  }
}
let timeID2 = setInterval(showNum, 1000, 1);