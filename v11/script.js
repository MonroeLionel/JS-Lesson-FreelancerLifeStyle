/*
запись строк кавычки
строку можно создать с помощью одинарных
двойны либо обратных кавычек
*/
let stroka1 = 'тест строки'; //одинарные
let stroka2 = "тест строки"; // двойные
let stroka3 = `тест строки`; //обратны
console.log(stroka1);
console.log(stroka2);
console.log(stroka3);

/*
одинырные и двойные кавычки работают по сути одинаково
а если использовать обрытные кавычки то в такую строку 
мы можем вставлять происвольные выражения обернув их в ${...}
*/
let textHi = "привет";
let textAll = `${textHi} все еще строка`;
console.log(textAll);

function someSum(a, b) {
  return a + b;
}
console.log(`сумма: ${someSum(4, 7)}`);

//многострочность
let textLong = `так 
можно
записывать многострочную запись`;
console.log(textLong);

/*
все что заключенно в любые кавычки
будет иметь тип данных строка
*/

let someString = "157";
let someNum = 157;
console.log(someString);
console.log(typeof someString);
console.log(someNum);
console.log(typeof someNum);

console.log(someNum + someString);

//спецсимволы

/*
внутри строк можно использовать ряд спецсимволов
все спецсимволы начинаются с обратного слеша
\ - так называемого "символ экранирования"
*/
// перевод строки \n

let textOne = `снова
многострочный
текст`;
console.log(textOne);
let textTwo = "снова \nдлинный \nтекст";
console.log(textTwo);

//табуляция (отступ) \t
let textTab = "какой-то \n\tдлинный \n\t\tтекст";
console.log(textTab);

//обратный слеш \\
let textSlesh = "текст \\ какой то \\";
console.log(textSlesh);

//кавычки \" \' \`
let textKav = "выделяем \" текст \' разными\` \`знаками\"";
console.log(textKav);

//иконки символы UTF-16 \uКОД UTF-32 \u{КОД}
let textSymbol = "вставляем \u00A9 смайлы \u{1F60D}";
console.log(textSymbol);

//работа о стркоами
// длина строки свойство Lenght
let textLengt = "длина строки"; //считает и проеблы вернет 12
console.log(textLengt.length);

//получаем символы строки
let textStroki = "Привет!";
let firstSymbol = textStroki[0];
let lastSymbol = textStroki[textStroki.length - 1];
console.log(firstSymbol);
console.log(lastSymbol);

for (const char of textStroki) {
  console.log(char);
}
//поменять отдельый символ нельзя
textStroki[2] = "2";
console.log(textStroki);

//изменения регистра
let textReg = "Привет";
console.log(textReg.toUpperCase());
console.log(textReg.toLocaleLowerCase());

//поиск подстроки
//Метод str.indexOf(substr,pos)
/*
он ищет посдтроку substr в строке str начиная с позиции pos
и возвращает позицию на которой располагается совпадение
либо -1 при остутствии совпадений
*/
let textStr = "Привет!";
console.log(textStr.indexOf(`рив`)); //возвращает 1 потому что находит совпадения в первой позиции
console.log(textStr.indexOf(`рив`, 3));

/*
более современный метод str.includes(substr,pos) возвращает true
если в строке есть искомая подстрока либо false если нет
*/

let textInc = "Привет!";
console.log(textInc.includes(`рив`));
console.log(textInc.includes(`рив`, 3));

console.log(textInc.startsWith(`рив`));
console.log(textInc.endsWith(`!`));

//ригистр имеет значени

let serchText = "пР";
console.log(textInc.includes(serchText)); //вернет фалсе
//приводим строки к одинакомому регистру
console.log(textInc.toLocaleLowerCase().includes(serchText.toLocaleLowerCase()));

/*
в итоге indexOf стоит использовать тогда когда нам нужна
позиция айденой посдтроки
в остальных случая удобнее использовать includes
*/


//получение части строки
/*
в JS существует ряд методов получения подстроки
но достаточно пользоватьсто одним
*/
/*
Метод str.slice(start[,end]) возвращает часть строки
от start до end (не включая END) 123
*/

let textSlice = "большая часть строки";
console.log(textSlice.slice(1, 2));
console.log(textSlice.slice(-2, -1));
console.log(textSlice.slice(1));

console.log(textSlice.slice(1, 2));
console.log(textSlice.slice(-2, -1));
console.log(textSlice.slice(1));

