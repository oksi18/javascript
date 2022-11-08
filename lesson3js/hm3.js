




//- Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//let x = 9
//console.log(x)
//x = +prompt("write munber")
//if (x > 0) {
//document.write("<h1>Вірно</h1>")
// }else if (x < 0) {
 // document.write("<h1>Невірно</h1>")}
let x = 9
if (x > 0) {
console.log("Вірно")
}else if (x < 0) {
console.log("Невірно")}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
//let time = 35
//time = +prompt("")
//console.log(time)
//if (time < 0) {
//  document.write("What do you mean?")
//}else if (time <= 15) {
//  document.write("1quarter")
//}else if (time <= 30) {
//  document.write("2quarter")
//}else if (time <= 45) {
//  document.write("3quarter")
//}else if (time < 60) {
//  document.write("4quarter")
//} else {
//  document.write("error")}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 28
//day = +prompt("")
if (day < 1) {
  console.log("Does not exist")
}else if (day <= 11) {
  console.log("first part")
}else if (day <= 21) {
  console.log("second part")
}else if (day <= 31) {
  console.log("third part")
}else {
  console.log("wrong")
}




//- Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//let a = +prompt("write number")
//let b = +prompt("write number 2")
//if (a > b) {
//  console.log("a")
//}else if (b > a) {
//  console.log("b")
//}else if (b === a) {
//  console.log("equal")}


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let xx = prompt() || "error"
console.log(xx)

