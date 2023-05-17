function sumAllNums(a, b, c) {
  console.log("arguments", arguments);
}

sumAllNums(1, 2, 3);

function sumAllNumbersB() {
  let totalSum = 0;
  for (argument of arguments) {
    totalSum += argument;
  }

  console.log("totalSum", totalSum);
}

sumAllNumbersB(1, 2, 3, 4);
sumAllNumbersB(10, 20, 13, 40, 10);
sumAllNumbersB(15, 20, 30, 25, 10, 33, 40); // 173

const sumAllNumbers = (...args) => {
  console.log(args);
};

sumAllNumbers(1, 2, 3, 4);

const sumAllNumbersTwo = (...args) => {
  let sum = 0;

  for (const element of args) {
    sum += element;
  }
  return sum;
};

console.log("sumAllNumbersTwo", sumAllNumbersTwo(1, 2, 3, 4, 5));

const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};

anonymousFun();

const square = function (n) {
  return n * n;
};

console.log("square(2)", square(2));

(function () {
  console.log(1);
})(1);

const myNewArrowOne = (a) => {
  return a * a;
};

console.log("myNewArrowOne", myNewArrowOne(2));

const myNewArrowTwo = (a) => a * a;

console.log("myNewArrowTwo", myNewArrowTwo(2));

const changeToUpperCase = (countries) => {
  const newArr = [];

  for (contry of countries) {
    newArr.push(contry.toUpperCase());
  }

  return newArr;
};

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.log(changeToUpperCase(countries));

const generateFullName = (firstName, lastName) => {
  return `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
};

console.log(generateFullName("Krishnamoorthy", "Janakshan"));

const generateFullNameTwo = (firstName, lastName) =>
  `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;

console.log(generateFullNameTwo("Krish", "Jana"));

const greetings = (yourName = "Janakshan") => {
  return `Your name is : ${yourName}`;
};

console.log("greetings", greetings("Kamal"));

// Exercises: Level 1

console.log("--------------Exercises: Level 1 --------------");

// 1. Declare a function fullName and it print out your full name.
function fullName() {
  console.log("Krishnamoorthy Janakshan");
}

fullName();

// 2.Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function generateMyFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(generateMyFullName("Krish", "moorthy"));

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(numOne, numTwo) {
  return numOne + numTwo;
}
console.log(addNumbers(1, 2));

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function calculatArea(length, width) {
  return length * width;
}
console.log(calculatArea(3, 3));

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

console.log(perimeterOfRectangle(3, 3));

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}

console.log("volumeOfRectPrism", volumeOfRectPrism(2, 2, 2));

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r, π = 3.14) {
  return π * r * r;
}

console.log(areaOfCircle(3));

//8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumference(r) {
  return 2 * Math.PI * r;
}

console.log("circumference", circumference(2));

// 9.Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function calculateDensity(mass, volume) {
  return mass / volume;
}

console.log("calculateDensity", calculateDensity(23, 3));

// 10.Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function calculateTotalDis(distance, duration) {
  return distance / duration;
}

console.log(calculateTotalDis(32, 0.5));

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function calculateSubstanceWeight(mass, gravity) {
  return mass * gravity;
}

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

// 13. BMI

function checkBmi(weight, height) {
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi > 18.5 && bmi < 24.9) {
    return "Normal weight";
  } else if (bmi > 25 && bmi < 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(checkBmi(100, 180));

// 14

function checkSession(month) {
  let session = "";
  switch (month) {
    case "September":
    case "October":
    case "November":
      session = "Autumn";
      break;
    case "December":
    case "January":
    case "February":
      session = "Winter";
      break;
    case "March":
    case "April":
    case "May":
      session = "Spring";
      break;
    case "June":
    case "July":
    case "August":
      session = "Summer";
      break;
    default:
      session = "Invalid input";
  }
  return session;
}

console.log("checkSession", checkSession("April"));

// 15.

function findMax(a, b, c) {
  return Math.max(a, b, c);
}

console.log("findMax", findMax(0, 10, 5));

// Exercises: Level 2
// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
//2.
// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(arr) {
  for (const pri of arr) {
    console.log("pri", pri);
  }
}
printArray([1, 2, 3]);

