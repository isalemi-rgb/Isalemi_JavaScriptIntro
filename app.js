console.log("Hello World!")

//var no good no mo? ;{
//const is a variable that can never change, its constant and never changing, and var is better
//const age = 32;



//test

//let is a variable that can be changed and altered whenever, and var is better
let username = null;


//username = "isalemi-rgb"

username = prompt("enter username.");
console.log(username);

if (username != "isalemi-rgb") {
    console.log("invalid username");

} else if (username = "isalemi-rbg"){
    console.log("valid username");
}

//test



//let sum = 0;
//sum = 4 + 5;
//console.log(sum);

//const fnum = 3;
//const snum = 9;
//let sum = fnum + snum;
//console.log(sum);

// "+=" adds to the = value to itself
//console.log(sum+=20)
//should only add one to variable, not working tho-
//console.log(sum++);



//const hello = prompt("say hello to who?");
//cancatanation.....holy spelling-

//const message = ("hello " + hello);
console.log("Hello " + username)
//these two are the same^^



const num = prompt("enter num");
//if number it does math
console.log(Number(num) + 2);
//treats as string and adds to the end
console.log(num + 2);