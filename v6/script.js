//ситаксис
let message = "вася лол проу";
if (2 > 1) {
  //код выполняется только если
  //выражение в скобках вернет true
  console.log(message);
}
if (2 + 1 === 3 && "1" == 1 || 10 > 5 && 10 === "васян") {
  console.log(message);
}
//код в скобках преобразуется в булевый тип 
//пустое значение возвращает false
//тоже будет и с 0
if ("") {
  console.log(message);
}

//кородкая запись
if (2 > 1) console.log(message);

//блок ELSE и ELSE IF
let number = 30;
let message1 = `условие верно ${number}>1`;
if (number > 1) {
  console.log(message1);
} else {
  console.log(`условие не верно ${number}>1`);
}

if (number > 50) {
  console.log(`${number}>50`);
} else if (number > 30) {
  console.log(`${number}>30`);
} else if (number > 10) {
  console.log(`${number}>10`);
} else {
  console.log(`условие всрато`);
}
//условный оператор ?
//класическая запись 123

let text1 = "лол проу"
/* qweqwe
let textEnd;
if (5 > 6) {
  textEnd = "васян ";
} else {
  textEnd = " степан";
} 
*/
//запись с использованием ?qqq
let textEnd = (5 > 1) ? "васян " : " степан";
textEnd += text1;
console.log(textEnd);
/*
if (5 > 6) {
  textEnd = "васян ";
} else if (5 > 30) {
  textEnd = " степан";
} else if (5 > 50) {
  textEnd = " арсян";
} else if (5 > 1) {
  textEnd = " стасян";
} else {
  textEnd = " имя не найдено";
}
*/
textEnd = 11 > 10 ? " васян" :
  5 > 30 ? " степан" :
    5 > 10 ? " арсян" :
      5 > 1 ? " стасян" : " имя не найдено"
textEnd += text1;
console.log(textEnd);