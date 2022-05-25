//синтаксис
//создание объекта

let userInfoTest1 = new Object(); //синтаксис "конструктора объекта"
let userInfoTest2 = {} //синтаксис "литерал объекта"

//свойство объектов: ключь + значение

let usetInfo = {
  name: "vasan", //свойство объекта
  age: 30,       //последняя (висячая) запятая
}
console.log(usetInfo);
console.log(usetInfo.name);

//имена свойств
//имена из двух и более слов
let userInfo1 = {
  name: "vasan",
  age: 30,
  "pvpv ili zasal": true,
};
console.log(userInfo1);
console.log(userInfo1['pvpv ili zasal']);

//вычисляемое либо передаваемое имя
//вычисляем имя
let nameTestPart = "like";
let userInfo2 = {
  name: "vasan",
  age: 30,
  [nameTestPart + " stepan"]: true,
};
console.log(userInfo2["like stepan"]);

//передаем имя
let nameTestPart1 = "lol prou";
let userInfo3 = {
  name: "васян",
  age: 30,
  [nameTestPart1]: true,
};
console.log(userInfo3[nameTestPart1]);

//квадратные скобки
let key = "name";
console.log(userInfo3[key]);//можно использовать переменную как ключ
//можно использовать зарезирвированые слова в названии ключа
let nameTestPart2 = {
  let: "vasan",
  for: 30,
};
console.log(nameTestPart2.for);
console.log(nameTestPart2.let);

//в именах можно использовать как строки так и символы
let userInfo4 = {
  0: "vasan", //0 тоже самое что "0"
  4: 0,
}
console.log(userInfo4[0]);
console.log(userInfo4[4]);
console.log(userInfo4["0"]);

//тип данных symbol
//создаем символ id с описание (именем) "ID"
let id = Symbol("ID");
let userInfo5 = {
  name: "vasan",
  age: 30,
  [id]: "некое значение",
};
console.log(userInfo5);

//основное применение символов 
//1 "скрытые" свойства объектов
//  символьное своейство не появится в for..in
//2 использование системных символов
//  symbol.iterato , symbol.toPrimitive и т.д.

//вложеность
let userInfo6 = {
  name: "vasan",
  age: 30,
  address: {
    city: "яма",
    strreet: "выгребаня"
  }
}
console.log(userInfo6);
console.log(userInfo6.address);
console.log(userInfo6.address.strreet);

//свойство переменной
function makeUserInfo(name, age) {
  return {      //функция должна возвращать
    name: name,
    age: age,
    //могут быть и другие
  };
}
let user = makeUserInfo("vasan", 30);
console.log(user);
//кооткая запись
function makeUserInfo1(name, age) {
  return {      //функция должна возвращать
    name,
    age,
    "vugrebnaua ayma": true, //могут быть и другие
  };
}
let user1 = makeUserInfo1("васян", 30);
console.log(user1);

//добавление свойства
let userInfo7 = {
  name: "степан",
}
console.log(userInfo7);
userInfo7.age = 30;
console.log(userInfo7);
userInfo7['двойное имя'] = true;
console.log(userInfo7);
userInfo7.address = {
  city: "выгребная",
  street: "яма",
};
console.log(userInfo7);

//удаление свойства
let userInfo8 = {
  name: 'vasan',
  age: 30,
  'duble sos': true,
}
console.log(userInfo8);
delete userInfo8.age;
console.log(userInfo8);
delete userInfo8["duble sos"];
console.log(userInfo8);

//изменение свойств
let userInfo9 = {
  name: "vasan",
  age: 30,
}
console.log(userInfo9);
userInfo9.age = 18;
console.log(userInfo9);
//можно изменять свойства объкта даже в константе
const userInfo10 = {
  name: 'vasan',
  age: 30,
}
console.log(userInfo10);
userInfo10.age = 11;
console.log(userInfo10);
//прикопировании объекта в другу. переменную
//сам объект не дублируется а копирутся только ссылка на него
let userInfo11 = {
  name: "vasan",
  age: 30,
}
console.log(userInfo11);
let userCopy = userInfo11;
console.log(userCopy);
userCopy.age = 11;
console.log(userCopy);
console.log(userInfo11);

