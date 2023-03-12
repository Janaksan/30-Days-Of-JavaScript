let word = "JavaScript";
word[0] = "K";
console.log(word);

// Primitive Data Types

let numOne = 3;
let numTwo = 3;

console.log("numOne === numTwo", numOne === numTwo);

let js = "JavaScript";
let py = "Python";

console.log("js === py", js === py);

let lightOn = true;
let lightOff = false;

console.log("lightOff == lightOn", lightOff == lightOn);

// Non-Primitive Data Types

let num = [1, 2, 3];

num[1] = 10;

console.log(num);

let numbs = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(numbs == numbers);

let objOne = {
  name: "Janakshan",
  role: "Teacher",
};

let objTwo = {
  name: "Janakshan",
  role: "Teacher",
};

console.log(objOne == objTwo);

// Rule of thumb, we do not compare non - primitive data types.Do not compare arrays, functions, or objects.
//     Non - primitive values are referred to as reference types,
//     because they are being compared by reference instead of value.
//     Two objects are only strictly equal if they refer to the same underlying object.

let numNumberOne = [1, 2, 4];

console.log("numNumberOne", numNumberOne);

let numNumberTwo = numNumberOne;

console.log("numNumberTwo", numNumberTwo === numNumberOne);

// Declaring Number Data Types
let age = 4;
console.log("AGE", age, typeof age);

const gravity = 9.81;
console.log("gravity", gravity, typeof gravity);

// Math Object

//rounding
console.log("Round", Math.round(12.5));

// rounding down
console.log("Floor", Math.floor(12.9));

// rounding up
console.log("CEIL", Math.ceil(12.3));

// min
console.log("Min", Math.min(0, 1, -1, 2, 3));

//max
console.log("Min", Math.max(0, 1, -1, 2, 3));

//random
// random number between 0 to 0.999999
console.log("Random", Math.random());

// creates random number between 0 and 10
console.log("0-10", Math.floor(Math.random() * 11));

//Absolute value
console.log("Absolute", Math.abs(-10));

//Square root
console.log("Square Root", Math.sqrt(100));

// random 0 -100
console.log("0-100", Math.floor(Math.random() * 100));

//String

let fullOfName = "Krish" + " " + "janakshan";

console.log("fullOfName", fullOfName);

const paragraph =
  "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.  \n \
\t I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \n \
\t  Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \n \
\t  In the end of 2019, I was thinking to expand my teaching and to reach \n \
\t  to global audience and I started a \\ 'Python challenge' from November 20 - December 19.\n \
\t  It was one of the most rewarding and inspiring experience.\n \
\t  Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \n  I hope you are enjoying too.";

console.log(paragraph);

console.log(
  "I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?"
); // line break

console.log("Days\tTopics\tExercises");

console.log("Day 1\t3\t5");
console.log("Day 2\t3\t5");
console.log("Day 3\t3\t5");
console.log("Day 4\t3\t5");

console.log("This is a backslash  symbol (\\)"); // To write a backslash

let string = "30 Days Of JavaScript";

console.log("string", string.split());
console.log("string", string.split(" "));

let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

console.log(countries.split(", "));

let stringSome = "   -30 Days Of JavaScript-   ";
console.log(stringSome);
console.log(stringSome.trim(" "));

let firstName = " Asabeneh ";
console.log(firstName);
console.log(firstName.trim()); // still removes spaces at the beginning and the end of the string

let mmmmStr = "30 Days Of JavaScript";

console.log(mmmmStr.includes("days"));

console.log("mmmStr", mmmmStr.replace("JavaScript", "Java"));
console.log("xcxc", mmmmStr.replace("30", "500"));

let myName = "Jaffna is";
console.log("chatAt", myName.charAt(1));

let name2 = "Janakshan";

console.log("name2", name2.charCodeAt(0));

console.log("indexOf", name2.indexOf("s"));

console.log("indexOf2", mmmmStr.indexOf("JavaScript"));

let love = "I ";

console.log("love:", love.concat("I", "love", "Java"));

let dora =
  "I love JavaScript. If you do not love JavaScript what else can you love.";

console.log("dora", dora.match("JavaScript"));

let myNew = "Janakshan";
console.log("myNew", myNew.repeat(10));

let counterNumber = "100.5";
console.log("counter", parseInt(counterNumber));

console.log("Number", Number(counterNumber));

console.log("parseFloat", parseFloat(counterNumber));
