//записи чисил
let someBigNum = 1000000;
console.log(someBigNum);

let someLittleName = 0.000001;
console.log(someLittleName);
// короткий ваиант что бы не считать нули
let someBigNumShort = 1e6;
console.log(`shor ${someBigNumShort}`);

let someLittleNameShort = 1e-6;
console.log(`short ${someLittleNameShort}`);

//шестнадцатеричные двоичные и восьмеричные числа
/*
щестнадцетеричные числа щироко используются в JS
для представления цветов кодировки символов и многого другого
*/
console.log(0xFF); //=0xff=255
//реже используют двоичные и восьмеричные системы
console.log(0b11111111); //255
console.log(0o377); //255
//метод toString(base)
//метод тип toString(base) возвращает строковое
//представление числа в той или иной системе счисления (base)
//base может принимать значения от 2 до 36 (по умолчанию 10)

let numTest = 255;
console.log(numTest.toString(16));
console.log(numTest.toString(8));
console.log(numTest.toString(2));
console.log(numTest.toString(32));

//округление чисел
//в JS встрен объект Math который содержит
//несколько функций для работы с округлением

//math.floor округление в меньшую сторону
let numOne = Math.floor(5.8);
let numtwo = Math.floor(2.2);
let numThree = Math.floor(-2.2);

console.log(numOne);
console.log(numtwo);
console.log(numThree);

//Math.ciel округление в большую сторону
let numOne1 = Math.ceil(5.8);
let numtwo1 = Math.ceil(2.2);
let numThree1 = Math.ceil(-2.2);

console.log(numOne1);
console.log(numtwo1);
console.log(numThree1);

//Math.round округление до ближайшего целого
let numOne2 = Math.round(5.8);
let numtwo2 = Math.round(2.2);
let numThree2 = Math.round(-2.2);

console.log(numOne2);
console.log(numtwo2);
console.log(numThree2);

//округление чисел до нужного знака
let numTest1 = Math.round(5.837);
console.log(numTest1);// вернет нам 6
//как получить числа 5.8 5.83

//способ умножения и деления
let numOne3 = Math.round(5.837 * 10) / 10; //58.37->58->5.8
console.log(numOne3);

let numtwo3 = Math.round(5.837 * 100) / 100; //583.7->583->5.84
console.log(numtwo3);

//метод toFixed(n) округляет число до n знаков после запятой
//и влзвращает строковое представление рузельтата
let numTest2 = 5.845;
console.log(numTest2.toFixed(1)); //тут вернет строку которая содержит 5.8

//преобразуем сразу ее в число
console.log(+numTest2.toFixed(1));    //вернет уже число
//либо
console.log(Number(numTest2.toFixed(1))); //вернет уже число

//округение чисел
//решение с помощью Number.EPSILON

let sourceNum = 1.005;
console.log(`стартовое число ${sourceNum}`);
console.log(`умножаем на 100 ${sourceNum * 100}`);
let numFour = Math.round(sourceNum * 100) / 100;
console.log(numFour);

let sourceNum1 = 1.005 + Number.EPSILON
console.log(`умножам на сто ${sourceNum1 * 100}`);
let numberFour1 = Math.round(sourceNum1 * 100) / 100;
console.log(numberFour1);

//проверка isFinite и isNaN
/*
напомню что существуют специальые числовые значения 
такие как Inginity  бесконечность и NaN ошибка вычесления
эти значения так же являются типом данных number 
но не являются обычными числами 
для проверки таких зачений существуют специальные функции
*/

//проверка isNaN
console.log(Number(25 + "привет"));
console.log(isNaN(25 + "привет")); //вернет true

//NaN это уникальное значение оно не может равнятся самому себе
console.log(NaN === NaN); //вернет false

if (25 + "привет" !== NaN) { //подобные проверки не помогут
  console.log(`я не NaN`);
}

//проверка isInfinite
/*
прообразует аргумент в число и возващает true
если оно является обычнвм числом
*/
console.log(isFinite("25"));      //"25"->25->true
console.log(isFinite("привет"));  //NaN->false
console.log(isFinite(10 / 0));    //Infinity->false

//parseInt и parseFloat
/*
как мы уже знаем преобразовать строку в число можно 
с помощью унарного оператора сложения либо специальной функции NUmber
*/

let valueOne = +"150";
console.log(valueOne); //тип число
console.log(typeof valueOne);

/*
но мы очень часто сталкиваемся со значениями
у которых есть единица измереня например
*/

let valueTwo = +"150px";
console.log(valueTwo);
console.log(typeof valueTwo);

/*
для получения чисел из такой строки существует parseInt и parseFloat
если в процессе чтения возникает ошибка они возвращают полученное до 
ошибки число

parseInt возвращает целое число
parseFloar число с плавающей точкой
*/

let value1 = parseInt("150.18px 12.66");
console.log(value1);
console.log(typeof value1);

let value2 = parseFloat("150.18px 12.66");
console.log(value2);
console.log(typeof value2);

/*
функция parseInt() имеет необязательный второй параметр
он определяет систему счисления таким образом parseInt
может также читать строки с шестнадцатеричными числами
двоичными и т.д.
*/

console.log(parseInt(`0xff`, 16));
console.log(parseInt(`ff`, 16));

//уже знакомый нам объект Math содержит
//различные математические функции и константы
//вот некоторые
// Math.random()
//возвращает псевдослучайно число 0
//в диапазоне от 0(включительно) до 1 (но не включая 1)
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
//Math.max(a,b,c...) / Math.min(a,b,c...)
//возвращает наибольшее / наименьшее число из перечисленных аргументов
console.log(Math.max(5, 92, -102));
console.log(Math.min(5, 92, -102));
//Math.abs()
//возвращает абсолютное значение (модуль) числа
let abc = -58;
console.log(Math.abs(abc));
//Math.pow(n, power)
//возвращает число n возведенное в степерь power
console.log(Math.pow(5, 8));
// еще больше примеров
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
