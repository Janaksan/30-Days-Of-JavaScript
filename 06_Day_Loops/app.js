for (let i = 0; i <= 5; i++) {
  console.log(i);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}
const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];

let cArray = [];

for (let i = 0; i < countries.length; i++) {
  cArray.push(countries[i].toUpperCase());
}

console.log("countries", countries);
console.log("cArray", cArray);

const numbers = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}

console.log("SUM = " + sum);

let otherArr = [];

for (let i = 0; i < numbers.length; i++) {
  otherArr.push(numbers[i] ** 2);
}

console.log("otherArr", otherArr);

let y = 0;

while (y <= 5) {
  console.log("Y" + y);
  y++;
}

let z = 0;

do {
  console.log("Z" + z);
  z++;
} while (z <= 5);

const numbersOther = [1, 2, 3, 4, 5];

for (const number of numbersOther) {
  console.log("numbersOther " + number);
}

for (let sNumber of numbersOther) {
  console.log(sNumber * sNumber);
}

//sum all numbers

let ssum = 0;
for (let ssSum of numbersOther) {
  ssum = ssum + ssSum;
}

console.log("Sum numbers : " + ssum);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (let webTech of webTechs) {
  console.log(webTech.toUpperCase());
}

//print first letter of the each array
for (let webTech of webTechs) {
  console.log(webTech[0]);
}

const countriesMy = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
let newCountryArr = [];

for (let oneContry of countriesMy) {
  newCountryArr.push(oneContry.toUpperCase());
}
console.log("newCountryArr", newCountryArr);

for (let i = 0; i <= 5; i++) {
  if (i === 4) {
    break;
  }

  console.log("Final break : ", i);
}

for (let i = 0; i <= 5; i++) {
  if (i === 0 || i === 3) {
    continue;
  }
  console.log(i);
}

//Exercises: Level 1
const countriesE = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechsE = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStackE = ["MongoDB", "Express", "React", "Node"];

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
  console.log(`FOR LOOP 0 to 10 : ${i}`);
}

let m = 0;
while (m <= 10) {
  console.log(`WHILE LOOP 0 to 10 : ${m}`);
  m++;
}

let j = 0;

do {
  console.log(`DO WHILE LOOP 0 to 10 : ${j}`);
  j++;
} while (j <= 10);

// 2.Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let x = 10; x > 0; x--) {
  console.log("I am here : " + x);
}

// 3.Iterate 0 to n using for loop

let cc = 3;
for (let zz = 1; zz <= cc; zz++) {
  console.log(zz);
}

// 4.Write a loop that makes the following pattern using console.log():
let str = "";
for (let i = 0; i <= 7; i++) {
  str += "*";
  console.log(str);
}

// 5.Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// 6.Using loop print the following pattern
// i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

for (let i = 0; i <= 10; i++) {
  console.log(`${i} - ${i ** 2} - ${i ** 3}`);
}

// 7.Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log("EVEN number : " + i);
  }
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 > 0) {
    console.log(`${i} is odd number`);
  }
}

//10. Use for loop to iterate from 0 to 100 and print only prime numbers

for (let i = 0; i <= 100; i++) {
  if (i / 1 || i / i) {
    console.log(`${i} is a prime number`);
  }
}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let totalSum = 0;
for (let i = 0; i <= 100; i++) {
  totalSum += i;
}

console.log("Total Sum is ", totalSum);

// 11.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let evenTotal = 0;
let oddTotal = 0;
let totalArray = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenTotal += i;
  }

  if (i % 2 > 0) {
    oddTotal += i;
  }
}

totalArray.push(evenTotal);
totalArray.push(oddTotal);

console.log(`Total Even numbers total = ${evenTotal}`);
console.log(`Total Odd numbers total = ${oddTotal}`);
//12 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

console.log(totalArray);

// 13.Develop a small script which generate array of 5 random numbers
let mathRandomNumber = [];
for (let i = 0; i < 5; i++) {
  mathRandomNumber.push(Math.floor(Math.random() * 10));
}

console.log("mathRandomNumber", mathRandomNumber);

// 14.Develop a small script which generate array of 5 random numbers and the numbers must be unique
let myRandom = [];

for (let i = 5; myRandom.length < i; ) {
  let gen = Math.floor(Math.random() * 10);
  if (myRandom.indexOf(gen) === -1) {
    myRandom.push(gen);
  }
}

console.log("myRandom", myRandom);

// 15:Develop a small script which generate a six characters random id:
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
// let charArray = chars.split("");
let ranCh = "";
for (let i = 0; i < 6; i++) {
  let ran = Math.floor(Math.random() * chars.length);
  ranCh += chars[ran];
}

console.log("ranCh", ranCh);

// Exercises: Level 2

//01. Develop a small script which generate any number of characters random id:

let myC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

