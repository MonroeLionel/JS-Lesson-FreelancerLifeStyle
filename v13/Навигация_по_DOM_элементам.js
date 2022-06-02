//навигация по документу

/*
самые верхние элементы дерева
доступны как свойства объекта document
*/

const htmlElement = document.documentElement;
const headElements = document.head;
const bodyElements = document.body;
console.log(htmlElement);
console.log(headElements);
console.log(bodyElements);

//получаем объект body
//const htmlElement = document.documentElement;
const firrstChildNode = bodyElements.firstChild;
const lastChildNode = bodyElements.lastChild;

console.log(firrstChildNode);
console.log(lastChildNode);
/*
в документе возможено есть еще "какой то HTML код"
но на момент выполнения скрипта браузер еще до его не дошел по этому следует размещать скрипт в самом конце
*/

//коелкция childNodes содержит список всх детей
//включая текстовые узлы
const childNodes = bodyElements.childNodes;
console.log(childNodes);

//для проверки наличия дочерних узлов
//существует так же специальная функция hasChildNodes()
console.log(bodyElements.hasChildNodes);

/*
ка мы уже видели 
childNodes похож на массив но на самом деле это не массив
а коллекция особый перебираемый объект псевдомассив

отличия от массивов
1 для перебора колеции мы можем использовать for...of
2 методы массивов е будут рабоать потому что
колекция это не массив
*/

//перебор коллекции

for (let node of childNodes) {
  console.log(node); //покажет все узлы из колекции
}

//живые колецкии
/*
почти все DOM-колекции за небольшим исключение "живые"
другими слова они отражают текущее состояние DOM
если мы сохраним ссылку на body.childNodes и добавим\удалим
узлы в DOM то они появятся в сохраненной коллекции автоматически
еще вернемся к этому позже
*/

//только для чтения
/*
DOM-колекция и даже более все навигационные свойства
перечисленные далее доступны только для чтения
мы не можем заменить один дочерний узел на другой
просто написов childNodes[i]=...
для изменения DOM требуются другие методы
*/

//соседние и родительские узлы
const previoysSiblingNode = bodyElements.previousSibling;
const nextSiblingNode = bodyElements.nextSibling;
const parentNode = bodyElements.parentNode;

console.log(previoysSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);

/*
навигационнные свойства описаные выше относятся 
ко всем узлам  в документе
в частности в childNodes находится и такстовые узлы и узлы-элементы и узлы-коментарии если они есть
*/

//получаем коллекцию всех дочерних узлов
const childNodes2 = bodyElements.childNodes;
console.log(`дочерние элементы `);
console.log(childNodes2);

/*
но для большинства задач текстовые узлы и 
узлы-комментарии нам не нужны мы хотим манипулировать
узлами-элементами которые представляют собой теги и формируют структуру страницы
*/

//получаем коллекцию всех дочерних элементов

const bodyChildren = bodyElements.children;
console.log(bodyChildren);

//первый и последний дочерние элементы
const firstChildEltments = bodyElements.firstElementChild;
const lastChildElements = bodyElements.lastElementChild;
console.log(firstChildEltments);
console.log(lastChildElements);

//соседние и родительские элементы
const previousSiblingElements = bodyElements.previousElementSibling;
const nextSiblingElements = bodyElements.nextElementSibling;
const parentElements = bodyElements.parentElement;
console.log(previousSiblingElements);
console.log(nextSiblingElements);
console.log(parentElements);