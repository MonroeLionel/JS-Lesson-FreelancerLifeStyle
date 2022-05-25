/* 
Динамическая типизация
JS является динамически типизированы
тоесть тип данных переменной меняется динамический 
в момент присвоения либо смены ее значения 
а не в момент объявления
*/

let userName;// объявления переменной
console.log(typeof userName);
userName = "vasan lol pro"; //строка
console.log(typeof userName);
userName = 58;            //число
console.log(typeof userName);

//undefined - неопределенный тип
let undType;//объявляем переменную
//получаем тип данных
console.log(typeof undType);
//получаем значения переменной
console.log(undType);

// Null
// Null - так же как и undefined 
//содержит только одно значение Null

let nulName = null;
console.log(nulName);

//BooLean
/* 
BooLean - это булевый или логический тип
может принимать только два занчения
true(истина) и false(лож)
*/
let estChtoto = false;
if (estChtoto) {
  console.log("да есть")
} else {
  console.log("неуя нет")
}
// так же можно использовать
// с операторми сравнения
let bolweMenwe = 58 < 180;
console.log(bolweMenwe);

//Number(число)
/* 
числовой тип данных преставляет значения
как в виде целых чисел
так и  в виде числей с плавающей точкой
*/

let nubrHeg = 88;
let nubrLow = 12.232323;
console.log(nubrHeg);
console.log(typeof nubrHeg);
console.log(nubrLow);
console.log(typeof nubrLow);

//Infinity

let getInfin = 10 / 0;
console.log(getInfin);
console.log(typeof getInfin);

// -Infinity
let getInfinn = -10 / 0;
console.log(getInfinn);
console.log(typeof getInfinn);

// NaN это вычеслительная ошибка
let getNan = "vasan" / 10;
console.log(getNan);
console.log(typeof getNan);

/* 
если где то в математической выражении 
есть NaN то результатом вычесления с его участием будет NaN
*/

//BigInt
/* 
В JS тип данных "Number" не омжет содержать числа боьше чем 9007199254740991
или меньше чем -9007199254740991
*/
const biginteger = 1233n; //необходимо добавить литеру n
console.log(typeof biginteger); // тогда получим другой тип данных

//String строка
let userNik = "nagibator3000";
console.log(typeof userNik);
let userNik2 = 'nagibator3000';
console.log(typeof userNik2);
//между двойными и одинарными разницы нет
let userNik3 = `nagibator3000`;
console.log(typeof userNik3);
//обратные позволят использовать доп функционал
let userAge = 33;
let userInfo = `Возраст: ${userAge}`; //позволяет встраивать в строку выражения
console.log(userInfo);

//object
let vasaProfil = {
  name: "Васян",
  age: 22
}
console.log(vasaProfil);
console.log(typeof vasaProfil);

//symbol
let id = Symbol("id");
console.log(typeof id);

//
let testfunction = function name(params) {
  //код функции
}
console.log(typeof testfunction);

//преобразование типов данных

//строковое преобразование
let testStroki = 59;
console.log(testStroki);
console.log(typeof testStroki);

testStroki = String(testStroki);

console.log(testStroki);
console.log(typeof testStroki);

//численное преобразование
let testChisla = "66";
console.log(testChisla);
console.log(typeof testChisla);

testChisla = Number(testChisla);

console.log(testChisla);
console.log(typeof testChisla);