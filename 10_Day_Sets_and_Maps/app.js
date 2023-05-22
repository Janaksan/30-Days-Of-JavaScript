console.log('first')

const companies = new Set();
console.log(companies);


const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
  "Spanish",
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages);


for (const language of setOfLanguages) {
  console.log(language);
}


const companiesData = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];
const someOthercompanies = new Set();

for (const company of companiesData) {
    someOthercompanies.add(company)
}

console.log('someOthercompanies', someOthercompanies)

console.log("DELETE someOthercompanies", someOthercompanies.delete("Google"));

console.log("someOthercompanies", someOthercompanies.has("facebook"));

someOthercompanies.clear()
console.log("someOthercompanies", someOthercompanies);


const languagesData = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];


const lagSet = new Set(languages);

const counts = [];
const count = {};

for (const lang of lagSet) {
    const filterLng = languagesData.filter(data => data === lang)
    counts.push({language : lang, count: filterLng.length})
}

console.log('counts', counts)


// Union of sets

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];



let C = new Set(c)

console.log("c", C);

let aa = [1, 2, 3, 4, 5];
let bb = [3, 4, 5, 6];

let AA = new Set(aa);
let BB = new Set(bb);

let CC = aa.filter(aaa => {
    return !BB.has(aaa)
})

let DD = new Set(CC);

console.log("CC", DD);


// MAP


mapCountries = [
  ["Finland", "Helsinki"],
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo",],
];

const map = new Map(mapCountries);
map.set("janaksan", "master");
map.set("Finland", "Helsinki1");
map.set("Sweden", "Stockholm");
map.set("Norway", "Oslo");

console.log(map);
console.log("GET", map.get("janaksan"));

console.log('HAD', map.has("janaksan"))



for (const item of map) {
    console.log('item', item)
}


for (const [country, city] of map) {
  console.log("item", { country: country, city: city });
}



// Exercises:Level 1

// 1. create an empty set

const someEmptyObject = new Set();

console.log("someEmptyObject", someEmptyObject);

//2 . Create a set containing 0 to 10 using loop

const setSomeNumber = new Set();

for (let i = 0; i < 10; i++) {
  setSomeNumber.add(i);
}
console.log('setSomeNumber', setSomeNumber)

// 3. Remove an element from a set
setSomeNumber.delete(0)

console.log('DELETE setSomeNumber', setSomeNumber)

//4 . Clear a set
setSomeNumber.clear();
console.log('CLEAR setSomeNumber', setSomeNumber)


//5 .Create a set of 5 string elements from array
const stringArray = ["text-1", "text-2", "text-3", "text-4", "text-5"];
const stringSet = new Set(stringArray);
console.log('stringSet', stringSet)


// 6.Create a map of countries and number of characters of a country

const numberOfCharCountries = new Map();

for (const country of countries) {
  numberOfCharCountries.set(country.name, country.name.length);
}
console.log('numberOfCharCountries', numberOfCharCountries)


// Exercises:Level 2
const aNumber = [4, 5, 8, 9];
const bNumber = [3, 4, 5, 7];
const cNumber = [...aNumber, ...bNumber]

// 1.Find a union b
const unionSet = new Set(cNumber);

console.log("aNumber", aNumber);
console.log("bNumber", bNumber);
console.log('unionSet', unionSet)


// 2.Find a intersection b
const aaNumber = [4, 5, 8, 9];
const bbNumber = [3, 4, 5, 7];

const aaNumberSet = new Set(aaNumber);
const bbNumberSet = new Set(bbNumber);

const fffff = aaNumber.filter((num) => bbNumberSet.has(num));

console.log('fffff', fffff)


// 3. How many languages are there in the countries object file.

const howMayLanSet = new Set();

countries.forEach(country => {
  country.languages.forEach(language => {
    howMayLanSet.add(language);
  })
});

console.log("howMayLanSet", howMayLanSet.size);

// 4. *** Use the countries data to find the 10 most spoken languages:
// Your output should look like this
  // console.log(mostSpokenLanguages(countries, 3))
  // [
  //   {English:91},
  //   {French:45},
  //   {Arabic:25}
  // ]


const mostSpokenLanguages = (limit) => {
  const countryMapBySpkenLang = new Map();

  countries.forEach(country => {
    country.languages.forEach(language => {
      if (countryMapBySpkenLang.get(language)) {
        countryMapBySpkenLang.set(
          language,
          countryMapBySpkenLang.get(language) + 1
        );
      } else {
          countryMapBySpkenLang.set(language, 1);
      }
    })
  })
  const sortCountry = Array.from(countryMapBySpkenLang.entries()).sort((a, b) => {
    return b[1] - a[1]
  });

 return sortCountry.slice(0, limit)
}

console.log('mostSpokenLanguages(10)', mostSpokenLanguages(3))



