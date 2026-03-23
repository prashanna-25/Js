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

// let fullName = prompt("Enter your full name:");
// fullName = fullName.replaceAll(" ", "");
// let length = fullName.length;
// let initial = "@";

// let userName = `Your username is ${
//   initial.concat(fullName.toLowerCase()) + length
// }`;
// console.log(userName);

// // find average marks of entire class of students -> [85, 97, 44, 37, 76, 60]

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// let avg = 0;
// for (i of marks) {
//   sum = sum + i;
// }

// avg = sum / marks.length;
// console.log(`Average marks of ${marks.length} students is ${avg}`);
// marks;

//
//
//
// // price of items [250, 645, 300, 900, 50]. apply 10% off on all items

// let price = [250, 645, 300, 900, 50];
// let i = 0;
// price.push(45); //array push
// console.log(`Initial price = ${price}`);
// for (let val of price) {
//   let off = val / 10;
//   price[i] = val - off;
//   i++;
// }
// console.log(`The updated price is ${price}`);
// price.pop();
// console.log(`The updated price after poping is ${price.toString}`);

// let marvelHeroes = [
//   "Thor",
//   "Ironman",
//   "Captain America",
//   "Hawkeye",
//   "Spiderman",
// ];
// let dcHeroes = ["Superman", "Batman", "Aquaman", "Flash"];

// marvelHeroes.unshift("Antman");

// popped = dcHeroes.shift();
// dcHeroes.push(popped);

// let heroes = marvelHeroes.concat(dcHeroes);

// console.log(
//   `Marvel Heroes are ${marvelHeroes} Then DC Heroes are ${dcHeroes} and finally all of the Heroes are ${heroes}`,
// );
// console.log(marvelHeroes.slice(1, 3)); //slices index no 1 and 2. 3 is excluded
// marvelHeroes.splice(2, 0, "Black Panther");
// console.log(marvelHeroes);

// //
// //
// // Practice arr=["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(arr);

// // remove first company
// arr.shift();
// console.log(arr);

// //remove uber and add Ola
// arr.splice(2, 1, "Ola");
// console.log(arr);

// //add Amaxon at end
// arr.push("Amazon");
// console.log(arr);

// //
// //
// //

// function add(a, b) {
//   s = a + b;
//   return s;
// }

// let sum = add(5, 2);
// console.log(sum);
// console.log(s);

// //
// //
// //

function print(a, b) {
  console.log(a, b);
}

// // Write JS program to delete all occurrences of element 'num' in a given array.
// // Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// // Result should be arr = [1, 3, 4, 5, 6, 3]

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;
// print(arr);
// print("num = " + num);
// for (i = 0; i < arr.length; i++) {
//   print(i, arr[i]);
//   if (arr[i] == num) {
//     arr.splice(i, 1);
//     i--;
//   }
// }
// print(arr);

// //
// //
// //

// // Write a JS program to find the no of digits in a Number.
// // Examole: if number = 287152, count = 6

// let number = 287152;
// let count = 0;

// while (number > 0) {
//   number = Math.floor(number / 10); //287152/10 = floor(28715.2) = 28715
//   count++;
// }

// print(count);

// //
// //
// //

// // Write a JS program to find the sum of digits in a number
// // Example: if number = 287152, sum = 25

// let num = 287152;
// let sum = 0;

// while (num > 0) {
//   sum += Math.floor(num % 10);
//   num = Math.floor(num / 10);
// }
// print(sum);

//
//
//

//Print factorial of a number n.

function fact(a) {
  f = 1;
  if (a === 0) {
    return 1;
  } else {
    for (i = 1; i <= a; i++) {
      f *= i;
    }
    return f;
  }
}

let n = 7;
print(n);
print("Factorial of " + n + "=" + fact(n));
