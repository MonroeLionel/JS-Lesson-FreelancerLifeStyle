// BOM

//Navigaor

/*
с помощью объекта navigator
мы можем получить информацию о самом 
браузере и операционой системе
*/

//браузер
console.log(navigator.userAgent);

if (navigator.userAgent.includes("Chrome")) {
  console.log(`браузер хром`);
} else if (navigator.userAgent.includes("Firefox")) {
  console.log(`браузер фокс`)
}

//платформа
console.log(navigator.platform);

//Location
/*
с помощью обекта location мы можем
получить текущий URL или
перенаправить браузер по новому адресу
*/
//получаем URL
console.log(location.href);
//меняем URL
//location.href = "https://www.youtube.com/"; // при выполнении просто перенаправит на другю страницу

//history
/*
объект history позволяет
управлять историей браузера
передвигаться по посещенным раее старницам
*/

history.back();
history.forward();

//Alert
alert(`это alert`);

//confirm
const confirmResult = confirm(`это conferm`)
console.log(confirmResult); //тут можем получить булевое значение

//prompt
const promptResult = prompt(`это prompt`);
console.log(promptResult); //ответ пользователя так же хранится в переменой


