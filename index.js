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

//4 IIFE((Immediately Invoked Function Expression))
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

// arrow function
// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
const palindrome = (str) => {
  let string = str.split("").reverse().join("");
  console.log(string);
};

palindrome("madam");

//implict func
const invfunc = (num) => num.toString().split("").reverse().join("");
invfunc(22334);

//3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

const combinationStr = (str) => {
  const combinations = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      combinations.push(str.slice(i, j));
    }
  }
  return combinations;
};
const resu = combinationStr("Dog");
console.log(resu);

//wa js p to convert temperature to and from celsius , fahrenheit.

//[formula: c/5 = {f-32}/9 [where c = temperature in celsius and f= temperature in fahrenheit ]]

const arrow = (num) => {
  console.log(num);
};
arrow(12);

//wap in js using fntion to convert  temp to  and from celsius farenheit

// // Function to convert Celsius to Fahrenheit
// function celsiusToFahrenheit(celsius) {
//   var fahrenheit = (celsius * 9) / 5 + 32;
//   return fahrenheit;
// }

// var celsiusTemp = prompt("Enter temperature in Celsius:", 0);
// var fahrenheitTemp = celsiusToFahrenheit(parseFloat(celsiusTemp));

// alert("The temperature in Fahrenheit is " + fahrenheitTemp);

// const tempc = (temp, degree = "c") => {
//   console.log(temp, degree);
//   if (degree === "c") {
//     return (f = (c * 9) / 5 + 32);
//   } else {
//     return ((temp - 32) * 5) / 9;
//   }
// };
// const resp = tempc(140, "f");
// console.log(resp);

//object
//CRUDE

//create obbject
// const laptop = {
//   model: "hp",
//   name: "hp victus", //key:value
//   isworkking: true,
//   modelYear: 2020,
//   specs: {
//     ram: 16,
//     sdd: "1TB",
//   },
//   age: () => {
//     return 2024 - laptop.modelYear;
//   },
//   fullName: () => {
//     console.log(this);
//     return this.model + laptop.name;
//   },
// }; //object  curly bracket thapesi es6
// //read
// const laptopmodel = laptop.model;
// const laptopage = laptop.age();
// const laptopnamee = laptop.fullName();

// console.log(laptopmodel, laptopage, laptopnamee);

//objet creation type es5?
//update
// laptop.model = "Ball";
// console.log(model);
//delete use nagarni

//destructure
// const laptop = {
//   model: "Acer",
//   name: "Nitro 5", //key:value
//   modelYear: 2020,

//   age: () => {
//     return 2024 - laptop.modelYear;
//   },
//   fullName: () => {
//     console.log(this);
//     return this.model + laptop.name;
//   },
// };
// //spread operator
// const { model, fullname, ...rest } = laptop;
// console.log(rest);

// const item = {
//   name: "headphones",
//   price: 77.84,
//   discount: "7%",
// };

// const price = item.price;

// if (price > 100) {
//   item.price *= 1 - 0.1;
// } else {
//   item.price *= 1 - 0.07;
// }

// console.log(item.price);
// //update the obj with new property -discount 7 or 10 % and new price
// // function updateItem(item) {
// //   const newPrice = calculateNewPrice(item.price);
// //   const newDiscount = newPrice > 100 ? "10%" : "7%";

// //   return {
// //     ...item,
// //     price: newPrice,
// //     discount: newDiscount,
// //   };
// // }

// // const updatedItem = updateItem(item);
// // console.log(updatedItem);

// const getnewproduct = (product) => {
//   const { price, discount, ...rest } = product;
//   const discountamt = price > 100 ? 0.1 * price : 0.07 * price;
//   rest.price = price - discountamt;
//   rest.discount = price > 100 ? "10%" : "7%";
//   return rest;
// };
// const newprod = getnewproduct(product);
// console.log(newprod);
//array
//crud
const classes = [];
//update
classes[0] = "Ma";
classes[1] = "noj";
classes[1] = "manoj";

console.log(classes);
console.log(classes[1]);
//delete
// delete classes[0];
//array method
console.log(classes.shift());
//method
classes.shift();
console.log(classes);
// const tempConv = (temp, deg = "c") => {
//   console.log(temp, deg);
//   if (deg === "c") {
//     return ((temp - 32) * 5) / 9;
//   } else {
//     return (temp / 5) * 9 + 32;
//   }
// };

// const resp = tempConv(60, "f");
// console.log(resp);

// //object
// // CRUD ( Create, Read ,Update , Detele)

// const mobile = {};
// console.log(typeof mobile);

// const laptop = {
//   model: "hp",
//   name: "victus",
//   isWorking: true,
//   modelYear: 2002,
//   age: () => {
//     return 2024 - modelYear;
//   },
//   fullName: function () {
//     return model + name;
//   },
// };

// //Read( use . to access the property)
// const laptopModel = laptop.model;
// const laptopAge = laptop.age();
// const laptopFullaName = laptop.fullName();
// console.log(laptopModel, laptopAge);

// //update
// laptop.model = "Ball";
// console.log(laptop);

// //Delete

// //
// const item = {
//   name: "headphones",
//   price: 77.84,
//   discount: "7%",
// };
// const price = item.price;
// if (price > 100) {
//   item.price *= 1 - 0.1;
// } else {
//   item.price *= 1 - 0.07;
// }

// let foodA=["Noodle","pasta","Ice-cream"];
// let foodB=["Fries", "Ice-cream", "Pizza"];

// let common

// sorting
// const classses = [
//   { name: "ram", age: 20 },
//   { name: "sita", age: 15 },
//   { name: "shyam", age: 40 },
// ];
// //sort by value
// const ageSorter = (arr) => {
//   return arr.sort((a, b) => a.age - b.age);
// };
// const results = ageSorter(classes);
// console.log(results);

// find the largest country by length
const countires = ["Nepal", "USA", "Australia"];
const lagrestCounty = (arr) => {
  return arr.sort((a, b) => a.length - b.length);
};
const sorted = lagrestCounty(countires);
const largest = sorted[sorted.length - 1];
console.log(sorted);
console.log(largest);

// sir ko soln

//Compare two roles and return boolen if role matches
const sysRole = ["admin", "manager"];
const userRole = ["user", "receptionist", "manager"];

const rolematch = (sysRole, userRole) => {
  return sysRole.some((role) => userRole.includes(role));
};
console.log(rolematch(sysRole, userRole));

// get the total number of character bye eye color
//{hint. a map of eye color to count}
//result {blue:2, brown:1, yellow:1}
//.reduce()
//Report (graph chart)

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// const totalMass=characters.reduce((acc,characters)=>)
