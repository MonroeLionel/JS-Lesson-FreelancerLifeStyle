//поиск произвольного элемента

//document.getElementById(ID) и elem.getElementsBy*
/*
на данный момент они используются редко
так как querySelectorAll может их заменить
но отличия есть
*/

//getElementsby*
/*
elem.getElementsbyTagName(tag)
ищут элементы с данным тегом и возвращает их
колекцию
передав "*" вместо тега можно получить всх потомков
*/

const elem = document.getElementsByTagName(`li`);
console.log(elem);

/*
elem.getElementsByClassName(className)
возвращает элементы которые имеют данный CSS класс
*/
const elem2 = document.getElementsByClassName(`lesson_item-list`);
console.log(elem2);


/*
document.getElementsByName(name) возвращаает элементы с заданным атрибутом name очень редко используется
поиск только в нутри document
*/
const elem3 = document.getElementsByName(`list`);
console.log(elem3);