// Всі функції повинні бути описані стрілочним типом!!!!
//   - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let arr = [3, 44,-10]
// const minNumber = function (array) {
//   let min = array[0]
//   for (item of array)
//     if (item < min) {
//       min = item
//     }
//   return min
// }
// let minNumber1 = minNumber(arr)
//console.log(minNumber1)

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNumber = (num1, num2, num3) => {
//   if (num1 > num2 && num1 > num3) {
//     return num1
//   }else if (num2 > num1 && num2 > num3) {
//     return num2
//   }else if (num3 > num1 && num3 > num2)
//     return num3
// }
// console.log(maxNumber(23, 45, 13))

//- створити функцію яка приймає три числа та виводить найменше. (Без Math.min!)
// let minNumber = (num1, num2, num3) => {
//   if (num1 < num2 && num1 < num3) {
//     return num1
//   }else if (num2 < num1 && num2 < num3) {
//     return num2
//   }else if (num3 < num1 && num3 < num2)
//     return num3
// }
// console.log(minNumber(23, 45, 13))

// - створити функцію яка повертає найбільше число з масиву
// let arr = [3, 44,-10]
// const maxNumber = (array) => {
//   let max = array[0]
//   for (item of array)
//     if (item > max) {
//       max = item
//     }
//   return max
// }
// let maxNumber1 = maxNumber(arr)
// console.log(maxNumber1)

//- створити функцію яка повертає найменьше число з масиву
// let arr = [3, 44,-10]
// const minNumber = (array) => {
//   let min = array[0]
//   for (item of array)
//     if (item < min) {
//       min = item
//     }
//   return min
// }
// let minNumber1 = minNumber(arr)
// console.log(minNumber1)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [3, 6,65]
// const sumNumber = (array) => {
//   let sum = 0
//   for (const item of array) {
//     sum += item
//   }
//   return sum
// }
// let sumNumber1 = sumNumber(arr)
// console.log(sumNumber1)


//- Дано натуральное число n. Выведите все числа от 1 до n.
// let i = 0
// let n = 0
// while ( i < 9) {
//   i++
//   n += i
//   console.log(n)
// }

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// let A = 5
// let B = 0
// while (A < 13) {
//   A++
//   B += A
//   console.log(A)
// }


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//  EXAMPLE:
//  foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// indexSwap = (arr,index) => {
//   for(let i = 0;i < arr.length;i++){
//     if(arr[i] === index){
//       let next ,prev ;
//       arr[i] = next;
//       arr[i+1] = prev;
//       next = arr[i+1];
//       prev = arr[i+1];
//     }
//   }
//   return arr;
// }
// console.log(indexSwap([9,8,0,4], 0))

// const arr = [9,8,0,4]
// function foo(array, num) {
//   for (let i = 0; i < array.length ; i++) {
//     if (array[i + 1]) {
//       let temp = array[num];
//       array[num] = array[num + 1];
//       array[num + 1] = temp;
//     }
//   }
//   return array
// }
// console.log(foo(arr, 3));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень;
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// moveZeroesToTheEnd = arr => {
//   let zeros = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0){
//       zeros++
//       arr.splice(i, 1)
//       i--
//     }
//   }
//   for (let i = 0; i < zeros; i++){
//     arr.push(0)
//   }
//   return arr;
// };
// console.log(moveZeroesToTheEnd([1,0,6,0,3]))
// console.log(moveZeroesToTheEnd([0,1,2,3,4]))
// console.log(moveZeroesToTheEnd([0,0,1,0]))
