// let x;

// x = 10;

// let y;

// y = 3;

// let z;

// z = x + y;

// console.log(z);

//====OPRATORS (heading)

// let x = 5; //number
// let y = "5"; //string

// let a = "hello";
// let b = "World";

// console.log(a+b) ;
// console.log(a + " " + b);

// let x = 5; //string

// let z = (x + 5) / 5;

// console.log(z);

//===boolen : true or fales

// let x = 2 > 3;

// console.log(x);

//===array

// let  = ["vishwajeet", "tom", "john"];

//====IF ELSE CONDITION

// let age = 17;
// let hasVotercard = "yes ";

// if (age >= 14 && hasVotercard == "Yes") {
//   alert("You can vote!");
// } else if (age >= 14 && hasVotercard != "Yes") {
//   alert("Get Your voter id card !");
// } else {
//   alert("you cannot Vote!");
// }

// let isloggedin = 0; //if 0 loggedout if 1 login

// if (isloggedin == 0) {
//   document.write("login");
// } else {
//   document.write("logout");
// }

// let option = isloggedin == 0 ? "Logout" : "Login";
// // condition                   true      false
// document.write(option);

//===JAVASCRIPT SWITCH

// if input = 1, "y", "yes" output = continue...

// if input = 0, "n" , "no" output = End ...

// let input;

// input = "y";

// if (input === 1) {
//   document.write("continue...");
// } else if (input === "y") {
//   document.write("continue...");
// } else if (input === "yes") {
//   document.write("continue...");
// } else if (input === "0") {
//   document.write("End...");
// } else if (input === "n") {
//   document.write("End...");
// } else if (input === "no");
// document.write("End...");

//===COMPARISON (SWITCH)

// switch (input) {
//   case 1: // if(input === 1)
//     document.write("continue...");
//     break;
//   case "y": // if (input === "y")
//     document.write("continue...");
//     break;
//   case 0:
//     document.write("End...");
//     break;
//   case "n":
//     document.write("End...");
//     break;
//   case "no":
//     document.write("End...");
//     break;
//   default:
//     document.write("Worng input");
// }

//===WHILE LOOP (HEADING)

// let counter = 12;

// while (counter <= 16) {
//   document.write("techgun");
//   counter++;
// }

//===DO WHILE

// do {
//   document.write("techGun");
//   counter++;
// } while (counter <= 15);

// let counter = 1;
// let sum = 0;

// while (counter <= 1000) {
//   if (counter % 2 == 0) {
//     sum = sum + counter;
//   }
//   counter++;
// }

// document.write(sum);

// for (let counter = 4; counter <= 9; counter++) {
//   document.write("techGun");
// }

// ===BREAK CONTINUE AND NESTED LOOP

// for (let counter = 15; counter <= 21; counter++) {
//   if (counter == 22) {
//     break;
//   }
//   document.write(counter);
//   document.write("<br>");
// }

// ===CONTINUE

// for (let counter = 1; counter <= 10; counter++) {
//   if (counter == 5) {
//     continue;
//   }
//   document.write(counter);
//   document.write("<br>");
// }

// ===NASTED LOOP

// for (let counter = 1; counter <= 10; counter++) {
//   document.write(counter);
//   document.write("<br>");

//   for (let counter2 = 1; counter2 < 3; counter2++) {
//     document.write("techgun");
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

//===DOUT SESSION

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

//===TYPE CONVERTION

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

//===STRING MANUPULATION

// space-between = // |  \t | \n |

// let str = "Jagdish \n  kumar ";

// let str = "Jagdish \t  kumar ";

// let str = "Jagdish  kumar ";

// let greek = `Hi ${str}`;

// console.log(greek);

//===CONCATINATE

// let str = "Jagdish";

// let str2 = "Kumar";

// console.log(str + " " + str

// let str = "Jagdish";

// let str2 = "Kumar";

// let str3 = str.concat(str2);
// console.log(str3);

//===Javascript is case sensetive (smal2);l is small or capital is captical)

// let str = "vishwajeet";

// if ("vishwajeet" == str) {
//   console.log("Equal");
// } else {
//   console.log("Not Equal");
// }

//===SUBSTRING

// let str = "This is javascript tutorial. Its is a good tutorial.";

// let substring = str.substring(8, 18);

// console.log(substring);

//===POSITION

// let str = "This is javascript tutorial. Its is a good tutorial.";

// let Position = str.indexOf(is, 7);

// console.log(POSITION);

// let sonu = "my goal to achive a good job ";

// let POSITION = sonu.indexOf("goal");

// console.log(POSITION);

//===CAPITAL OR SMALL LETTER

// let str = "This is javascript tutorial. Its is a good tutorial.";

// let trimedStr = str.toUpperCase();

// console.log(str);
// console.log(trimedStr);

//==REPLACEMENT

// let str = "This is javascript tutorial. Its is a good tutorial.";

// let trimedStr = str.replace("good", "best");

// console.log(str);
// console.log(trimedStr);

//===INDCLUDES

// let str = "This is javascript tutorial. Its is a good tutorial.";

// let trimedStr = str.includes("html");

// console.log(str);
// console.log(trimedStr);
