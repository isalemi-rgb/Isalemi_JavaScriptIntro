const name = "Isabella Salemi"
const string1 = "Hello World! My name is "
const string2 = ", and what's your name?"
let username = prompt(string1 + name + string2)

console.log("Hello, " + username + "!")

console.log("Today it is " + new Date() + "!")


let num1 = 0
let num2 = 0
let num3 = 0
let add = 0
let average = 0

num1 = prompt("Please enter number 1")
num2 = prompt("Please enter number 2")
num3 = prompt("Please enter number 3")

console.log("Your numberss weree......")

console.log("Number One: " + num1)
console.log("Number Two: " + num2)
console.log("Number Three: " + num3)

add = Number(num1) + Number(num2) + Number(num3)

average = add / 3

console.log("The average of your three numbers isss............")

//console.log(add)

console.log(average)









//practice

//"let" is a variable that can be changed and altered whenever, and var is better
//let username = null;


//username = "isalemi-rgb"

//username = prompt("enter username.");
//console.log(username);

//if (username != "isalemi-rgb") {
//    console.log("invalid username");
//    prompt("enter username");
//    ^it doesn't loop^

//} else if (username = "isalemi-rbg"){
//    console.log("valid username");
//}