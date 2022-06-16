// поиск произвольного элемента

//проверка matches

/*
ничего не ищет а проверяет удовлетворяет ли элемент css-селектору и возвращает true | false
*/

const elems = document.querySelectorAll(`.lesson_item-list`)
for (let elem of elems) {
  if (elem.matches(`[class$="lesson_item-list-red"]`)) {
    console.log(`красный`);
  } else if (elem.matches(`[class$="lesson_item-list-blue"]`)) {
    console.log(`синий`);
  }
}

/*
стоит добавить что получи объект тем или иным способом мы можем примеять свойства навигации о кторых оворили ране
*/

const text = document.querySelector(`.lesson_text`);
console.log(text);
const list = text.nextElementSibling;
console.log(list);