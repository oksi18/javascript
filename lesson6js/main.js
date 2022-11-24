// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world'
// console.log(str.length);
// let str1 = 'lorem ipsum'
// console.log(str1.length);
// let str2 = 'javascript is cool'
// console.log(str2.length);



//- Перевести до великого регістру наступні стрінгові значення // toUpperCase
//'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world'
// let ToUpperCase = str.toUpperCase();
// console.log(ToUpperCase);
// let str1 = 'lorem ipsum'
// let ToUpperCase1 = str1.toUpperCase();
// console.log(ToUpperCase1);
// let str2 = 'javascript is cool'
// let ToUpperCase2 = str2.toUpperCase();
// console.log(ToUpperCase2);


// - Перевести до нижнього регістру настипні стрінгові значення // toLowerCase
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str = 'HELLO WORLD'
// let ToUpperCase = str.toLowerCase();
// console.log(ToUpperCase);
// let str1 = 'LOREM IPSUM'
// let ToUpperCase1 = str1.toLowerCase();
// console.log(ToUpperCase1);
// let str2 = 'JAVASCRIPT IS COOL'
// let ToUpperCase2 = str2.toLowerCase();
// console.log(ToUpperCase2);




// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.//trim
// let str = ' dirty string   '
// console.log(str.length);
// let s = str.trim()
// console.log(s);
// console.log(s.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//   let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// let stringToarray = str.split('')
// console.log(stringToarray);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// let map = numbers.map(value => value.toString())
// console.log(map);




// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// let sortNums = (arr, direction ) => {
//   if (direction === 'ascending') {
//     arr.sort( (a, b) => a - b )
//   }
//   if (direction === 'descending') {
//     arr.sort( (a, b) => a - b)
//   }
//   return arr
// }
// console.log(sortNums( nums, 'ascending'));
// let nums = [11,21,3];
// console.log(nums.sort(function (a, b) {
//   return a - b
// }));


// - є масив
// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
// let filter = coursesAndDurationArray.filter(function (courses){
//   return courses.monthDuration > 5
// })
// console.log(filter);
// console.log(coursesAndDurationArray.sort(function (a, b) {
//   return b.monthDuration - a.monthDuration
// }));


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//   cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//   color:'', // 'red','black'
// }
// let deck = [
//   {cardSuit:'Spade', value: 6, color:'Black'},
//   {cardSuit:'Clubs', value: 6, color:'Black'},
//   {cardSuit:'Hearts', value: 6, color:'Red'},
//   {cardSuit:'Diamonds', value: 6, color:'Red'},
//   {cardSuit:'Spade', value: 7, color:'Black'},
//   {cardSuit:'Clubs', value: 7, color:'Black'},
//   {cardSuit:'Hearts', value: 7, color:'Red'},
//   {cardSuit:'Diamonds', value: 7, color:'Red'},
//   {cardSuit:'Spade', value: 8, color:'Black'},
//   {cardSuit:'Clubs', value: 8, color:'Black'},
//   {cardSuit:'Hearts', value: 8, color:'Red'},
//   {cardSuit:'Diamonds', value: 8, color:'Red'},
//   {cardSuit:'Spade', value: 9, color:'Black'},
//   {cardSuit:'Clubs', value: 9, color:'Black'},
//   {cardSuit:'Hearts', value: 9, color:'Red'},
//   {cardSuit:'Diamonds', value: 9, color:'Red'},
//   {cardSuit:'Spade', value: 10, color:'Black'},
//   {cardSuit:'Clubs', value: 10, color:'Black'},
//   {cardSuit:'Hearts', value: 10, color:'Red'},
//   {cardSuit:'Diamonds', value: 10, color:'Red'},
//   {cardSuit:'Spade', value: 'Jack', color:'Black'},
//   {cardSuit:'Clubs', value: 'Jack', color:'Black'},
//   {cardSuit:'Hearts', value: 'Jack', color:'Red'},
//   {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
//   {cardSuit:'Spade', value: 'Queen', color:'Black'},
//   {cardSuit:'Clubs', value: 'Queen', color:'Black'},
//   {cardSuit:'Hearts', value: 'Queen', color:'Red'},
//   {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
//   {cardSuit:'Spade', value: 'King', color:'Black'},
//   {cardSuit:'Clubs', value: 'King', color:'Black'},
//   {cardSuit:'Hearts', value: 'King', color:'Red'},
//   {cardSuit:'Diamonds', value: 'King', color:'Red'},
//   {cardSuit:'Spade', value: 'Ace', color:'Black'},
//   {cardSuit:'Clubs', value: 'Ace', color:'Black'},
//   {cardSuit:'Hearts', value: 'Ace', color:'Red'},
//   {cardSuit:'Diamonds', value: 'Ace', color:'Red'}
// ];
// console.log(deck.filter(value => value.cardSuit === 'Spade' && value.value === 'Ace'));
// console.log(deck.filter(value => value.value === 6));
// console.log(deck.filter(value => value.color === 'Red'));
// console.log(deck.filter(value => value.cardSuit === 'Diamonds'));
// let filter = deck.filter(value =>(value.cardSuit === 'Clubs' && value.value >= 9 ) ||
//   (value.cardSuit === 'Clubs' && typeof value.value === 'string'));
// console.log(filter);


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//   spades:[],
//     diamonds:[],
//   hearts:[],
//   clubs:[]
// }
// let reduce = deck.reduce((accum, value) => {
//   if (value.cardSuit === 'Spade') {
//     accum.spades.push(value);
//   } else if (value.cardSuit === 'Clubs') {
//     accum.clubs.push(value)
//   } else if (value.cardSuit === 'Diamonds') {
//     accum.diamonds.push(value)
//   } else if (value.cardSuit === 'Hearts') {
//     accum.hearts.push(value)
//   }
//   return accum;
// }, {
//   spades: [],
//   diamonds: [],
//   hearts: [],
//   clubs: []
// });
// console.log(reduce);

