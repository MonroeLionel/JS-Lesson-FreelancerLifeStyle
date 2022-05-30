//метод slice 
//создает новый массив в который копирует часть либо весь массив
//синтаксис arr.slice([start],[end]) не включая [end]

//копируем часть массива
let arrone = [`vasan`, `stepan`, `petr`,];

//начиная с 1й позиции "степан" 
//до 2й позиции петр (не включая)
let arrTwo = arrone.slice(1, 2);
console.log(arrTwo);

//начиная с предпоследней позиции "степан"
// до последей "петр" (не включая)
let arrThree = arrone.slice(-2, -1);
console.log(arrThree);

//копируем весь массив
let arrFour = arrone.slice();
console.log(arrFour);

//метод concat
//создает новый массив в который покирует данные из других массивов
// и дополельные значения (в конец массива)
//синтаксис arr.concat(arg1,arg2...)

let arrC1 = [`ноль`, `один`, `два`, `три`, `четыре`, `пять`];
let arrC2 = arrC1.concat(`шесть`, `семь`);
console.log(arrC2);
