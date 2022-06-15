//поиск произвольного элемента

//document.getElementById(ID) и elem.getElementsBy*
/*
на данный момент они используются редко
так как querySelectorAll может их заменить
но отличия есть
*/

//document.getElementById(ID)
/*
если у элемента есть атрибут ID
то мы можем получить его вызовом document.getElementById(id) где бы он не находился 
*/

const elem = document.getElementById(`listItem`);
console.log(elem);
/*
1 id- уикален
2 поиск только вутри document
*/