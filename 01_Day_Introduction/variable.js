// Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

// string
const title = "Janakshan";

// boolean
const isTrue = false;

//undefined
let isUndefined;

//null
const isNull = null;

//Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

console.log([
  {
    string: title,
    type: typeof title,
  },
  {
    string: isTrue,
    type: typeof isTrue,
  },
  {
    string: isUndefined,
    type: typeof isUndefined,
  },
  {
    string: isNull,
    type: typeof isNull,
  },
]);

// 6. Declare four variables without assigning values

let test_1;
let test_2;
let test_3;
let test_4;

test_1 = "some";

console.log(test_1, test_2, test_3, test_4);

// 7.Declare four variables with assigned values

let firstName = "Krish";
let lastName = "Janakshan";
let age = 30;
let isMale = true;

console.log({
  firstName,
  lastName,
  age,
  isMale,
});

// Declare variables to store your first name, last name, marital status, country and age in a single line
let firstNameSome = "Janaksan",
  lastNameSome = "Krish",
  maritalStatusSome = "married",
  country = "Srilanka";

// 10.Declare two variables myAge and yourAge and assign them initial values and log to the browser console.
let myAge = 25;
let yourAge = 30;

let result = ` I am ${myAge} years old. You are ${yourAge} years old.`;

console.log("result :>> ", result);
