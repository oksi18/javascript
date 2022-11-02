//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//         0   1        2        3         4      5     6         7       8       9
let arr = [22, true, 'hello', [33, 42], '324', false, 'true', [98,3,10], 100900, 'bye'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

//try
//let arr = [22, true, 'hello', [33, 42]];
//console.log(arr.length)
//arr[4] = 324
//console.log(arr)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book = {
  title: 'Girl online',
  pageCount: 353,
  genre: 'romantic drama',
  author: {
    name: 'Zoe Sugg',
    age: 32,
  }
}
console.log(book)
console.log(book.title)
console.log(book['pageCount'])
console.log(book.genre)
console.log(book.author)
console.log(book.author.name)
console.log(book['author'].age)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let person = [
  {name:'katerina', username: 'kate12', password:'kateri12na'}, //0
  {name:'alexandr', username: 'pan_sashko', password:'alexbrat01'}, //1
  {name:'khristina', username: 'kris17', password:'cutygirl99'}, //2
  {name:'oksana', username: 'oksi18', password:'oksana04'}, //3
  {name:'josef', username: 'jo_09', password:'freedom44'}, //4
  {name:'victoria', username: 'tori31', password:'vika13h'}, //5
  {name:'maxim', username: 'max_bmx', password:'maxdrive56'}, //6
  {name:'andrey', username: 'andre32', password:'pathos1'}, //7
  {name:'dmytriy', username: 'dima_gamer', password:'1diga2'}, //8
  {name:'davyd', username: 'dateam', password:'5434'}, //9
]
console.log(person)

console.log(person[0].password)
console.log(person[1].password)
console.log(person[2].password)
console.log(person[3].password)
console.log(person[4].password)
console.log(person[5].password)
console.log(person[6].password)
console.log(person[7].password)
console.log(person[8].password)
console.log(person[9].password)