//дублирование объктов
//синтаксис
// Object.assign(куда(объект),что(свойство№1),что(свойство№2)...)
let userInfo12 = {
  name: "stepan",
  age: 30,
}
let dublikat = Object.assign({}, userInfo12); //создаем пустой массив и помещаем в него уже готовы массив
dublikat.age = 12;
console.log(userInfo12);
console.log(dublikat);
//добавление через Object
let userInfo13 = {
  name: 'vasan',
  age: 30,
}
//пишем имя объекта ставим {} и в нутри них пише пару ключ значение через запятую
Object.assign(userInfo13, { ['двойное свойство']: true, city: "яма" })
console.log(userInfo13);

//проверка существования свойства
let userInfo14 = {
  name: 'vasan',
  age: 30,
}
console.log(userInfo14.age); //вернет undefine если свойства нет
if (userInfo14.age) {//возвращает true или false
  console.log(userInfo14.age); //выведет только если свойство есть
}

//опциональная проверка
let userInfo15 = {
  name: "vasan",
  age: 22,
  //addres: {
  //citi: "яма",
  //street: "выгребная"
  // }
}
//console.log(userInfo15.addres.citi); //выдает ошибку
console.log(userInfo15?.addres?.street); //вернет undefine

//оператор in
let userInfo16 = {
  //name: 'vasan',
  age: 33,
}
if ("name" in userInfo16) { //имя ключа всегда берут в кавычки
  console.log(userInfo16.name); // ничего не вернет код не выполнится 
}
//проверка существования свойства
/*
оператор in
в большинстве случае сработает сравнение с undefine
Либо опциональная цепочка  "?"
но есть особый случай когда свойство существует
но содержит значение undefine
в этом случае необходимо использовать "in"
*/
console.log("текст");

let userPrimer = {
  name: undefined
  //другие свойства
}
if (userPrimer.name) { //тут проверка вернет false и ничего не выведет
  console.log(userPrimer.name);
}

if ("name" in userPrimer) { //свойство есть и покажет его значение
  console.log(userPrimer.name);
}

//цикл for ..in
//для перебора всех свойств объекта используется цикл for..in
//этот цикл отличается от изученного цикла for(;;)
/*
for(let key in Object){
тело цикла выполняется для каждого свойства объекта
} 
*/

let userTest = {
  name: 'vasan',
  age: 30,
  address: {
    city: "мухосранск",
    stree: "яма"
  }
}

for (let key in userTest) {
  //ключи
  console.log(key); //name,age,address
  //значения ключей
  console.log(userTest[key]);//vasa,30,object
}

for (let key in userTest.address) {
  //ключи
  console.log(key); //city,street
  //значения ключей
  console.log(userTest.address[key]);//мухосранск яма
}

//методы объектов
let userInfo17 = {
  name: "vasan",
  age: 33,
  address: {
    city: "muxosransk",
    street: "yzma",
  },
  showInfo: function () {
    console.log(`${userInfo17.name},${userInfo17.age} лет Адресс:г.${userInfo17.address.city} улица${userInfo17.address.street}`)
    //вместо имени ${userInfo17.name} можно использовать запись ${this.name}
    //будет иметься имя текущего объекта обращается к первому родительскому объекту

  }
}
userInfo17.showInfo();

//функция конструктор
/*
обычный синктасис создания объкта{....} позволяет создавать
только один объект. Но зачастую нум нужно создать множество
однотипных объектов таких как польватели элементы меню и т.д.
это можно сделать при помощи функции конструктора и оператора "new"
*/
/*
функции конструктор являются обычными функциями
но есть два правила
1 имя функции констрруктора должно начинатся с большой буквы
2 функция конструтор должна вызываться при помощи
оператора "new"
*/

function Userinfo(name) {
  //this={}; создается пустой объект (неявно)
  this.name = name;
  this.age = 30;
  //return this; возвращает объект (неявно)
}
console.log(new Userinfo('Ваян'));
console.log(new Userinfo('степан'));
