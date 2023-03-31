const arr = [
  "janakshan",
  123,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
];

console.log(arr.length);

let jana = "JANAKSHAN";
console.log(jana.split(""));

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log(companiesString.split(", "));

let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

console.log(txt.split(" "));

const fruits = ["banana", "orange", "mango", "lemon"];

console.log(fruits[fruits.length - 1]);

const countries = [
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
]; // List of countries

console.log(countries);
console.log(countries.length);
console.log(countries[0]);
console.log(countries[countries.length - 1]);

//modify array
const numbers = [1, 2, 3, 4, 5];
console.log("FIRST " + numbers);

numbers[0] = 5;
numbers[1] = 4;

console.log("SEC " + numbers);

numbers[numbers.length - 1] = 6;
console.log(numbers);

// Methods to manipulate array

// Array Constructor

let someArry = Array();
console.log(someArry);

let eightArray = Array(10);
console.log(eightArray);

// Creating static values with fill
let eightArrayWithFill = Array(8).fill("JANAKSAN");
console.log(eightArrayWithFill);

let eightZero = Array(8).fill(0);
console.log(eightZero);

let fourFour = Array(4).fill(4);
console.log(fourFour);

// Concatenating array using concat
const firstA = [1, 2, 3];
const secA = [4, 5, 6];
console.log(firstA.concat(secA));

const fruitsA = ["banana", "orange", "mango", "lemon"];
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
console.log(fruits.concat(vegetables));

// Getting index an element in arr array
const numbersSomne = [1, 2, 3, 4, 5];
console.log(numbersSomne.indexOf(5));

const someFruits = ["banana", "orange", "mango", "lemon"];
console.log(someFruits.indexOf("oranged"));

if (someFruits.indexOf("orangde") === -1) {
  console.log("Not available... ");
} else {
  console.log("Yes available");
}

someFruits.indexOf("lemon") === -1
  ? console.log("Not availble [[]]")
  : console.log("Available");

let tea = ["apple", "kks", "mms"];
tea.fill("5555", 0, 4);
console.log(tea);

const numbersLast = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbersLast.lastIndexOf(5));

// includes
console.log(numbersLast.includes(11));

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies
console.log(webTechs.includes("HTML"));

console.log(Array.isArray(webTechs));

console.log(webTechs.toString());

console.log(numbersLast.toString());

//join

const numbersJoin = [1, 2, 3, 4, 5];

console.log(numbersJoin.join(" * "));

const webTechsTwo = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

console.log(webTechsTwo.join(" -  "));

const numbersSlice = [1, 2, 3, 4, 5];
numbersSlice.slice(0, 5);
console.log(1, numbersSlice);

// Splice method in array
const numbersSplice = [1, 2, 3, 4, 5];
numbersSplice.splice(0, 4);

console.log("2222", numbersSplice);
// Adding item to an array using push

//array push, pop ,shift, unshift
const assArr = ["item1", "item2", "item3"];
assArr.push("Item4");
console.log(assArr);
assArr.push("item5");
console.log(assArr);
assArr.push("item6");
console.log(assArr);
assArr.pop();
console.log(assArr);
assArr.pop();
console.log(assArr);
assArr.shift();
console.log(assArr);
assArr.unshift("Item Unshift 1");
console.log(assArr);

// Reversing array order
const numbersOrder = [1, 2, 3, 4, 5];
numbersOrder.reverse();
console.log(numbersOrder);

const names = ["Janakshan", "Janagan", "Yogam", "Abi"];
console.log(names);
names.reverse();
console.log(names);

const webTechsSort = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
  "Boostrap",
];

console.log(webTechsSort);
webTechsSort.sort();
console.log(webTechsSort);

let soneSomeNum = [4, 2, 99, 3, 1];
soneSomeNum.sort();
soneSomeNum.reverse();
console.log(soneSomeNum);

// array of array
const firstNums = [1, 2, 3];
const secondNums = [1, 4, 9];
let newFirstSecNum = [firstNums, secondNums];

console.log(newFirstSecNum.length);

// Exercise: Level 1
// 1. Declare an empty array;
let someEmptyArry = [];
console.log(someEmptyArry);
// 2.Declare an array with more than 5 number of elements
let somenumberFive = [1, 2, 3, 4, 5];
console.log(somenumberFive);
// 3.Find the length of your array
console.log(somenumberFive.length);
// 4.Get the first item, the middle item and the last item of the array
console.log("FIRST : " + somenumberFive[0]);
console.log("LAST : " + somenumberFive[somenumberFive.length - 1]);
console.log(
  "MIDDLE : " + somenumberFive[Math.floor(somenumberFive.length / 2)]
);
// 5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [
  "janaksan",
  123,
  true,
  { name: "jana", age: 56 },
  [1, 2, 3],
  null,
];

