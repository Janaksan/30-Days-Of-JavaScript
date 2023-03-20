// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Krishnamoorthy";
let lastName = "Janakshan";
let country = "SriLanka";
let city = "Jaffna";
let age = 30;
let isMarried = false;
let bYear = 1994;

let data = [firstName, lastName, country, city, age, isMarried, bYear];

data.forEach((element) => {
  console.log(typeof element);
});

// Check if type of '10' is equal to 10
console.log(typeof "10" == typeof 10);

// Check if parseInt('9.8') is equal to 10

console.log(parseInt("9.8") === 10);

// Write three JavaScript statement which provide truthy value
let myArray = [];
let myObj = {};
let sm = "0";

console.log(myArray ? "truthy" : "falsy");
console.log(myObj ? "truthy" : "falsy");
console.log(sm ? "truthy" : "falsy");

// Write three JavaScript statement which provide falsy value.

let num = 0;
let sec = null;
let un = undefined;

console.log(num ? "truthy" : "falsy");
console.log(sec ? "truthy" : "falsy");
console.log(un ? "truthy" : "falsy");

// 4 > 3 && 10 < 12;
// true && true = true
console.log(4 > 3 && 10 < 12);

// 4 > 3 && 10 > 12;
// true && false = false
console.log(4 > 3 && 10 > 12);

// 4 > 3 || 10 < 12;
// true || true = true
console.log(4 > 3 || 10 < 12);

// 4 > 3 || 10 > 12;
// true || false = true
console.log(4 > 3 || 10 > 12);

/** !(4 > 3); */
// false
console.log(!(4 > 3));

/* !(4 < 3) */
// true
console.log(!(4 < 3));

/* !false; */
// true
console.log(!false);

/* !(4 > 3 && 10 < 12) */
// true && true = true
/* !true */
//false
console.log(!(4 > 3 && 10 < 12));

/* !(4 > 3 && 10 > 12); */
// true && false = false
/* !false */
//true
console.log(!(4 > 3 && 10 > 12));

/* !(4 === "4"); */
// true
console.log(!(4 === "4"));

// 4 > 3;
// true
console.log(4 > 3);

// 4 >= 3;
console.log(4 >= 3);

// 4 < 3;
// false
console.log(4 < 3);

// 4 <= 3;
//false
console.log(4 <= 3);

// 4 == 4;
//true
console.log(4 == 4);

// 4 === 4;
//true
console.log(4 === 4);

// 4 != 4;
// false
console.log(4 != 4);

// 4 !== 4;
// false
console.log(4 !== 4);

// 4 != "4";
//false
console.log(4 != "4");

// 4 === "4";
//false
console.log(4 === "4");

let python = "python";
let jargon = "jargon";

console.log(python == jargon);

// What is the year today?
let cDate = new Date();
console.log(cDate.getFullYear());

//What is the month today as a number?
console.log(cDate.getMonth());

// What is the date today?
console.log(cDate.getDate());

// What is the day today as a number?
console.log(cDate.getDay());

// What is the hours now?
console.log(cDate.getHours());

// What is the minutes now?
console.log(cDate.getMinutes());


//Find out the numbers of seconds elapsed from January 1, 1970 to now.