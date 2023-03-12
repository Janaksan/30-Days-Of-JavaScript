// 1: Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of JavaScript";

// 2: Print the string on the browser console using console.log()
console.log(challenge);

// 3: Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// 4:Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// 5: Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// 6:Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0, 2));

// 7:Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(3, 21));

// 8: Check if the string contains a word Script using includes() method
console.log(challenge.includes("Days"));

// Split the string into an array using split() method
console.log(challenge.split());

// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "));

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let socialMedia = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(socialMedia.split(", "));

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript", "Python"));

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log("30 Days Of JavaScript".charAt(15));

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log("30 Days Of JavaScript".charCodeAt("J"));

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log("30 Days Of JavaScript".indexOf("a"));

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log("30 Days Of JavaScript".lastIndexOf("a"));

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(
  "You cannot end a sentence with because because because is a conjunction".indexOf(
    "because"
  )
);

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(
  "You cannot end a sentence with because because because is a conjunction".lastIndexOf(
    "b"
  )
);

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(
  "You cannot end a sentence with because because because is a conjunction".search(
    "because"
  )
);

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let someWord = " 30 Days Of JavaScript ";
console.log("INDEX1", someWord.length);
console.log(someWord.trim());
console.log("INDEX2", someWord.trim().length);

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("30 Days Of JavaScript".startsWith("3"));

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("30 Days Of JavaScript".endsWith("t"));

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log("30 Days Of JavaScript".match(/a/));

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let wordOne = "30 Days of";
let wordTwo = "JavaScript";
console.log(wordOne.concat(wordTwo));

// Use repeat() method to print 30 Days Of JavaScript 2 times
let wordThree = "30 Days Of JavaScript";
console.log(wordThree.repeat(2));
