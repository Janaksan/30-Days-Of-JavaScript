// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h)
const b = prompt("Enter the Base? ");
const h = prompt("Enter the height ?");

const base = parseInt(b);
const height = parseInt(h);

console.log(0.5 * base * height);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

const aa = prompt("Enter the a?");
const bb = prompt("Enter the b?");
const cc = prompt("Enter the c?");

console.log(parseFloat(aa) + parseFloat(bb) + parseFloat(cc));

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
const length = prompt("length");
const width = prompt("width");

console.log("area of rectangle" + parseFloat(length) * parseFloat(width));
console.log(
  "perimeter of rectangle" + 2 * (parseFloat(length) + parseFloat(width))
);

// 4 : Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// const radius = prompt("radius");

console.log("area of a circle " + Math.PI * radius * radius);
console.log("circumference of a circle " + 2 * Math.PI * parseFloat(radius));

// 9.Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
/*Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120*/

const hours = prompt("Enter hours ");
const rate = prompt("Rate per hours ");

console.log(`Your weekly earning is ${parseFloat(hours) * parseFloat(rate)}`);

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.

const yourName = prompt("Enter your name");

if (yourName.length > 7) {
  console.log("your name is long");
} else {
  console.log("your name is short.");
}

// 11.Compare your first name length and your family name length and you should get this output.

let firstNameOne = "Asabeneh";
let lastNameOne = "Yetayeh";
//Your first name, Asabeneh is longer than your family name, Yetayeh

if (firstNameOne.length > lastNameOne.length) {
  console.log(
    `Your first name, ${firstNameOne} is longer than your family name, ${lastNameOne}`
  );
} else {
  console.log(
    `Your first name, ${firstNameOne} is shorter than your family name, ${lastNameOne}`
  );
}

// 12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250;
// let yourAge = 25;
//I am 225 years older than you.

const myAgeOne = 20;
const yourAge = 29;

console.log(`I am ${yourAge - myAgeOne} years older than you`);

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

/*

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.

*/

const birthYear = prompt("Enter your birth year ? ");
const currentYear = new Date().getFullYear();
const currentAge = currentYear - parseInt(birthYear);
console.log(18 - currentAge);
if (currentAge > 18) {
  console.log(`You are ${currentAge}. You are old enough to drive`);
} else {
  console.log(
    `You are 15. You will be allowed to drive after ${18 - currentAge} years.`
  );
}

// 14.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of years you live: 100
// You lived 3153600000 seconds.

const numberOfyears = prompt("Enter the number of years ? ");

console.log(`you lived ${parseInt(numberOfyears) * 31536000} sec`);

// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

const sususDate = new Date();

const yyyy = sususDate.getFullYear();
const mm_2 = sususDate.getMonth() + 1;
const dd = sususDate.getDate();
const hh_2 = sususDate.getHours();
const min = sususDate.getMinutes();

console.log(`YYYY-MM-DD HH:mm = ${yyyy}-${mm_2}-${dd} ${hh_2}:${min}`);
console.log(`DD-MM-YYYY HH:mm : ${dd}-${mm_2}-${yyyy}  ${hh_2}:${min}`);
console.log(`DD-MM-YYYY HH:mm : ${dd}/${mm_2}/${yyyy}  ${hh_2}:${min}`);

// 16: Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
