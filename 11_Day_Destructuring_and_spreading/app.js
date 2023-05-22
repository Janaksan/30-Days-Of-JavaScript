const numbers = [1, 2, 3];

[num1, num2, num3] = numbers;

console.log('num1', num1)
console.log('num2', num2)
console.log('num3', num3)

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

const [frontend, backend] = fullStack
console.log('frontend', frontend);
console.log("backend", backend);


const numbersSec = [1, 2, 3];
 
const [number1, , number2] = numbersSec;

console.log('number1', number1)
console.log('number2', number2)


const names = [undefined, "Brook", "David"];

let [firstName, bookName, masterName] = names;

console.log("names", firstName = "Janakshan", bookName, masterName);



const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [first, sec, thred, ...rest] = nums;
console.log('main', first, sec, thred);
console.log('rest', rest)


const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (const [country, lang] of countries) {
    console.log("country", country);
    console.log("lang", lang);
}


const fullStackList = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (const [firstlist, seclist, tlist, four] of fullStackList) {
    console.log("")
    console.log("firstlist", firstlist);
    console.log("seclist", seclist);
    console.log("tlist", tlist);
    console.log("four", four);
}

console.log('')

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};

let { width: w, height: h, area: a } = rectangle;


console.log('width', w)
console.log("height", h);
console.log("area", a);


const rectangleSome = {
  width: 20,
  height: 10,
  area: 200,
};

let { width, height, area, random = 5 } = rectangleSome;
console.log("first", width, height, area, random);


const rect = {
  width: 20,
  height: 10,
};

const calculatePerimeter = ({width: w, height: h}) => {
    return w + h
}

console.log('calculatePerimeter(rect)', calculatePerimeter(rect))


const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};

const getPersonInfo = ({ firstName, lastName, age, country, job, skills, languages }) => {

    const skillLine = skills.slice(0, -1).join(", ");
    const langLine = languages.slice(0, -1).join(', ')
    
    return `${firstName} ${lastName} lives in ${country}.  He is ${age}.  He is an ${job}.  He teaches ${skillLine}. He speaks ${langLine}`;

}

console.log(getPersonInfo(person));

/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/



const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];


for (const { task, time, completed } of todoList) {
    console.log("liat", task, time, completed);
}

const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

const copiedUser = { ...user, name :  'janakshan' }

console.log('copiedUser', copiedUser)

// Exercises: Level 1

// 1.Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const constants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

console.log('e, pi, gravity, humanBodyTemp, waterBoilingTemp', e, pi, gravity, humanBodyTemp, waterBoilingTemp);


// 2.Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countriesArr = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
let [fin, est, sw, den, nor] = countriesArr;
console.log('fin, est, sw, den, nor', fin, est, sw, den, nor)

// 3.Destructure the rectangle object by its properties or keys
const rectangleObj = {
  width1: 20,
  height1: 10,
  area1: 200,
  perimeter1: 60,
};

let { width1, height1, area1, perimeter1 } = rectangleObj;

console.log('width1, height1, area1, perimeter1 ', width1, height1, area1, perimeter1)

// Exercises: Level 2
// 1. Destructure the countries object print name, capital, population and languages of all countries
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

for (const { name, scores, skills, age } of users) {
    console.log('name, scores, skills, age', name, scores, skills, age)
}


// 3.Find the persons who have less than two skills
const smallBoy = []

for (const { name, scores, skills, age } of users) {
    if (skills.length < 2) {
        smallBoy.push(name);
    }
}
console.log('smallBoy', smallBoy)



// Exercises: Level 3
// 1. Destructure the countries object print name, capital, population and languages of all countries

for (const { name, capital, population, languages } of countriesObj) {
  console.log('name, capital, population, languages', name, capital, population, languages)
}

// 2 A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
 let [someName, skills, [, , jsScore, reactScore]] = student;

console.log(someName, skills, jsScore, reactScore);
 
// 3.Write a function called convertArrayToObject which can convert the array to a structure object.

  const students = [
    ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
    ["John", ["HTM", "CSS", "JS", "React", "English"], [85, 80, 85, 80]],
  ];


const convertArrayToObject = (students) => {
  const results = [];

  for (const [stName, sub , result] of students) {
    results.push({
      name: stName,
      skills: sub,
      scores: result,
    });
  }

  return results;
};

console.log(convertArrayToObject(students))

//  const student = {
//    name: "David",
//    age: 25,
//    skills: {
//      frontEnd: [
//        { skill: "HTML", level: 10 },
//        { skill: "CSS", level: 8 },
//        { skill: "JS", level: 8 },
//        { skill: "React", level: 9 },
//      ],
//      backEnd: [
//        { skill: "Node", level: 7 },
//        { skill: "GraphQL", level: 8 },
//      ],
//      dataBase: [{ skill: "MongoDB", level: 7.5 }],
//      dataScience: ["Python", "R", "D3.js"],
//    },
//  };
// 4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?

const newStudent = [...students];

const makeSome = (newStudent) => {
  const results = [];
  for (const [stName, sub, res] of newStudent) {
    results.push({
      name: stName,
      age: 25,
    });
  }
  return results;
};

console.log('makeSome(newStudent);', makeSome(newStudent))