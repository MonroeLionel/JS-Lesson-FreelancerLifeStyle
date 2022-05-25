// объявления переменных 

//в строку
let myName = 'vasa', myAge = 30, mylife = 'vsrato';

//через запятую с новой строки
let myName1 = 'vasa',
  myAge1 = 30,
  mylife1 = 'vsrato';

//отдельно
let myName2 = 'vasa';
let myAge2 = 30;
let mylife2 = 'vsrato';

//видимость переменных

//видимость переменной только внутри функции блока
function testblock() {
  let myAge3 = 90;
  console.log(myAge3);
}
testblock();

// console.log(myAge3); //переменная не видна за пределами функций

function testblock2() {
  let myAge = 10;         //в нутри функции своя среда
  console.log(myAge);
}
testblock2();
console.log(myAge);       //использует значения объявленые раньше функции


//константы

//имена констант с заранее известными значениями
//принято записывать в верхнем регистре
const BLOCK_SIZE = 25;
const COLOR_RED = "#F00";

//имена константы со значение присвоенным
//в процессе выполнения програмы
const summSize = 25 + 30;


//смена занчений в константе
//объект с данными
const userProfil = {
  name: 'vasa',
  age: 30,
  message: 'vsrataliti'
}
console.log(userProfil);
//меняем поля возрата
userProfil.age = 99;
console.log(userProfil);

//ключевое слово var 
//можно использовать до ее объявления

newAge = 77;
console.log(newAge);
var age;

//область видимости для var 

function testVar() {
  var varAge = 10;
}
// console.log(varAge); // не видна за пределами функции

function testLet() {
  let letAge = 77;
}
// console.log(letAge); // не видна за пределами функций

//за пределами условий

if (true) {
  let sizeLet = 90;
}
//console.log(sizeLet); //переменная не видна

if (true) {
  var sizeVar = 33;
}
console.log(sizeVar); //переменная не видна так же с циклами