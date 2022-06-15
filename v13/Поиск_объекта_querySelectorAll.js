//поиск произвольного элемента

//eLem.querySwlwctorALL(CSS)
/*
самый универсальный метод поиска он
возвращает все элементы внутри eLem
этот метод действительно мощный
потому что можно использовть любой CSS-селектор
*/

//поиск по селектору класса
const elemsOne = document.querySelectorAll(`.lesson_list`); //перед именем класса мы обезетельно ставим точку 
console.log(elemsOne);

//поиск по селектору тега
const elemTwo = document.querySelectorAll(`li`); // тут собраны все теги li которые есть на странице
console.log(elemTwo);

//поиск по смешанному селктору тега и класса
const elemThree = document.querySelectorAll(`li.lesson_item-list`);
console.log(elemThree);

//поиск по тегу первого уровня вложенности
const elemFour = document.querySelectorAll(`.lesson_list>li`);
//будут найдены все li которые являются непосредственными дочерними элементами в нутри объекта lesson_list
console.log(elemFour);

//поиск по нескольким классам 
const elemFive = document.querySelectorAll(`.lesson_list, .lesson_text`);
console.log(elemFive);

//поиск по вложенным классам
const elemSix = document.querySelectorAll(`.lesson_list .lesson_text`);
console.log(elemSix);

//поиск по ID
const elemSeven = document.querySelectorAll(`#listItem`);
console.log(elemSeven);

//поиск по атрибуту 
const elemEight = document.querySelectorAll(`[data-item]`);
console.log(elemEight);

//поиск по атрибуту со значением
const elemNine = document.querySelectorAll(`[data-item="85"]`);
console.log(elemNine);

//получение конкретного элемента коллекции
const elems1 = document.querySelectorAll(`li`);
console.log(elems1[2]);

//перебираем элдементы 
for (const item of elems1) {
  console.log(item);
}
//можно перебрать как массив
elems1.forEach(item => { console.log(item) });


//поиск в нутри элементов
const subList = document.querySelectorAll(`.lesson_sub-list`); //получаем одномерный массив
console.log(subList);
const subItem = subList[0].querySelectorAll(`li`);
console.log(subItem);