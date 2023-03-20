console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

console.log(typeof Number("10") === typeof 10);
console.log();

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

console.log(Math.round(parseFloat("9.8")) === 10);

// Check if 'on' is found in both python and jargon

let python = "python";
let jargon = "jargon";

console.log(python.includes("on") && jargon.includes("on"));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let sen = "I hope this course is not full of jargon";
console.log(sen.includes("jargon"));

// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101));

// Generate a random number between 50 and 100 inclusively.

console.log(Math.floor(Math.random() * 51) + 50);

// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 256));

// Access the 'JavaScript' string characters using a random number.
let mainStr = "JavaScript";
console.log(mainStr.charAt(mainStr.length - 1));

// Use console.log() and escape characters to print the following pattern.
/* 1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */

console.log(
  `1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125`
);

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let wordSub =
  "You cannot end a sentence with because because because is a conjunction";
console.log(wordSub.substring(31, 54));

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let wordCounter =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(wordCounter.match(/love/g).length);

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let wordCounterTwo =
  "You cannot end a sentence with because because because is a conjunction";
console.log(wordCounterTwo.match(/because/g).length);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

console.log(sentence.replace(/[^A-Za-z0-9?' ']/gim, ""));
