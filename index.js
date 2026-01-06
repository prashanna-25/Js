// console.log("First JavaScript file");
// let name = "Prashanna Khanal";
// console.log(name);
// const x = null;
// console.log(x);
// let y = undefined;
// console.log(y);

// const student = {
//   name: "Prashanna Khanal",
//   age: 20,
//   cgpa: 8.5,
//   isPass: true,
// };

// console.log(student);
// console.log(student["age"]); //can print value of object using this
// console.log(student.isPass); //or this

// // can change const object's singular value
// student["name"] = "Khanal Prashanna";

// console.log(student.name);

// //get user to input a number using prompt ("Enter a number:"). Check if number is a multiple of 5 or not.

// // let number = prompt("Enter a number:");
// // if (number % 5 === 0) {
// //   console.log(number, "is multiple of 5.");
// // } else console.log(number, "is not multiple of 5");

// //
// //
// //
// //
// //
// //

// // Write a code which can give grades to students according to their scores:
// //   90-100, A
// //   70-89, B
// //   60-69, C
// //   50-59, D
// //   0-49, F

// let score = prompt("Enter score obtained(0-100):");

// if (score <= 100 && score >= 90) console.log("You got an 'A'");
// else if (score <= 89 && score >= 70) console.log("You got an 'B'");
// else if (score <= 69 && score >= 60) console.log("You got an 'C'");
// else if (score <= 59 && score >= 50) console.log("You got an 'D'");
// else if (score <= 49 && score >= 0) console.log("You got an 'F'");
// else console.log("Enter valid Marks!!");

// let price1 = 10;
// let price2 = 12;

// output = `Total price is: ${price1 + price2} rupees`; //template literals use backticks (`)
// console.log(output);

// for (let i in student) {
//   console.log(i); //prints key of object
//   console.log(student[i]); //prints values of key
// }

// for (i of name) {
//   console.log(i);
// }

// //print all even numbers from 0-100

// for (i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log("even num =", i);
//   }
// }

// //create a guessing game

// let guess = 7;
// let userGuess = prompt("Guess a number between 1-10");
// while (userGuess != guess) {
//   userGuess = prompt("You guessed the wrong number, Guess again!");
// }
// console.log("You guessed the number.");

// let newName = name.toUpperCase();
// console.log(newName);
// console.log(name.toLowerCase());
// let trimExample = "        Hello   World    ";
// console.log(trimExample.trim());

// let fName = "Prashanna";
// let lName = "Khanal";

// let fullName = fName.concat(lName);
// console.log(fullName);

// // ask user for full name and create a username for the user

let fullName = prompt("Enter your full name:");
fullName = fullName.replaceAll(" ", "");
let length = fullName.length;
let initial = "@";

let userName = `Your username is ${
  initial.concat(fullName.toLowerCase()) + length
}`;
console.log(userName);
