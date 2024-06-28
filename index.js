//ES5
var person = "manoj";
person = "shyam";
console.log(person);

//ES6
//const
//let
// const area=12;

// console.log(area);

// let people="ram";
// people="sita";
// console.log(people);

// //alert("my name is mk");
// const age= prompt("how old are you");
// console.log(Number(age)); //Type conversion

// const isValid=confirm("are you about 18?");
// console.log(isValid);

//write a js program that ask user for principle, interest rate and time.
//alert the interest amount

//formula => ptr/100( r is in percentage)
// const principle =prompt("what is the principle amount?");
// console.log(Number(principle));
// const interest =prompt("what is the interest rate?");
// console.log(Number(interest));
// const time=prompt("what is the time?");
// console.log(Number(time));
// const si =(principle*interest*time)/100;
// console.log(Number(si));
// alert("the si amount is:"+si);

//statements
//write a js program that asks user for their gender (m/f).
// let gender = prompt("which gender are you male or female");

// // if(gender==="male"){
// //     alert('you are'+ gender);

// // }else if(gender== "female"){
// // alert('you are' +" "+ gender);
// }
// =assignment
// == (data type && data value)
// ===  data type ,data value and boolen

// gender === "male"
//   ? alert("you are male")
//   : gender === "female"
//   ? alert("you are female")
//   : alert("you are others");
// switch (gender) {
//   case "m":
//     alter("you are male");
//     break;
//   case "f":
//     alert("you are female");
//     break;
//   case "o":
//     alert("you are others");
//     break;
//   default:m
//     alert("invalid Gender");
// }
// alert("you are " + " " + gender);
// //write a js program to calculate the grade
// // >80 A
// //60-80 B
// const marks = prompt("enter your marks:");
// switch (true) {
//   case marks > 80:
//     alert("A");
//     break;
//   case marks >= 60 && marks <= 80:
//     alert("B");
//   default:
//     alert("invalid grade");
// }
// alert("you are " + " " + grade);

// write a js program to ask for usename and password
// if username matches ur name and password matches your name
//alert welcome 'Your name'
//alter invlaid credentials.

// const name = prompt("please enter your name");
// const username = prompt("please enter your username");
// const password = prompt("please enter your password");

// if (username === "name" && password === "name") {
//   alert("welcome!" + " " + name);
// } else {
//   alert("invalid credential:");
// }

//multiplication table of 12.
// let number = 12;
// do {
//   console.log(number);
//   number += 12;
// } while (number <= 120);

// // output : "Manoj Khati" // proper case
const fname = "manoj";
const lname = "khati";
console.log(fname.charAt(0).toUpperCase() + fname.slice(1));
console.log(lname.charAt(0).toUpperCase() + lname.slice(1));

const number = 10000;

const formattednum = number.toLocaleString();
console.log(formattednum); //OUTPUT 10,000
