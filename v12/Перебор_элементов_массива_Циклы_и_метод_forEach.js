// перебор элментов 
let arr = [`ноль`, `один`, `два`, `три`, `четыре`, `пять`,];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("|||||||||||||||||||||||")
//цикл FOR...OF
//можно использовать для вывода значений

let arrTwo = [`ноль`, `один`, `два`, `три`, `четыре`, `пять`,];

for (let arrItem of arrTwo) {
  console.log(arrItem);
}

//метод перебора forEach
//выполняет функцию для каждого элемента массива

/*
Синтаксис
arr.forEach(function(item,index,array){
  // делать что то с item
})
*/

let arrEach = [`ноль`, `один`, `два`, `три`, `четыре`, `пять`,];
arr.forEach(function (item, index, array) {
  console.log(`значение элемента-${item} номер элемента - ${index} и целиком массив -${array} `)
});
//перебирает все записи массива и выводит их в консоль 

//в случии с методом forEach мы можем указать уже готовую функцию
arrEach.forEach(show);
function show(item) {
  console.log(item);
}
// arrEach.forEach(show);