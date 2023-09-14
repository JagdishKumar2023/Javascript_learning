// // let x;

// // x = 10;

// // let y;

// // y = 3;

// // let z;

// // z = x + y;

// // console.log(z);

// //====OPRATORS (heading)

// // let x = 5; //number
// // let y = "5"; //string

// // let a = "hello";
// // let b = "World";

// // console.log(a+b) ;
// // console.log(a + " " + b);

// // let x = 5; //string

// // let z = (x + 5) / 5;

// // console.log(z);

// //===boolen : true or fales

// // let x = 2 > 3;

// // console.log(x);

// //===array

// // let  = ["vishwajeet", "tom", "john"];

// //====IF ELSE CONDITION

// // let age = 12;
// // let hasVotercard = "yes ";

// // if (age >= 14 && hasVotercard == "Yes") {
// //   alert("You can vote!");
// // } else if (age >= 14 && hasVotercard != "Yes") {
// //   alert("Get Your voter id card !");
// // } else {
// //   alert("you cannot Vote!");
// // }

// // let isloggedin = 0; //if 0 loggedout if 1 login

// // if (isloggedin == 0) {
// //   document.write("login");
// // } else {
// //   document.write("logout");
// // }

// // let option = isloggedin == 0 ? "Logout" : "Login";
// // // condition                   true      false
// // document.write(option);

// //===JAVASCRIPT SWITCH

// // if input = 1, "y", "yes" output = continue...

// // if input = 0, "n" , "no" output = End ...

// // let input;

// // input = "y";

// // if (input === 1) {
// //   document.write("continue...");
// // } else if (input === "y") {
// //   document.write("continue...");
// // } else if (input === "yes") {
// //   document.write("continue...");
// // } else if (input === "0") {
// //   document.write("End...");
// // } else if (input === "n") {
// //   document.write("End...");
// // } else if (input === "no");
// // document.write("End...");

// //===COMPARISON (SWITCH)

// // switch (input) {
// //   case 1: // if(input === 1)
// //     document.write("continue...");
// //     break;
// //   case "y": // if (input === "y")
// //     document.write("continue...");
// //     break;
// //   case 0:
// //     document.write("End...");
// //     break;
// //   case "n":
// //     document.write("End...");
// //     break;
// //   case "no":
// //     document.write("End...");
// //     break;
// //   default:
// //     document.write("Worng input");
// // }

// //===WHILE LOOP (HEADING)

// // let counter = 4;

// // while (counter <= 16) {
// //   document.write("techgun");
// //   counter++;
// // }

// //===DO WHILE

// // do {
// //   document.write("techGun");
// //   counter++;
// // } while (counter <= 20);

// // let counter = 1;
// // let sum = 0;

// // while (counter <= 1000) {
// //   if (counter % 2 == 0) {
// //     sum = sum + counter;
// //   }
// //   counter++;
// // }

// // document.write(sum);

// // for (let counter = 4; counter <= 9; counter++) {
// //   document.write("techGun");
// // }

// // ===BREAK CONTINUE AND NESTED LOOP

// // for (let counter = 15; counter <= 21; counter++) {
// //   if (counter == 22) {
// //     break;
// //   }
// //   document.write(counter);
// //   document.write("<br>");
// // }

// // ===CONTINUE

// // for (let counter = 1; counter <= 10; counter++) {
// //   if (counter == 5) {
// //     continue;
// //   }
// //   document.write(counter);
// //   document.write("<br>");
// // }

// ===NASTED LOOP

// for (let counter = 1; counter <= 10; counter++) {
//   document.write(counter);
//   document.write("<br>");

//   for (let counter2 = 1; counter2 < 3; counter2++) {
//     document.write("counter2");
//     document.write("<br>");
//   }
// }

// let age = prompt("Enter your age", 20);

// if (age !== null) {
//   document.write(`Your Age is ${age}`);
// } else {
//   document.write("Age field was Blank");
// }

// let response = confirm("Are You sure, You want to  Deleted");

