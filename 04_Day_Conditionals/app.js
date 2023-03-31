//switch statement example 1

let weather = "sunny";

switch (weather) {
  case "rainy":
    console.log("You need a rain coat.");
    break;
  case "cloudy":
    console.log("It might be cold, you need a jacket.");
    break;
  case "sunny":
    console.log("Go out freely.");
    break;
  default:
    console.log(" No need for rain coat.");
}

// switch example 2
// let userInputDay = prompt("Enter the day ? ");
// let day = userInputDay.toLowerCase();

// switch (day) {
//   case "monday":
//     console.log("It's monday");
//     break;
//   case "tuesday":
//     console.log("It's Tuesday");
//     break;
//   case "wednesday":
//     console.log("It's wednesday");
//     break;
//   case "thursday":
//     console.log("It's thursday");
//     break;
//   case "friday":
//     console.log("It's friday");
//     break;
//   case "saturday":
//     console.log("It's saturday");
//     break;
//   case "sunday":
//     console.log("It's sunday");
//     break;
//   default:
//     console.log("It's not a week day");
// }

// let userInputNumber = prompt("Enter the number ? ");
// let num = parseInt(userInputNumber);

// switch (true) {
//   case num == 0:
//     console.log("It's 0");
//     break;

//   case num > 0:
//     console.log("Positive number");
//     break;

//   case num < 0:
//     console.log("Negative number");
//     break;
//   default:
//     console.log("Entered value is not a number");
// }

//01: Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
/*
Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.
*/

let age = 15;

if (age > 18) {
  console.log("You are old enough to drive.");
} else {
  console.log(`You are left with ${18 - age} years to drive.`);
}

//02 : Compare the values of myAge and yourAge using if … else. Based on the comparison and log the resul
// t to console stating who is older(me or you).Use prompt(“Enter your age:”) to get the age as input.
/*
Enter your age: 30
You are 5 years older than me.
*/
let myAge = 29;
let yourAge = 20;

if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} younger than me`);
} else {
  console.log(`You are ${myAge - yourAge} older than me`);
}

//03: If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4;
let b = 3;

console.log(a > b ? `a is greater than b` : `a is less than b`);

// 4:Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let myNumber = 9;
console.log(myNumber % 2 === 0 ? "Even number" : "Odd number");

// Exercises: Level 2
// 01 Write a code which can give grades to students according to theirs scores:
/* 80 - 100, A;
70 - 89, B;
60 - 69, C;
50 - 59, D;
0 - 49, F; */
// let scoresInput = prompt("Enter the mark ? ");
// let scores = parseInt(scoresInput);
// if (scores >= 80 && scores <= 100) {
//   console.log("A");
// } else if (scores >= 70 && scores <= 89) {
//   console.log("B");
// } else if (scores >= 60 && scores <= 69) {
//   console.log("C");
// } else if (scores >= 50 && scores <= 59) {
//   console.log("D");
// } else if (scores >= 0 && scores <= 49) {
//   console.log("F");
// }

// switch (true) {
//   case scores >= 80 && scores <= 100:
//     console.log("A");
//     break;
//   case scores >= 70 && scores <= 89:
//     console.log("B");
//     break;

//   case scores >= 60 && scores <= 69:
//     console.log("C");
//     break;

//   case scores >= 50 && scores <= 59:
//     console.log("D");
//     break;

//   case scores >= 0 && scores <= 49:
//     console.log("F");
//     break;

//   default:
//     console.log("Invalid mark");
// }

// 2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// let sessionUserInput = prompt("Enter the season ? ");

// switch (sessionUserInput) {
//   case "September":
//   case "October":
//   case "November":
//     console.log("Autumn");
//     break;

//   case "December":
//   case "January":
//   case "February":
//     console.log("Winter");
//     break;

//   case "March":
//   case "April":
//   case "May":
//     console.log("Spring");
//     break;

//   case "June":
//   case "July":
//   case "August":
//     console.log("Summer");
//     break;
//   default:
//     console.log("Invalid input");
// }

// 03: Check if a day is weekend day or a working day. Your script will take day as an input.
let whichWeek = prompt("Which week ? ");
let whichWeek2 = whichWeek.toLowerCase();
if (whichWeek === "saturday" || whichWeek === "sunday") {
  console.log("Week-End");
} else if (
  whichWeek == "monday" ||
  whichWeek == "tuesday" ||
  whichWeek == "wednesday" ||
  whichWeek == "thursday" ||
  whichWeek == "friday"
) {
  console.log("Week days");
} else {
  console.log("Invalid day");
}
