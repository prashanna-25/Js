console.log("First JavaScript file");
let name = "Prashanna Khanal";
console.log(name);
const x = null;
console.log(x);
let y = undefined;
console.log(y);

const student = {
  name: "Prashanna Khanal",
  age: 20,
  cgpa: 8.5,
  isPass: true,
};

console.log(student);
console.log(student["age"]); //can print value of object using this
console.log(student.isPass); //or this

// can change const object's singular value
student["name"] = "Khanal Prashanna";

console.log(student.name);

//get user to input a number using prompt ("Enter a number:"). Check if number is a multiple of 5 or not.

// let number = prompt("Enter a number:");
// if (number % 5 === 0) {
//   console.log(number, "is multiple of 5.");
// } else console.log(number, "is not multiple of 5");

//
//
//
//
//
//

// Write a code which can give grades to students according to their scores:
//   90-100, A
//   70-89, B
//   60-69, C
//   50-59, D
//   0-49, F

let score = prompt("Enter score obtained(0-100):");

if (score <= 100 && score >= 90) console.log("You got an 'A'");
else if (score <= 89 && score >= 70) console.log("You got an 'B'");
else if (score <= 69 && score >= 60) console.log("You got an 'C'");
else if (score <= 59 && score >= 50) console.log("You got an 'D'");
else if (score <= 49 && score >= 0) console.log("You got an 'F'");
else console.log("Enter valid Marks!!");

let price1 = 10;
let price2 = 12;

output = `Total price is: ${price1 + price2} rupees`; //template literals use backticks (`)
console.log(output);