let randomQ = Math.floor(Math.random() * myC.length);
let ranCht = "";

for (let i = 0; i <= randomQ; i++) {
  let rara = Math.floor(Math.random() * myC.length);
  ranCht += myC[rara];
}

console.log("ranCht", ranCht);

// 2.Write a script which generates a random hexadecimal number.

let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

console.log("color", color);

// 3.Write a script which generates a random rgb color number.
let a = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
let c = Math.floor(Math.random() * 255);

console.log(`rgb(${a}, ${b}, ${c})`);

const mtCountries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let mtCountriesNew = [];

// 4.Using the above countries array, create the following new array.

for (let i = 0; i < mtCountries.length; i++) {
  mtCountriesNew.push(mtCountries[i].toUpperCase());
}

console.log("mtCountriesNew", mtCountriesNew);

//5 . Using the above countries array, create an array for countries length'.

let counterArr = [];

for (let i = 0; i < mtCountriesNew.length; i++) {
  let sig = mtCountriesNew[i].length;
  counterArr.push(sig);
}
console.log("counterArr", counterArr);

// 6.Use the countries array to create the following array of arrays:
// [
//   ["Albania", "ALB", 7],
//   ["Bolivia", "BOL", 7],
//   ["Canada", "CAN", 6],
//   ["Denmark", "DEN", 7],
//   ["Ethiopia", "ETH", 8],
//   ["Finland", "FIN", 7],
//   ["Germany", "GER", 7],
//   ["Hungary", "HUN", 7],
//   ["Ireland", "IRE", 7],
//   ["Iceland", "ICE", 7],
//   ["Japan", "JAP", 5],
//   ["Kenya", "KEN", 5],
// ];

let mulArray = [];

for (let i = 0; i < mtCountries.length; i++) {
  let countryItem = mtCountries[i];
  let nomArray = [
    countryItem,
    countryItem.slice(0, 3).toUpperCase(),
    countryItem.length,
  ];
  mulArray.push(nomArray);
}

console.table(mulArray);

// 7.In above countries array, check if there is a country or countries containing the word 'land'.
// If there are countries containing 'land', print it as array.If there is no country containing the word
// 'land', print 'All these countries are without land'.
let landArr = [];
let withOutLand = [];
for (let i = 0; i < mtCountries.length; i++) {
  let incl = mtCountries[i];

  if (incl.includes("land")) {
    landArr.push(incl);
  } else {
    withOutLand.push(incl);
  }
}

console.log(landArr);
console.log(withOutLand);

let landArrP = [];
let withOutLandP = [];

for (myCountry of mtCountries) {
  myCountry.includes("land")
    ? landArrP.push(myCountry)
    : withOutLandP.push(myCountry);
}

console.log("first", { landArrP, withOutLandP });

// 8.In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let iACountry = [];
for (meCountry of mtCountries) {
  let lastTwoDegit = meCountry.slice(meCountry.length - 2);

  lastTwoDegit === "ia" && iACountry.push(meCountry);
}

console.log("iACountry", iACountry);

// 9.Using the above countries array, find the country containing the biggest number of characters.
let maxLen = 0;
let maxLenCou;
for (lenCountry of mtCountries) {
  if (lenCountry.length > maxLen) {
    maxLen = lenCountry.length;
    maxLenCou = lenCountry;
  }
}

console.log("maxLen", maxLen, maxLenCou);

// 10.Using the above countries array, find the country containing only 5 characters.
let nomCoun = [];
for (bbCountry of mtCountries) {
  if (bbCountry.length === 5) {
    nomCoun.push(bbCountry);
  }
}
console.log("nomCoun", nomCoun);

// 11.Find the longest word in the webTechs array

let longestWord = "";
let maxLenth = 0;

for (webTech of webTechs) {
  if (webTech.length > maxLen) {
    maxLenth = webTech.length;
    longestWord = webTech;
  }
}

console.log("longestWord", longestWord);

// 12.Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

let someMainArray = [];
for (webTech of webTechs) {
  someMainArray.push([webTech, webTech.length]);
}

console.log("someMainArray", someMainArray);

// 13.An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

let tecjhs = ["MongoDB", "Express", "React", "Node"];
let MERA = "";
for (tecjh of tecjhs) {
  MERA += tecjh.slice(0, 1);
}

console.log("MERA", MERA);

// 14.Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

let myLoos = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];

for (myLoo of myLoos) {
  console.log(myLoo.toUpperCase());
}

// 15.This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

let normalArrs = ["banana", "orange", "mango", "lemon"];

let reverseArray = [];
let ccL = 0;
for (normalArr of normalArrs) {
  if (ccL > normalArrs.length) {
    ccL = normalArrs.indexOf(normalArr);
    reverseArray.push(normalArr);
  }
}
console.log("reverseArray", reverseArray);