// 4.Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  const date = new Date();
  console.log(
    `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
  );
}

showDateTime();

// 5.Declare a function name swapValues. This function swaps value of x to y.
function swapValues(a, b) {
  let x = b;
  let y = a;
  console.log(`x => ${x}, y = ${y}`);
}
swapValues(3, 4);
swapValues(4, 5);

// 6.Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray(arg) {
  const res = [];
  for (let index = arg.length - 1; index >= 0; index--) {
    const element = arg[index];
    res.push(element);
  }
  return res;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["A", "B", "C"]));
function reverseArrayOne(arg) {
  const res = [];

  for (let index = 0; index < arg.length; index++) {
    const element = arg[index];
    res.unshift(element);
  }
  return res;
}
console.log(reverseArrayOne(["A", "B", "C"]));
console.log(reverseArrayOne([1, 2, 3, 4, 5]));

// 7.Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
  let newArr = [];

  for (const cap of arr) {
    newArr.push(cap.toUpperCase());
  }

  return newArr;
}

console.log(capitalizeArray(["ab", "bc", "cd"]));

// 8.Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item) {
  const myArray = ["A", "B"];

  item && myArray.push(item);

  return myArray;
}

console.log("addItem", addItem("C"));

// 9.Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index) {
  const myArray = ["A", "B", "C"];

  index && myArray.splice(index, 1);

  return myArray;
}

console.log("removeItem", removeItem(0));

// 10.Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(...args) {
  let sumN = 0;
  for (const arg of args) {
    sumN += arg;
  }

  return sumN;
}
console.log(sumOfNumbers(1, 2, 3, 4, 5));

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds(...args) {
  let sumN = 0;
  for (const arg of args) {
    if (arg % 2 > 0) {
      sumN += arg;
    }
  }

  return sumN;
}

console.log(sumOfOdds(1, 2, 3, 4, 5));

//12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(...args) {
  let sum = 0;
  for (const even of args) {
    if (even % 2 === 0) {
      sum += even;
    }
  }
  return sum;
}

console.log(sumOfEven(1, 2, 3, 4, 5));

// 13.Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(num) {
  let sumOdd = 0;
  let sumEven = 0;

  for (let index = 0; index <= num; index++) {
    if (index % 2 === 0) {
      sumEven++;
    }

    if (index % 2 > 0) {
      sumOdd++;
    }
  }
  return { sumOdd, sumEven };
}

console.log("evensAndOdds", evensAndOdds(100));

// 14.Write a function which takes any number of arguments and return the sum of the arguments
function sumAnyArgs(...args) {
  let sumNum = 0;
  for (const num of args) {
    sumNum += num;
  }

  return sumNum;
}

console.log("sumAnyArgs", sumAnyArgs(1, 2, 3));

//15.Writ a function which generates a randomUserIp 192.168.123.132
function randomUserIp() {
  const i1 = Math.floor(Math.random() * 255);
  const i2 = Math.floor(Math.random() * 255);
  const i3 = Math.floor(Math.random() * 255);
  const i4 = Math.floor(Math.random() * 255);

  return `${i1}.${i2}.${i3}.${i4}`;
}

console.log("randomUserIp", randomUserIp());

// 16.Write a function which generates a randomMacAddress
function randomMacAddress() {
  let arr = [];
  let alphanums = "0123456789ABCDEF";

  for (let i = 0; i <= 6; i++) {
    let id = Math.ceil(Math.random() * 15);
    let id2 = Math.ceil(Math.random() * 15);

    arr.push(alphanums[id] + alphanums[id2]);
  }

  return arr.join(":");
}

console.log("randomMacAddress", randomMacAddress());

// 17.Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

function randonHex() {
  let chars = "0123456789ABCDEF";
  let hex = "";

  for (let i = 0; i <= 6; i++) {
    hex += chars[Math.floor(Math.random() * chars.length)];
  }
  return `#${hex}`;
}

console.log("randonHex", randonHex());

// 18.Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
  let char = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  let randomId = "";

  for (let i = 0; i <= 7; i++) {
    randomId += char[Math.floor(Math.random() * char.length)];
  }
  return randomId;
}

console.log("userIdGenerator", userIdGenerator());

//Exercises: Level 3
// 1.Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// function userIdGeneratedByUser() {
//   let numOfChar = prompt("Num of char ? ");
//   let numId = prompt("Num of ID ? ");
//   let char = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
//   let allId = [];

//   for (let i = 0; i < numId; i++) {
//     let id = "";
//     for (let k = 0; k < numOfChar; k++) {
//       id += char[Math.floor(Math.random() * char.length)];
//     }
//     allId.push(id);
//   }

//   return allId;
// }

// console.log("userIdGeneratedByUser", userIdGeneratedByUser());

//2. Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
  // rgb(125, 244, 255);
  const rgb = "";
  const id1 = Math.floor(Math.random() * 255);
  const id2 = Math.floor(Math.random() * 255);
  const id3 = Math.floor(Math.random() * 255);

  return `rgb(${id1}, ${id2}, ${id3})`;
}

console.log("rgbColorGenerator", rgbColorGenerator());

