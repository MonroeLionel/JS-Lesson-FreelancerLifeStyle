//получаем статическую коллекцию
const listStatic = document.querySelectorAll(`.lesson_item-list`);

//получаем живую коллекцию
const listlive = document.getElementsByClassName(`lesson_item-list`);

console.log(listStatic);
console.log(listlive);


//создаем новый HTML-объект
const lessonList = document.querySelector(`.lesson_list`);
console.log(lessonList);
lessonList.insertAdjacentHTML("beforeend",
  '<li class="lesson_item-list">Новый пункт</li>');