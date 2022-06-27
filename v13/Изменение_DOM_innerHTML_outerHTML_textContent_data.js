//изменение документа

//содержимое элемента innerHTML

//получаем объект
const textElement = document.querySelector(`.lesson_text`);

//получаем содержимое объекта "как есть" вместе с HTML
const textElementContent = textElement.innerHTML;
console.log(textElementContent);

//перезаписываем содержимое объекта
//textElement.innerHTML = `какой то текст`
//значение на странице сменилось но в константе по прежему старое значение