//3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors() {
  let chars = "0123456789ABCDEF";

  let hexArr = [];
  for (let i = 0; i <= Math.random() * 10; i++) {
    let hex = "";
    for (let k = 0; k < 6; k++) {
      hex += chars[Math.floor(Math.random() * chars.length)];
    }
    hexArr.push(`#${hex}`);
  }
  return hexArr;
}

console.log("arrayOfHexaColors", arrayOfHexaColors());

// 4.Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors() {
  let rgbArry = [];
  for (let i = 0; i < Math.random() * 10; i++) {
    let rgb = "";

    let r1 = Math.floor(Math.random() * 255);
    let r2 = Math.floor(Math.random() * 255);
    let r3 = Math.floor(Math.random() * 255);

    rgb = `rgb(${r1}, ${r2}, ${r3})`;

    rgbArry.push(rgb);
  }
  return rgbArry;
}

console.log("arrayOfRgbColors", arrayOfRgbColors());

// 5.Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hex) {
  let v1 = parseInt(hex.slice(1, 3), 16);
  let v2 = parseInt(hex.slice(3, 5), 16);
  let v3 = parseInt(hex.slice(5, 7), 16);

  return `rgb(${v1}, ${v2}, ${v3})`;
}
// rgb(133, 21, 122);
console.log("convertHexaToRgb;", convertHexaToRgb("#85157A"));

// 6.Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

function convertRgbToHexa() {}
console.log("convertRgbToHexa", convertRgbToHexa("rgb(133, 21, 122)"));

// 6.
// 7.Write a function generateColors which can generate any number of hexa or rgb colors

function generateColors(colorType, numberOf) {
  let chars = "0123456789ABCDEF";
  let color = [];
  if (colorType === "hexa") {
    for (let i = 0; i < numberOf; i++) {
      let hex = "#";

      for (let k = 0; k < 6; k++) {
        hex += chars[Math.floor(Math.random() * chars.length)];
      }
      color.push(hex);
    }
  }

  if (colorType === "rgb") {
    for (let n = 0; n < numberOf; n++) {
      let rgb = "";
      let a1 = Math.floor(Math.random() * 255);
      let a2 = Math.floor(Math.random() * 255);
      let a3 = Math.floor(Math.random() * 255);

      rgb = `rgb(${a1}, ${a2} , ${a3})`;
      color.push(rgb);
    }
  }

  return color;
}

console.log("generateColors", generateColors("rgb", 3));
console.log("generateColors", generateColors("hexa", 3));

// 8.Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(array) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    let rand = Math.floor(Math.random() * array.length);
    console.log("rand", rand);
    if (array.indexOf(rand) !== -1 && !newArr.includes(array[rand])) {
      newArr.push(array[rand]);
    }
  }

  return newArr;
}

console.log("shuffleArray", shuffleArray([1, 2, 3, 4, 5]));

// 9.Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(num) {
  let fact = 1;

  for (let i = num; i > 0; i--) {
    fact *= i;
  }

  return fact;
}

console.log("factorial", factorial(6));

// 10.Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(arg) {
  console.log("arg", arg);
  if (arg === undefined) {
    return true;
  }

  return false;
}

console.log("isEmpty", isEmpty());

// 11.Call your function sum, it takes any number of arguments and it returns the sum.

function sumAny(...args) {
  let results = 0;

  for (const arg of args) {
    results += arg;
  }
  return results;
}

console.log("sumAny", sumAny(1));

// 12.Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(args) {
  let sum = 0;
  for (const arg of args) {
    console.log("typeof ar", typeof arg);
    if (typeof arg !== "number") {
      return "Please check the values are not numbers";
    }
    sum += arg;
  }
  return sum;
}
console.log("sumOfArrayItems", sumOfArrayItems([1, 3]));

// 13.Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function average(...args) {
  let sum = 0;

  for (const num of args) {
    if (typeof num === "number") {
      sum += num;
    } else {
      return `Values contains strings...`;
    }
  }
  return sum / args.length;
}

console.log("average", average(1, 2, 3, 4));

// 14.Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(arr) {
  if (arr.length < 5) {
    return "Item not fount!";
  }

  arr[5] = "Kma";
  return arr;
}

console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"]));

// 15.

// 16.Write a functions which checks if all items are unique in the array.

function isUnique(...args) {
  for (let i = 1; i < args.length; i++) {
    for (let k = 0; k < i; k++) {
      if (args[i] == args[k]) {
        return false;
      }
    }
  }
  return true;
}

console.log("isUnique", isUnique(1, 2, 3, 4));

// 15.Write a function which checks if all the items of the array are the same data type.

function isSameData(...args) {
  let firstType = typeof args[0];
  for (const item of args) {
    if (typeof item != firstType) {
      return false;
    }
  }
  return true;
}

console.log("isSameData", isSameData(1, 2, 3));
