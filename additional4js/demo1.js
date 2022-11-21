// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function numbers(a, b, c) {
//   if (a < b && a < c) {
//     console.log(a)
//   }else if (b < c && b < a) {
//     console.log(b)
//   }else if (c < a && c < b){
//     console.log(c)
//   }else {
//     console.log('Error')
//   }
// }
//  numbers(47, 23,54)


//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function numbers(a, b, c) {
//   if (a > b && a > c) {
//     console.log(a)
//   }else if (b > c && b > a) {
//     console.log(b)
//   }else if (c > a && c > b){
//     console.log(c)
//   }else {
//     console.log('Error')
//   }
// }
// numbers(47, 23,54)


// - створити функцію яка повертає найбільше число з масиву
// function numbers(a, b, c) {
//   if (a > b && a > c) {
//    return a
//   }else if (b > c && b > a) {
//     return b
//   }else if (c > a && c > b){
//    return c
//   }else {
//     return 'error'
//   }
// }
// let numbers1 = numbers(47, 23,54)
// console.log(numbers1)


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const arr = [12, 34, 2, 56]
// function num(array) {
// let sum = 0
//   for (const item of array) {
//     sum += item
//   }
//   return sum/array.length
// }
// console.log(num(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function foo(...arguments) {
//   let min = arguments[0]
//   let max = arguments[0]
//   for (const item of arguments) {
//    if (item < min){
//      min = item
//    }
//    if (item > max){
//      max = item
//    }
//   }
//   console.log(max)
//   return min;
// }
// let foo1 = foo(12, 43, 8, 32, 15)
// console.log(foo1);

// - створити функцію яка заповнює масив рандомними числам
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let arr = [1,4,6,80,9,34]
// function numbers()  {
//   for (let i = 0; i < 10 ; i++) {
//     arr[i] = Math.round(Math.random()*100)
//   }
//   console.log(arr);
// }
// numbers();

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let arr = [3,4,6,78,5,3,9,8]
// function foo(limit) {
//   for (let i = 0; i < limit; i++) {
//     arr[i] = Math.round(Math.random()*100)
//   }
//   console.log(arr);
// }
// foo(19)


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1]. !
// let arr = [1,2,3]
// function foo(array) {
//   let newArray = []
//   for (let i = newArray.length - 1, j = 0; i >= 0;) {
//      newArray[j++] = array[i--];
//   }
//   return newArray;
// }
// console.log(foo(arr));


// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// const foo = (...arguments) => arguments.length === 2 ? arguments[0] + arguments[1] : arguments[0];
// let foo1 = foo('q')
// console.log(foo1);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
// [1,2,3,4]
//   [2,3,4,5]
// результат
//   [3,5,7,9]
// const arr1 = [1,2,3]
// const arr2 = [1,2,3,4]
// function foo(array1, array2) {
//   let res = []
//   let xxx = array1.length >= array2.length ? array1 : array2;
//   for (let i = 0; i < xxx.length; i++) {
//     res[i] = (array1[i] || 0) + (array1[i] || 0)
//   }
//   return res
// }
// console.log(foo(arr1, arr2));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// const arr = [
//   {name: 'Dima', age: 13},
//   {model: 'Camry'}
//   ]
//
// function foo(array) {
//   let newArray = []
//   for (let i = 0, j = 0; i < array.length; i++) {
//     for (const item in array[i]) {
//       newArray[j++] = item
//
//     }
//   }
//   return newArray
// }
//
// console.log(foo(arr));




