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

let number = prompt("Enter a number:");
if (number % 5 === 0) {
  console.log(number, "is multiple of 5.");
} else console.log(number, "is not multiple of 5");
