const callback = (n) => {
  return n + 2;
};

function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(callback, 3));

function mainSum(arg) {
  return arg + arg;
}

function doubleSum(mainSum, par) {
  return mainSum(par) + 2;
}

console.log("doubleSum", doubleSum(mainSum, 2));

const numbers = [1, 2, 3, 4, 5];

function sumArrays(numbers) {
  let sumResult = 0;

  const callbackSum = function (elements) {
    sumResult += elements;
  };

  numbers.forEach(callbackSum);

  return sumResult;
}

console.log("sumArrays", sumArrays(numbers));

setInterval(() => {
  let sumMain = 0;
  let sumArray = [1, 2, 3];

  for (const amount of sumArray) {
    sumMain += amount;
  }

  console.log("sumMain", sumMain);
}, 80000);

let forSum = 0;

[1, 2, 3].forEach((num) => (forSum += num));

console.log("forSum", forSum);

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland", "Lk"];
const myNewArr = [];

countries.forEach((country) => myNewArr.push(country.toUpperCase()));
console.log("myNewArr", myNewArr);

let upCountries = countries.map((country) => country.toUpperCase().slice(0, 3));

console.log("upCountries", upCountries);

const filterFin = countries.filter((country) => country.length >= 5);

console.log("filterFin", filterFin);

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const whoIsAbove = scores.filter((score) => score.score === 50);
console.log("whoIsAbove", whoIsAbove);

const myReduce = [0, 1, 2, 3].reduce((pre, curr) => {
  return (pre += curr);
}, 10);

console.log("myReduce", myReduce);

const users = [
  {
    firstName: "Janksan",
    lastName: "Krish",
    age: 29,
    gender: "Male",
  },
  {
    firstName: "Janagan",
    lastName: "Krish",
    age: 19,
    gender: "Male",
  },
  {
    firstName: "Ramesh",
    lastName: "vimal",
    age: 29,
    gender: "Male",
  },
  {
    firstName: "Ramani",
    lastName: "Kuna",
    age: 39,
    gender: "Female",
  },
];

// { 29: 1, 19: 3}

// const results = users.reduce((previousValue, currentValue) => {
//   if (previousValue[currentValue.age]) {
//     previousValue[currentValue.age] = ++previousValue[currentValue.age];
//   } else {
//     previousValue[currentValue.age] = 0;
//   }
//   return previousValue;
// }, {});

// console.log("results", results);

const results = users.reduce((previousValue, currentValue) => {
  if (previousValue[currentValue.age]) {
    previousValue[currentValue.age] = ++previousValue[currentValue.age];
  } else {
    previousValue[currentValue.age] = 1;
  }
  return previousValue;
}, {});

console.log("results", results);

const books = ["Asabeneh", "Mathias", "Elias", "Brook", "JTF", "JAF"];

const reBooks = books.every((book) => {
  return typeof book === "string";
});

console.log("reBooks", reBooks);

const someAges = [24, 22, 25, 32, 35, 18];

const ageRe = someAges.find((age) => age > 20);
console.log("ageRe", ageRe);

const resultBooks = books.find((book) => book.length < 4);
const resultBooksIndex = books.findIndex((book) => book.length < 4);
console.log("resultBooks", resultBooks);
console.log("resultBooksIndex", resultBooksIndex);

const namesLolLo = ["Asabeneh", "Mathias", "Elias", "Brook", 12];

const newSomeCheck = namesLolLo.some((name) => typeof name === "number");

console.log("newSomeCheck", newSomeCheck);

console.log("sort", namesLolLo.sort());

const sortUsers = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];

console.log(
  "first",
  sortUsers.sort((a, b) => {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
  })
);

// Exercises: Level 1
const countriesEx = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const namesEx = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbersEx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const productsEx = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
// 1.Explain the difference between forEach, map, filter, and reduce.

// 3.Use forEach to console.log each country in the countries array.
countriesEx.forEach((country) => console.log(country));

// 4.Use forEach to console.log each name in the names array.
namesEx.forEach((name) => console.log(name));

// 5.Use forEach to console.log each number in the numbers array.
numbersEx.forEach((num) => console.log(num));

