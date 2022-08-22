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

console.log(users);
console.log(Object.keys(users));
console.log(Object.values(users));
console.log(users.Alex.age);
console.log(users["Alex"]["age"]);

let keys = Object.keys(users);
console.log(keys);

// Find the person who has many skills in the users object.
let person;
let max = 0;

for (const property in users) {
  if (users[property].skills.length > max) {
    max = users[property].skills.length;
    person = property;
  }
}
console.log(person);

// Count logged in users, count users having greater than equal to 50 points from the following object.
let counter = 0;
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
  console.log(users[keys[i]]["points"]);
  if (users[keys[i]]["points"] >= 50) counter++;
}
console.log("there are " + counter + " users with more than 50 points");

//3 Find people who are MERN stack developer from the users object

for (let i = 0; i < keys.length; i++) {
  if (users[keys[i]]["skills"] == "MERN stack") counter++;
}
console.log(counter);

//4 Set your name in the users object without modifying the original users object

//5 Get all keys or properties of users object

//6 Get all the values of users object

//7 Use the countries object to print a country name, capital, populations and languages.
