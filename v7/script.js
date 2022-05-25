//цикл WHILE
//синтаксис
//while (условие) {
//тело цикла
//туту будет выполнятся код
//}
//пример
let num = 0;
//выполняется пока в скобка возвращает true
//один полный цикл называют итерация 
while (num < 5) {
  console.log(num);
  num++;
}
let num1 = 5;
while (num1) {
  console.log(num1);
  num1--;
}

//конструкция DO...WHILE
//выполняет тело цикла хотя бы один раз даже 
//если WHILE уже false
let num3 = 0;
do {
  console.log(`выполнили ${num3}`)
  num3++;
} while (num3 < 0);

//цикл FOR
//синтаксис
//for(начало;условие;шаг){
//тело цикла
//тут будет выполнятся код
//}

//пример
for (let num4 = 0; num4 < 5; num4++) {
  console.log(`цикл FOR ${num4}`);
}

/*
работа цикла FOR
1 выполняется начало let=num4=0
2 выполняется условие num4<5 
3 если условие true выполняется тело 
цикла   console.log(`цикл FOR ${num4}`);
4 выполняет шаг num4++ после каждой итерации
пока условие возвращает true
*/
// переменные объявленные в нутри цикла не видимые
// for (let num4 = 0; num4 < 5; num4++)
// num4 вывести в не цикла нельзя
//можно объявить переменную до цикла но тогда она будет изменяться
let num5;
for (num5 = 0; num5 < 5; num5++) {
  console.log(`вывод в цикле ${num5}`);
}
console.log(`вывод в не цикла${num5}`);

//деректива break
let num6 = 0;
for (; num6 < 5; num6++) {
  console.log(`прерывание ${num6}`);
  if (num6 == 2) break;
}
console.log(`вывод после break ${num6}`);

//деректива continium
let num7 = 0;
for (; num7 < 5; num7++) {
  if (num7 == 2) continue //пропускает итерацию и выполняет следующую по очереди
  console.log(`пропуск итерации ${num7}`);
}

//метки
firstFOR: for (let num = 0; num < 2; num++) {
  for (let size = 0; size < 3; size++) {
    if (size == 2) {
      break firstFOR; //остановит цикл родителя с меткой
      //continue работает точно так же
    }
    console.log(`метки ${size}`)
  }
}