// 6.Use map to create a new array by changing each country to uppercase in the countries array.

const upperCountry = countriesEx.map((country) => country.toUpperCase());
console.log("upperCountry", upperCountry);

// 7.Use map to create an array of countries length from countries array.

const countrylength = countriesEx.map((country) => country.length);
console.log("countrylength", countrylength);

// 8.Use map to create a new array by changing each number to square in the numbers array
const squareArr = numbersEx.map((num) => num * num);
console.log("squareArr", squareArr);

// 9.Use map to change to each name to uppercase in the names array
const upperName = namesEx.map((name) => name.toUpperCase());

console.log("upperName", upperName);

// 10. Use map to map the products array to its corresponding prices.
const mapPrice = productsEx.map(
  (product) => `${product.product}: ${product?.price ? product.price : "No"}`
);
console.log("mapPrice", mapPrice);

// 11.Use filter to filter out countries containing land.
const landCountry = countriesEx.filter((country) => country.includes("land"));

console.log("landCountry", landCountry);

// 12.Use filter to filter out countries having six character
const sixCountry = countriesEx.filter((country) => country.length === 6);
console.log("sixCountry", sixCountry);

// 13.Use filter to filter out countries containing six letters and more in the country array.
const moreIntoMore = countriesEx.filter((country) => country.length >= 6);
console.log("moreIntoMore", moreIntoMore);

// 14.Use filter to filter out country start with 'E';
const eCountry = countriesEx.filter((country) => country.startsWith("F"));
console.log("eCountry", eCountry);

// 15.Use filter to filter out only prices with values.
const withPrice = productsEx.filter((product) => product.price > 0);
console.log("withPrice", withPrice);

// 16.

const getStringLists = (...arr) => {
  return arr.filter((val) => typeof val === "string");
};

console.log("getStringLists", getStringLists("jana", 1, 2, "amma"));

// 17.Use reduce to sum all the numbers in the numbers array.

const numSumnum = numbersEx.reduce((pre, curr) => {
  return pre + curr;
}, 0);

console.log("numSumnum", numSumnum);

// 18.Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const sen = countriesEx.reduce((pre, curr) => {
  return `${pre},${curr}`;
}, " north European countries");

console.log("sen", sen);

// 19.Explain the difference between some and every
// some = if any value is same as given value - return ture or false
// every = if all value is same as given value - return ture or false

// 20. Use some to check if some names' length greater than seven in names array

const someOfName = ["Janadfsf", "Kuma", "Pama"];
const nenenene = someOfName.some((val) => val.length < 4);

console.log("someOfName", nenenene);

// 21. Use every to check if all the countries contain the word land
const pd = ["Finland", "Sweden", "Denmark", "dNorway", "IceLand"];
const lolerer = pd.every((country) => country.includes("land"));

console.log("lolerer", lolerer);

// 22.Explain the difference between find and findIndex.
// find = return first value of specif condition
// findIndex = return first index  of specif condition

// 23. Use find to find the first country containing only six letters in the countries array
const soeFine = pd.find((so) => so.length > 6);

console.log("soeFine", soeFine);

// 24.Use findIndex to find the position of the first country containing only six letters in the countries array
const soeFineIndex = pd.findIndex((so) => so.length === 6);
console.log("soeFineIndex", soeFineIndex);

// 25.Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const fifififIndex = pd.findIndex((country) => country === "Norway");

console.log("fifififIndex", fifififIndex);

// 26.Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

const russiaFindIndex = pd.findIndex((country) => country === "Russia");
console.log("russiaFindIndex", russiaFindIndex);

// Exercises: Level 2

const productsEx2 = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const totalPriceOfProducts = productsEx2
  .filter((value) => typeof value.price != "string")
  .reduce((pre, curr) => {
    return pre + curr.price;
  }, 0);

console.log("totalPriceOfProducts", totalPriceOfProducts);

// 2.Find the sum of price of products using only reduce reduce(callback))

const onlyReduceFn = productsEx2.reduce((acc, currentValue) => {
  if (typeof currentValue.price !== "string") {
    return acc + currentValue.price;
  }
  // else {
  //   return acc;
  // }
}, 0);