// if (response) {
//   document.write("Deleted");
// } else {
//   document.write("Not Deleted");
// }

// ===DOUT SESSION

// let counter = 1;
// // counter = counter + 1;
// counter++;
// counter++;
// // counter = counter - 1;
// counter--;

// for (let count_num = 10; count_num >= 1; count_num--) {
//   console.log(count_num);
// }

// (dry run)

// ===TYPE CONVERTION

// let type = "HI" + " GOOD" + " BYE";
// console.log(type);
// console.log(typeof type);

// 1. Sting()
// 2. Number()
// 3. Boolean()

// let Name = "sonu";
// console.log(typeof Name);

// let Newtype = String(type);
// console.log(typeof Newtype);

// let type = false;
// console.log(typeof type); //old

// let NewType = Number(type);
// console.log(NewType);
// console.log(typeof NewType); //New

// ===STRING MANUPULATION

// space-between = // |  \t | \n |

// let str = "Jagdish \n  kumar ";

// let str = "Jagdish \t  kumar ";

// let str = "Jagdish  kumar ";

// let greek = `Hi ${str}`;

// console.log(greek);

// ===CONCATINATE

// let str = "Jagdish";

// let str2 = "Kumar";

// console.log(str + " " + str);

// let str = "Jagdish";

// let str2 = "Kumar";

// let str3 = str.concat(str2);
// console.log(str3);

// ===Javascript is case sensetive  small is small or capital is captical)

// let str = "vishwajeet";

// if ("vishwajeet" == str) {
//   console.log("Equal");
// } else {
//   console.log("Not Equal");
// }

// ===SUBSTRING

// let str = "This is javascript tutorial. Its is a good tutorial.";

// let substring = str.substring(8, 18);

// console.log(substring);

// ===POSITION

// let str = "This is javascript tutorial. Its is a good tutorial.";

// let POSITION = str.indexOf(is);

// console.log(POSITION);

// let sonu = "my goal to achive a good job ";

// let POSITION = sonu.indexOf("goal");

// console.log(POSITION);

// ===CAPITAL OR SMALL LETTER

// let str = "This is javascript tutorial. Its is a good tutorial.";

// let trimedStr = str.toUpperCase();

// console.log(str);
// console.log(trimedStr);

// ==REPLACEMENT

// let str = "This is javascript tutorial. Its is a good tutorial.";

// let trimedStr = str.replace("good", "best");

// console.log(str);
// console.log(trimedStr);

// ===INDCLUDES

// let str = "This is javascript tutorial. Its is a good tutorial.";

// let trimedStr = str.includes("html");

// console.log(str);
// console.log(trimedStr);

// ===INTERVIEW QUESTIONS (IMPORTANT)

// true = 1
// false = 0

// ==(DATA TYPE)

// console.log(true + true);
// console.log(false + true);
// console.log(false - true);
// Number;number
// String; string
// Boolean; boolean
// undefined; undefined
// Array; object
// Object; object
// null; object
// console.log(typeof "");

// let my_name = "jagdish kumar";
// let my_city = "khandwa";

// // console.log("my name is" + " " + my_name);

// // literal template / string interpolation:-

// console.log(`my name is ${my_name}, my city is ${my_city}`);

// ===VARIABLE

// let book1 = "Math";
// let book2 = "physics";
// let book3 = "Bio";
// let book4 = "computer science";

// console.log(book3);

// ===ARRAY(form basic)

// let book = ["Math", "Physic", "Bio", "Computer science"];

// let asset = [1, 3, 40.3, 100];

// let book = new Array["maths", "Physic","Bio","Computer science"];

// console.log(book);

// ===OPERATION ON ARRAY IN JAVASCRIPT

// ==(UNSHIFT)

// let book = ["Maths", "Physics", "Bio", "Computer Science"];

// book.unshift("Hindi");

// console.log(book[1]);

// ==(POP) (LAST WALA REMOVE HO JAYGA)

// let book = ["Maths", "Physics", "Bio", "Computer Science"];

