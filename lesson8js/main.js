// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone ) {
  this.id = id
  this.name = name
  this.surname = surname
  this.email = email
  this.phone = phone
  }
  let user1 = new User(1, 'olga', 'kalyets', 'olga12@gmail.com', +380959349918 )
console.log(user1);
let user2 = new User(2, 'ulia', 'prochuk', 'ulia3@gmail.com', +380678903245 )
console.log(user2);
let user3 = new User(3, 'vlad', 'bjbjk', 'fvnnnmjk@gmail.com', +380959349918 )
console.log(user3);
let user4 = new User(4, 'vasya', 'lkj', 'nggjj@gmail.com', +380678903245 )
console.log(user4);
let user5 = new User(5, 'taia', 'lkml', 'sxdcfvg@gmail.com', +380959349918 )
console.log(user5);
let user6 = new User(6, 'anna', 'fgjvbkk', 'jgvn@gmail.com', +380678903245 )
console.log(user6);
let user7 = new User(7, 'alex', 'ubknbbnlj', 'iljk12@gmail.com', +380959349918 )
console.log(user7);
let user8 = new User(8, 'igor', 'gyjftcdrx', 'sxdc3@gmail.com', +380678903245 )
console.log(user8);
let user9 = new User(9, 'ira', 'gvkjlb', 'gvjb@gmail.com', +380959349918 )
console.log(user9);
let user10 = new User(10, 'tonia', 'guvjkjb', 'jgvbb@gmail.com', +380678903245 )
console.log(user10);
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let arrayUser = []
arrayUser.push(user10, user9, user8, user7, user6, user5, user4, user3, user2,user1)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = arrayUser.filter(value => value.id % 2 ===0)
console.log(filter);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortid = arrayUser.sort((a,b) => b.id - a.id)
console.log(sortid);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
  constructor(id, name, surname , email, phone, order) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    this.order = order
  }
}
let client1 = new Client(1, 'olga', 'kalyets', 'olga12@gmail.com', +380959349918,  [1])
console.log(client1);
let client2 = new Client(2, 'ulia', 'prochuk', 'ulia3@gmail.com', +380678903245, [1,2,3,4,5,6,7,8,9,10] )
console.log(client2);
let client3 = new Client(3, 'vlad', 'bjbjk', 'fvnnnmjk@gmail.com', +380959349918, [1,2,3,4,5,6,7,8])
console.log(client3);
let client4 = new Client(4, 'vasya', 'lkj', 'nggjj@gmail.com', +380678903245, [1,2] )
console.log(client4);
let client5 = new Client(5, 'taia', 'lkml', 'sxdcfvg@gmail.com', +380959349918, [1,2,3,4,5,6,7] )
console.log(client5);
let client6 = new Client(6, 'anna', 'fgjvbkk', 'jgvn@gmail.com', +380678903245, [1,2,3,4,5,6,7,8,9] )
console.log(client6);
let client7 = new Client(7, 'alex', 'ubknbbnlj', 'iljk12@gmail.com', +380959349918, [1,3,3,5] )
console.log(client7);
let client8 = new Client(8, 'igor', 'gyjftcdrx', 'sxdc3@gmail.com', +380678903245, [1,2,3] )
console.log(client8);
let client9 = new Client(9, 'ira', 'gvkjlb', 'gvjb@gmail.com', +380959349918, [1,2,3,4,5,6] )
console.log(client9);
let client10 = new Client(10, 'tonia', 'guvjkjb', 'jgvbb@gmail.com', +380678903245, [1,2,3,4] )
console.log(client10);
// створити пустий масив, наповнити його 10 об'єктами Client
let arrayClient = []
arrayClient.push(client10, client9,client8, client7, client6, client5, client4, client3, client2, client1)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortorder = arrayClient.sort((a,b) => a.order.length - b.order.length)
console.log(sortorder);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, year, maxspeed, enginecapacity) {
//   this.model = model
//   this.producer = producer
//   this.year = year
//   this.maxspeed = maxspeed
//   this.enginecapecity = enginecapacity
//
//   this.enginecapacity = function () {
//     console.log(`їдемо зі швидкістю ${maxspeed} на годину`);
//   }
//
//
//   this.info = function () {
//     for (const carKey in this) {
//       if (typeof this(carKey) !== 'function'){
//       }
//     }
//   }
//
//   this.increaseMaxSpeed = function (newSpead){
//     this.newSpead = newSpead;
//   }
//
//   this.changeYear = function (newValue) {
//     this.year = newValue
//   }
//
//   this.addDriver = function (driver) {
//     this.driver = driver
//   }
//
// }
//
// let car = new Car('Porsche', 'Germany', 2021, 230, 4143)
// car.enginecapacity();
// car.increaseMaxSpeed(350);
// car.changeYear(2022);
// car.addDriver({name: 'tom'});
// console.log(car);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
  constructor(model, producer, year, maxspeed, enginecapacity) {
    this.model = model
    this.producer = producer
    this.year = year
    this.maxspeed = maxspeed
    this.enginecapecity = enginecapacity
  }
  enginecapacity = function () {
    console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
  }


  info = function () {
    for (const carKey in this) {
      if (typeof this(carKey) !== 'function'){
      }
    }
  }

  increaseMaxSpeed = function (newSpeed){
    this.newSpeed = newSpeed;
  }

  changeYear = function (newValue) {
    this.year = newValue
  }

  addDriver = function (driver) {
    this.driver = driver
  }


}
let car = new Car('Porsche', 'Germany', 2021, 230, 4143)
car.enginecapacity();
car.increaseMaxSpeed(350);
car.changeYear(2022);
car.addDriver({name: 'tom'});
console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Cinderella(name, age, footSize) {
  this.name = name
  this.age = age
  this.footSize = footSize
}
let cinderella1 = new Cinderella('anya', 23, 36)
console.log(cinderella1);
let cinderella2 = new Cinderella('alla', 19, 37)
console.log(cinderella2);
let cinderella3 = new Cinderella('vika', 21, 34)
console.log(cinderella3);
let cinderella4 = new Cinderella('vita', 27, 36)
console.log(cinderella4);
let cinderella5 = new Cinderella('kris', 25, 39)
console.log(cinderella5);
let cinderella6 = new Cinderella('kate', 28, 36)
console.log(cinderella6);
let cinderella7 = new Cinderella('elen', 22, 38)
console.log(cinderella7);
let cinderella8 = new Cinderella('emily', 25, 37)
console.log(cinderella8);
let cinderella9 = new Cinderella('vira', 18, 36)
console.log(cinderella9);
let cinderella10 = new Cinderella('claudia', 30, 39)
console.log(cinderella10);

let arrayCinderella = []
arrayCinderella.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10)

class Prince {
  constructor(name, age, findfootsize) {
    this.name = name;
    this.age = age
    this.findfootsize = findfootsize
  }
}
let prince1 = new Prince('vasya', 32, 34)
console.log(prince1);

let findcinderella = (arr, prince) => {
  for (const item of arr) {
    if (item.footSize === prince.findfootsize) {
      console.log(`my cinderella is ${item.name} `);
    }
  }
}
console.log(findcinderella(arrayCinderella, prince1));

let find = arrayCinderella.find(value => value.footSize === prince1.findfootsize)
console.log(find);
