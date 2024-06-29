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
console.log(
  fname.charAt(0).toUpperCase() +
    fname.slice(1) +
    " " +
    lname.charAt(0).toUpperCase() +
    lname.slice(1)
);

const number = 1000000;

const formattednum = number.toLocaleString();
console.log(formattednum); //OUTPUT 10,000

//function
//fn declare
const sum = (a, b) => {
  return a + b;
};
//fun execution
const result = sum(110, 200);
console.log(result);

/*
1.default function
2.parameterized func
3.closure
4.IIFE
5.explict function
6.implicit func
7.Anonymous func
8.Inline func
*/
//1.default dunc
const pagging = (num = 5) => {
  console.log(num);
};
pagging(1); //1
pagging(); // undefined and now 5 after num=5

//4 IIFE
(() => {
  console.log("hello");
})();

//explicit func

const suum = (a, b) => {
  return a + b;
};
const r = suum(12, 12);
console.log(r);

//implicit func
const sam = (a, b) => a + b;
console.log(sam);

//write js func that reverse a num. ex= 32243 output=34223
const reverseString = (num) => {
  let numstr = num.toString();
  let stringStr = numstr.split("").reverse().join("");
  console.log(Number(stringStr));
};
reverseString(32243);
// console.log(res);

//implicit method
const reverser = (num) => Number(num.toString().split("").reverse().join(""));
const ans = reverser(32243);
console.log(ans);

//wa js p to convert temperature to and from celsius , fahrenheit.

//[formula: c/5 = {f-32}/9 [where c = temperature in celsius and f= temperature in fahrenheit ]]

const tempConv = (temp, deg = "c") => {
  console.log(temp, deg);
  if (deg === "c") {
    return ((temp - 32) * 5) / 9;
  } else {
    return (temp / 5) * 9 + 32;
  }
};

const resp = tempConv(60, "f");
console.log(resp);