console.log(mixedDataTypes.length);

// 6: Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7: Print the array using console.log()
console.log(itCompanies);

// 8: Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log("First Comany " + itCompanies[0]);
console.log("Middle Comany " + itCompanies[parseInt(itCompanies.length / 2)]);
console.log("Last Comany " + itCompanies[itCompanies.length - 1]);

// 10: Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// 11.Change each company name to uppercase one by one and print them out

itCompanies[0] = itCompanies[0].toUpperCase();
console.log(itCompanies[0]);

itCompanies[1] = itCompanies[1].toUpperCase();
console.log(itCompanies[1]);

itCompanies[2] = itCompanies[2].toUpperCase();
console.log(itCompanies[2]);

itCompanies[3] = itCompanies[3].toUpperCase();
console.log(itCompanies[3]);

itCompanies[4] = itCompanies[4].toUpperCase();
console.log(itCompanies[4]);

itCompanies[5] = itCompanies[5].toUpperCase();
console.log(itCompanies[5]);

itCompanies[6] = itCompanies[6].toUpperCase();
console.log(itCompanies[6]);

// 12: Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let somemmmmmm = itCompanies.toString();

console.log(`${somemmmmmm} are big IT companies`);

// 13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes("IBM3")) {
  console.log("Yes IBM availbale");
} else {
  console.log("IBM not available");
}

// 14 Filter out companies which have more than one 'o' without the filter method

let oo = [];
for (let i = 0; i < itCompanies.length; i++) {
  if (itCompanies[i].includes("M")) {
    oo.push(itCompanies[i]);
  }
}
console.log("oo", oo);

// 15. Sort the array using sort() method
console.log("SORT: " + itCompanies.sort());

// 16: Reverse the array using reverse() method
console.log("Reverse : " + itCompanies.reverse());

// 17:Slice out the first 3 companies from the array
let afSlice = itCompanies.slice(0, 3);
console.log(afSlice);

// 18. Slice out the last 3 companies from the array
let lastSlice = itCompanies.slice(itCompanies.length - 3, itCompanies.length);
console.log(lastSlice);

// 19: Slice out the middle IT company or companies from the array
// let middleSlice = itCompanies.slice(parseInt(itCompanies.length / 2));
let middleSlice = itCompanies.slice(parseInt(itCompanies.length / 2));
console.log("middleSlice", middleSlice);

// 20. Remove the first IT company from the array
console.log("----", itCompanies);
itCompanies.shift();

console.log(itCompanies);

// 21 : Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);
// 22. Remove all IT companies
itCompanies.splice("");
console.log(itCompanies);

// Exercise: Level 2
// 1.Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
console.log("webTexh", webTexh);
console.log("countriesOT", countriesOT);

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

console.log(text.length);

let txtSplit = text.split(" ");
console.log(txtSplit.length);

// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
console.log(shoppingCart);
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);

shoppingCart.splice(4, 1);

console.log(shoppingCart);

shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

// 4.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countriesOT.includes("Ethiopia")) {
  console.log("Ethiopia");
} else {
  countriesOT.push("Ethiopia");
}

console.log("countriesOT", countriesOT);

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTexh.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTexh.push("Sass");
  console.log(webTexh);
}

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStackV = frontEnd.concat(backEnd);
console.log(fullStackV);

// Exercise: Level 3
// 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log("ages", ages);

console.log("Min Age : " + ages[0]);
console.log("Max Age : " + ages[ages.length - 1]);
// median

console.log("median" + ages[ages.length / 2]);

// Find the average age(all items divided by number of items)
let avgAge =
  ages[0] +
  ages[1] +
  ages[2] +
  ages[3] +
  ages[4] +
  ages[5] +
  ages[6] +
  ages[7] +
  ages[8] +
  ages[9];
console.log(parseInt(avgAge / ages.length));

// ind the range of the ages(max minus min)
let aageSort = ages.sort();
console.log("aageSort", aageSort);

let minAge = aageSort[0];
let maxAge = aageSort[aageSort.length - 1];

console.log(maxAge - minAge);
