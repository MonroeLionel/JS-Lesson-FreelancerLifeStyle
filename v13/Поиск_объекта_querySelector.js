//поиск произвольного элмента

//elem.qierySelector(CSS)
/*
возвращает первый элемент внутри elem соответсвующий данному CSS-селектору
*/

//const lessonList = document.querySelectorAll(`.lesson_list`)[0]
const lessonList = document.querySelector(`.lesson_list`);
/*
работает быстрее т.к. не нужно сначала искать все элементы и добавлять их в колекцию 
находит первое совпадение и возвращает его в константу
*/
console.log(lessonList);