// book.pop();

// console.log(book);

// ==(SPLICE)

// let book = ["Maths", "Physic", "Bio", "Computer Science"];

// book.splice(1, 2);

// console.log(book);

// ==(ARRAY.ISARRAY)

// let book = ["Maths", "Physics", "Bio", "Computer science"];

// let book = "Maths";

// console.log(Array.isArray(book));

// ==(WORDARRAY) (GAP BETWEEN WORDS) (-, 's' ,  )

// let text = "This is a random text";

// let wordarray = text.split("s");

// console.log(wordarray);

// ==(CONCATINATE MULTIPLES ARRAY)

// let book = ["Maths", "Physics", "Bio", "Computer Science"];

// let book2 = ["Hindi", "English"];

// let book3 = ["Punjabi", "Urdu"];

// let NewBook = book.concat(book2, book3);

// console.log(NewBook);

// ==(MULTI DIMENSION ARRAY)

// let book = ["Math", "physics", "Bio", "Computer Science"];

// let bookwithPages = [
//   ["Math", ["300", "500"]],
//   ["Physics", "500"],
//   ["Bio", "400"],
// ];

// let fetch = bookwithPages[0][1];

// console.log(fetch);

// ==(FOR LOOP ARRAY)

// let book = ["Math", "Physics", "Bio", "Comupter Science"];

// let booklength = book.length;

// for (i = 0; i < booklength; i++) {
//   console.log(`Element ${i} is ${book[i]} \n`);
// }

// book.forEach(myfu);

// function myfu(value) {
//   console.log(value);
// }

// ===FUNCTION

// function MulTable() {
//   for (i = 1; i <= 10; i++) {
//     document.write(`2 x ${i} = ${2 * i}`);
//     document.write("<br><br>");
//   }
// }

// MulTable();

// ===PARAMETERS AND ARGUMENT

// function MulTable(num) {
//   for (i = 1; i < 11; i++) {
//     document.write(`${num} x ${i} = ${num * i}`);
//     document.write("<br>");
//   }
// }

// MulTable(8);

// document.write("<br>");

// MulTable(5);

// function add(num1, num2) {
//   document.write(num1 + num2);
// }

// add(5, 7);

// ==( THE ARGUMENTS OBJECT )

// function add() {
//   console.log(arguments.length);
// }

// add(5, 7);
// add(5, 7, 8);
// add(5, 7, 2, 6);

// function add() {
// console.log(arguments[0]);
// }

// add(5, 7);
// add(5, 7, 8);
// add(5, 7, 2, 6);

// ==Lets add funtion into variable (arguments)

// function add() {
//   if (arguments.length === 0) {
//     console.log("No arugments passed !");
//   } else {
//     let sum = 0; //2
//     for (let i = 0; i < arguments.length; i++) {
//       sum = sum + arguments[i];
//     }
//     console.log(sum);
//   }
// }

// let addition = add;

// addition(5);
// add(5, 7, 10);

// ===RETURN VALUE

// function add(a, b) {
//   let d = [2, 3, 4, 6];
//   return d;
// }

// let c = add(5, 5);

// document.write(c);

// ==(Campare Return)

// function compare(a, b) {
//   if (a > b) {
//     return 1;
//   } else if (b > a) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// let c = compare(5, 5);

// document.write(c);

// ===GOBAL VARIABLE VS LOCAL VARIABLE

// let car = "Audi"; //Gobal Variable

// function add() {
//   let result = 13; //Local Variable
//   console.log(result);
// }

// function sub() {
//   let result = 20;
//   console.log(result);
// }

// add();
// sub();

// ===ANONYMOUS FUNCTIONS

// let show = function () {
//   console.log("Hello World!");
// };

// show();

// function show() {
//   console.log("Hello!");
// }

// setTimeout(show, 2000); // 2000 Miliseconds

// setTimeout(function () {
//   console.log("Hello!");
// }, 2000); // 2000 Miliseconds

