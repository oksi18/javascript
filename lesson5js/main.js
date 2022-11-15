//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle( longer , shorter) {
//   let result = longer*shorter
//   return result
// }
// let x = rectangle(20, 12)
// console.log(x)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle(r, P) {
//   let result = P*r*r
//   return result
// }
// let x = circle(5, 3.14)
// console.log(x)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function topper(r, h, P){
//   let result = 2*P*r*h
//   return result
// }
// let x = topper(3, 7, 3.14)
// console.log(x)

// - створити функцію яка приймає масив та виводить кожен його елемент
// function arrayPrinter (arr) {
//   for (const item of arr) {
//     console.log(item)
//   }
// }
// arrayPrinter([32, 18, 20])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function text(){
//   console.log(arguments)
// }
// text('<p>I love oktenweb.</p>')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function addhtml(text){
//   document.write(`<ul>
//
//          <li>${text}</li>
//          <li>${text}</li>
//          <li>${text}</li>
//
//      </ul>`)
// }
// addhtml('i love oktenweb')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function addhtml(text, counter) {
//   document.write('<ul>')
// for (let i = 0; i < counter; i++) {
//   document.write(`<li>${text}</li>`)
//   }
//   document.write('</ul>')
// }
//  addhtml('i love oktenweb', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let asd = [11, 'education', false]
// function smth(arr) {
//   document.write(`<ul>`)
//   for (const item of arr) {
// document.write(`<li>${item}</li>`)
//   }
//   document.write(`</ul>`)
// }
// smth(asd)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let user = [
//   {
//     id: 1,
//     name: 'Oksana',
//     age: 18
//   },
//   {
//     id:2,
//     name: 'Sasha',
//     age: 21
//   }
// ]
// function userPrinted(arr) {
//   for (const item of arr) {
//     document.write(`<div>${item.id}${item.name}${item.age}</div>`)
//   }
// }
// userPrinted(user)

//- створити функцію яка повертає найменьше число з масиву
// function minNumber(num) {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i]<num[0]) {
//       num[0] = num[i]
//     }
//   }
//   console.log(num[0])
// }
// let numbers = [12, 66,34,435]
// minNumber(numbers)

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let calculator = (a, b, c) => {
//   let result = a+b+c
//   return result
// }
// let x = calculator(2, 15, 17)
// console.log(x)