console.log("onlyReduceFn", onlyReduceFn);

// 3.Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries() {
  return countriesData.filter((country) => {
    return country.name.includes("land");
  });
}

console.log("categorizeCountries", categorizeCountries());

// 4.Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

function countCountryLetter() {
  const letterCounts = countriesData.reduce((acc, country) => {
    const startingLetter = country.name[0];
    if (acc[startingLetter]) {
      acc[startingLetter]++;
    } else {
      acc[startingLetter] = 1;
    }
    return acc;
  }, {});

  return letterCounts;
}

console.log("countCountryLetter", countCountryLetter());


// 5.Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

const getFirstTenCountries = (countries) => {
  // return countries.filter(country => countries.indexOf(country) <  10);
  return countries.slice(0, 10)
}

console.log(getFirstTenCountries(countriesData));

// 6.Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
const getLastTenCountries = (countries) => {
  const length = countries.length;
  return countries.slice(length-10, length);
};

console.log("getLastTenCountries", getLastTenCountries(countriesData));

// 7.Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

const initialLetters = countriesData.reduce((letters, country) => {
  const myInitialLetter = country.name.charAt(0).toUpperCase();
  letters[myInitialLetter] = (letters[myInitialLetter] || 0) + 1;
  return letters;
}, {});

const mostInLetters = Object.keys(initialLetters).reduce((a, b) => {
  return initialLetters[a] > initialLetters[b] ? a : b;
})

console.log('mostInLetters', mostInLetters)



console.log("initialLetters", initialLetters);

// ex 3
// 1) Use the countries information, in the data folder. Sort countries by name, by capital, by population

const sortByCountry = countriesData.sort((a, b) => {

  console.log("a.name.localeCompare(b.name)", a.name.localeCompare(b.name));
  return a.name.localeCompare(b.name)
})

console.log('sortByCountry', sortByCountry)

const sortByCapital = countriesData.sort((a, b) => {
  return a.capital.localeCompare(b.capital)
})

console.log('sortByCapital', sortByCapital)

const sortByPopulation = countriesData.sort((a, b) => {
  return a.population - b.population
})

console.log('sortByPopulation', sortByPopulation)

// 2.*** Find the 10 most spoken languages:




const getMostPobLang = (limit) => {
  const mostLan = countriesData.reduce((count, country) => {
    country.languages.forEach((language) => {
      count[language] = (count[language] || 0) + 1;
    });

    return count;
  }, {});

  const sortCountry = Object.entries(mostLan).sort((a, b) => {
    return b[1] - a[1];
  });
  const topLang = sortCountry.slice(0, limit);

  const result = topLang.map(([language, count]) => {
    return ({language, count})
  });

  return result;
}

console.log(getMostPobLang(10));



// *** Use countries_data.js file create a function which create the ten most populated countries

// console.log(mostPopulatedCountries(countries, 3))[
//   ({ country: "China", population: 1377422166 },
//   { country: "India", population: 1295210000 },
//   { country: "United States of America", population: 323947000 })
// ];


const getMostPopulatedCountries = (limit) => {
  const sortCountryByPopulation = countriesData.sort((a, b) => {
    return b.population - a.population;
  }, {});

  const limitCountry = sortCountryByPopulation.slice(0, limit)

  const result = limitCountry.map((country) => {
    return { country : country.name , population: country.population};
  })
  
  return result;
}

console.log('getMostPopulatedCountries', getMostPopulatedCountries(10))


const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];


const count = () => {
  return ages.length
}

const sum = () => {
  return ages.reduce((sum, age) => {
    return sum + age
  }, 0)
};

const min = () => {
  return ages.reduce((min, age) => {
    return age < min ? age : min
  }, ages[0]);
};


const max = () => {
  return ages.reduce((min, age) => {
    return age > min ? age : min;
  }, ages[0]);
};


const range = () => {
  const min = Math.min(...ages);
  const max = Math.max(...ages);

  return max -min
};




console.log('Count', count());
console.log("Sum", sum());
console.log("Min", min());
console.log("Max", max());
console.log("Range", range());

