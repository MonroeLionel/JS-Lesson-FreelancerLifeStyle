//поиск в массиве

//find и findIndex
//поиск в массиве объектов с пределёнными условием

/*
синтаксис
let result=arr.find(function(item,index,array){
  если true возвращает текущий элемент и перебор прерывается
  если все итерации оказались ложными возвращает undefine

});
*/

let arr = [
  { name: `васян`, age: 33 },
  { name: `колян`, age: 22, pol: `vertolet` },
  { name: `оля`, age: `не скажу` },

]
//find возвращает объект целиком который находит 
// item сам элемент массива { name: `васян`, age: 33 },
//index это его ключ позиция [0],[1],..[n]
//array весь массив
let resultOne = arr.find(function (item, index, arra) {
  //просим вернуть элемент массива где ключ age===22
  return item.age === 22;
});
console.log(resultOne);


//findIndex возвращает номер в позиции массива
let resultTwo = arr.findIndex(function (item, index, arra) {
  return item.age === 22;
});
console.log(resultTwo);

//filter
//метод ищет все элементы на которых функция-колбэк вернет true
/*
let result=arr.filter(function(item,index,array){
  если true элемет добавляется к результату и перебор продолжается
  возвращает пустой массив в случае если ничего не найдено

});
*/

let arrF = [
  { name: `васян`, age: 33 },
  { name: `колян`, age: 22, pol: `vertolet` },
  { name: `оля`, age: `не скажу` },
];

let resultFilter = arrF.filter(function (item, index, array) {
  //вернет массив с объектами больше или равные 18
  return item.age >= 18;
});
console.log(resultFilter);