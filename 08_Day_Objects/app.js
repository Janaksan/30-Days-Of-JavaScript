const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Sri Lanka",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  sub: [
    {
      name: "Com",
      title: "Computer",
    },
    {
      name: "Pro",
      title: "Programming",
    },
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  getAge: function () {
    return this.age;
  },
};
person.nationality = "Ethiopian";
person.country = "Finland";
person.getAge = function () {
  return `Your age is ${this.age}`;
};

person.getCity = function () {
  return this.city;
};

console.log("person ", person.getCity());

//Object.assign

const newObj = Object.assign({}, person);

console.log("person", person);
newObj.firstName = "Janakshan";
newObj.book = "Atoic";
console.log("newObj", newObj);

//Object.key
const someKey = Object.keys(newObj);
console.log("Object.key", someKey);

const someVal = Object.values(newObj);
console.log("someVal", someVal);

//Object.entries()

console.log("Object.entries()", Object.entries(newObj));

//hasOwnProperty()

console.log("hasOwnProperty()", newObj.hasOwnProperty("firstName"));

//Exercises: Level 1

// 1.Create an empty object called dog
const dog = {};

// 2.Print the the dog object on the console
console.log("dog", dog);

//3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Rocky";
dog.legs = 4;
dog.color = "black";
dog.age = 5;
dog.bark = function () {
  return `woof woof`;
};

// 4.Get name, legs, color, age and bark value from the dog object
console.log("name", dog.name);
console.log("legs", dog.legs);
console.log("color", dog.color);
console.log("age", dog.age);
console.log("bark", dog.bark());

//5.Set new properties the dog object: breed, getDogInfo

dog.breed = 2;
dog.getDogInfo = function () {
  return `Your dog name is ${this.name}`;
};

console.log("dog", dog.getDogInfo());

// Exercises: Level 2

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// 1.Find the person who has many skills in the users object.
let max = 0;
let skilledUser;

for (const item of Object.keys(users)) {
  let usersSkills = users[item].skills;
  let usersSkillsLength = usersSkills.length;

  if (usersSkillsLength > max) {
    max = usersSkillsLength;
    console.log("item", item);
    skilledUser = users[item].email;
  }
}

console.log("skilledUser", skilledUser);

// 2.Count logged in users, count users having greater than equal to 50 points from the following object.

for (const key of Object.keys(users)) {
  let userObject = users[key];

  if (userObject.isLoggedIn && userObject.points >= 50) {
    console.log("userObject", userObject);
  }
}

// 3.Find people who are MERN stack developer from the users object

for (const key of Object.keys(users)) {
  let user = users[key];

  //   console.log("user.skills", user.skills.includes("MongoDB"));

  if (
    user.skills.includes("MongoDB") &&
    user.skills.includes("Express") &&
    user.skills.includes("React") &&
    user.skills.includes("Node")
  ) {
    console.log("user::::::", user);
  }
}

// 4.Set your name in the users object without modifying the original users object

let newUserObj = Object.assign({}, users);
newUserObj["Alex"] = {};
console.log("newUserObj", newUserObj);

// 5.Get all keys or properties of users object

console.log("all-key-value", Object.keys(users));

// 6.Get all the values of users object
console.log(Object.values(users));

console.log("countries", countries);

for (const countryKry of countries) {
  console.log("countryKry", countryKry.name);
}

// Exercises: Level 3

// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: "Janakshan",
  lastName: "Krishnamoorthy",
  incomes: [
    {
      amount: 3000,
      des: "salary",
    },
    {
      amount: 1000,
      des: "gift",
    },
  ],
  expenses: [
    {
      amount: 1000,
      des: "Internet",
    },
  ],
  totalIncome: function () {
    let total = 0;
    for (const item of this.incomes) {
      console.log("item", item);
      total += item.amount;
    }
    return total;
  },
  totalExpense: function () {
    let totalExpense = 0;

    for (const item of this.expenses) {
      totalExpense += item.amount;
    }
    return totalExpense;
  },
  accountInfo: function () {
    return `${this.firstName}  ${this.lastName}`;
  },
  addIncome: function (amount, des) {
    this.incomes.push({
      amount: amount,
      des: des,
    });
  },
  addExpense: function (amount, des) {
    this.expenses.push({
      amount,
      des,
    });
  },
  accountBalance: function () {
    let totalIncome = 0;
    let totalExpense = 0;
    for (const item of this.incomes) {
      totalIncome += item.amount;
    }

    for (const item of this.expenses) {
      totalExpense += item.amount;
    }

    console.log("totalIncome::::", totalIncome);
    console.log("totalExpense::::", totalExpense);

    return totalIncome - totalExpense;
  },
};

console.log("totalIncome", personAccount.totalIncome());
console.log("totalExpense", personAccount.totalExpense());
console.log("accountInfo", personAccount.accountInfo());
console.log("addIncome", personAccount.addIncome(100, "Intrest"));
console.log("addIncome", personAccount.addIncome(100, "Bank"));
console.log("totalIncome", personAccount.totalIncome());
console.log("addExpense", personAccount.addExpense(100, "mobile bill"));
console.log("totalExpense", personAccount.totalExpense());
console.log("accountBalance", personAccount.accountBalance());

// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

const usersMo = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
/* {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  }, */
function signUp(username, email, password) {
  if (username == undefined && email == undefined && password == undefined) {
    return `User name, email, password are must`;
  }

  for (const key in usersMo) {
    if (Object.hasOwnProperty.call(usersMo, key)) {
      const element = usersMo[key];
      if (username === element.username || email === element.email) {
        return `User already exsit`;
      }
    }
  }

  const chars = "1234567890abcdefghijklmnopq";

  function generateId() {
    let id = "";
    for (let i = 0; i < 6; i++) {
      id += chars[Math.floor(Math.random() * chars.length)];
    }

    return id;
  }

  usersMo.push({
    _id: generateId(),
    username,
    email,
    password,
  });

  return usersMo;
}

console.log("signUp", signUp("Janakshan", "janaksan.jana@gmail.com", "123123"));

function signIn(username, password) {
  if (username == undefined && password == undefined) {
    return `Please enter the username or password`;
  }

  console.log("usersMoaaaa", username, password);

  let isAvailable = false;
  let userName = "";

  for (const item of usersMo) {
    if (username === item.username && password === item.password) {
      isAvailable = true;
      userName == item.username;
    } else {
      isAvailable = false;
    }
  }

  return isAvailable
    ? `Hi ${username} Welcome to out system`
    : "Login failed !";
}

console.log("signIn", signIn("Janakschan", "123123"));

function rateProduct(productId, userId, rate) {
  let newItem;
  for (const item of products) {
    if (item._id === productId) {
      item.ratings.push({
        userId,
        rate,
      });

      newItem = item;
    }
  }
  return newItem;
}

console.log("rateProduct", rateProduct("eedfcf", "ghderc", 10));

function averageRating(productId) {
  let totalRate = 0;
  let rateCount = 0;
  for (const product of products) {
    if (product._id === productId) {
      rateCount = product.ratings.length;
      if (product.ratings.length == 0) {
        return 0;
      }
      for (const rate of product.ratings) {
        totalRate += rate.rate;
      }
    }
  }
  return totalRate / rateCount;
}

console.log("averageRating", averageRating("aegfal"));

function likeProduct(productId, userId) {
  let productResult;
  for (const product of products) {
    if (product._id === productId) {
      for (const like of product.likes) {
        if (like === userId) {
          product.likes.splice(product.likes.indexOf(like), 1);
        }
      }
      product.likes.push(userId);
    }
  }
  return products;
}

console.log("likeProduct", likeProduct("aegfal", "eefamr"));