// ===IMMEDIATELY INVOKED FUNCTION

// let string = "hello";

// (function () {
//   let string = "Hello";
//   console.log(string);
//   alert(string);
// })();

// (function () {
//   let msg = "Hello third party";

//   function greet() {
//     console.log(msg);
//   }

//   greet();
// })();

// ===OBJECT PROPERTIES

// let person = {
//   firstName: "Jagdish",
//   lastName: "Kumar",
// };

// person.age = 25;

// person.firstName = "Jagdish";

// delete person.lastName;

// console.log("age" in person);

// ==(FOR IN LOOP)

// let person = {
//   firstName: "Jagdish",
//   lastName: "Kumar",
// };

// person.age = 25;

// for (let key in person) {
//   console.log(key);
// }

// let person = {
//   firstName: "Jagdish",
//   lastName: "Kumar",
// };

// person.age = 25;

// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// ===(KEYWORD)

// let person = {
//   firstName: "Jagdish",
//   lastName: "Kumar",
//   sayHello() {
//     console.log(
//       "Hello ! I am " + this.firstName + " and  I have a " + car.brand
//     );
//   }
// };

// let car = {
//   brand: "Tata car",
//   model: "Safari",
// };

// person.sayHello();

// ===MATHS OBJECT(ROUND)

// var x = Math.round(5.7);

// console.log(x);

// ==(Math.ceil)

// var x = Math.ceil(4.9);

// console.log(x);

// ==(TRUNC)

// var x = Math.trunc(7.2);

// console.log(x);

// ==(Power)

// var x = Math.pow(2, 5);

// console.log(x);

// ==(square Root)

// var z = Math.sqrt(10);

// console.log(z);

// ==(Max and Min Number)

// var x = Math.max(4, 50, 40);

// console.log(x);

// var y = Math.min(40, 20, 5, 70);

// console.log(y);

// ===GENERATE RANDOM NUMBER

// let y = Math.floor(Math.random() * 10); // 1 to 10

// console.log(y);

// function getRandom(min, max) {
//   let x = Math.floor(Math.random() * (max - min + 1)) + min;
//   return x;
// }

// // console.log(getRandom(11, 30));

// function addNumber(a, b) {
//   // here a and b are parameters
//   let c = a + b;
//   return c;
// }
// console.log(addNumber(2, 3)); // here 2 and 3 are arguments

// function subNumber(a, b) {
//   let c = a - b;
//   console.log(c);
// }

// subNumber(5, 3);

// (function iife(a, b) {
//   console.log(a + b);
// })(3, 2);

//===INTERVIEW QUESTION

// let obj_user_profile = {
//   user_name: "jagdish", // key : value
//   age: 23,
//   address: {
//     city: "khandwa",
//     state: "MP",
//     country: {
//       country_code: +91,
//     },
//   },
// };
// console.log(obj_user_profile.user_name);

// console.log(obj_user_profile.address.city);

// console.log(obj_user_profile.address.country.country_code);

// let {
//   // destructuring
//   address: {
//     country: { country_code },
//   },
// } = obj_user_profile;

// console.log(country_code);

//===DATE OBJECT

// let x = new Date ();

// let x = new Date("September 13, 2023 11:14:33");

// // console.log(x.getTime());

// // x.setSeconds(3);

// // x.setHours(10);

// console.log(x);

//==DATE TYPE==

// let x = new Date("September 13, 2023 11:12:33");

// let y = x.setDate(x.getDate() + 17);

// console.log(x);

// let x = new Date("september 15, 2023 11:49:20");

// x.setDate(x.getDate() + 30);

// console.log(x);

// let x = new Date("September 13, 2023 11:12:55");

// let y = new Date("September 13, 2023 12:14:20");

// y.setDate(x.getDate() + 40);

// console.log(x);
// console.log(y);

let x = new Date();
let y = new Date();

if (y > x) {
  console.log("x is past date");
} else if (x > y) {
  console.log("x is future date");
} else {
  console.log("x is same date");
}
