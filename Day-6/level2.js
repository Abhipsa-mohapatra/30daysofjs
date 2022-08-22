//level 2 q-1
characters = "abcdefghijklmnopqrstuvwxyz0123456789";
result = "";
chaactersLength = characters.length;

for (i = 0; i < 12; i++) {
  result += characters.charAt(Math.floor(Math.random() * chaactersLength));
}
console.log(result);

characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
result = "";
chaactersLength = characters.length;

for (i = 0; i < 25; i++) {
  result += characters.charAt(Math.floor(Math.random() * chaactersLength));
}
console.log(result);

//q-2
characters = "abcdef0123456789";
result = "";
chaactersLength = characters.length;

for (i = 0; i < 6; i++) {
  result += characters.charAt(Math.floor(Math.random() * chaactersLength));
}
console.log(`#${result}`);

//q-3

var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
console.log(`rgb(${r},${g},${b})`);

//q-4
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
let newArr = [];
for (const country of countries) {
  newArr.push(country.toUpperCase());
}

console.log(newArr);

//q-5
newArr = [];
for (const country of countries) {
  newArr.push(country.length);
}

console.log(newArr);

// doesnt repeat the same length
let a = [];
for (i = 0; i < countries.length; i++) {
  if (a.indexOf(countries[i].length) === -1) {
    a.push(countries[i].length);
  }
}
console.log(a);

//q-6
newArr = [];
for (i = 0; i < countries.length; i++) {
  newArr.push([
    countries[i],
    countries[i].slice(0, 3).toUpperCase(),
    countries[i].length,
  ]);
}
console.log(newArr);

//q-7
let countWithoutLand = [];
let countWithLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    countWithLand.push(countries[i]);
  } else {
    countWithoutLand.push(countries[i]);
  }
}
console.log(countWithLand);

//q-8
let countWithIa = [];
let countWithoutIa = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("ia")) {
    countWithIa.push(countries[i]);
  } else {
    countWithoutIa.push(countries[i]);
  }
}

console.log("countries with ia:" + "" + countWithIa);
console.log("countries without  ia:" + "" + countWithoutIa);

//9
let countriesCharLength = [];
for (let i = 0; i < countries.length; i++) {
  countriesCharLength.push(countries[i].length);
}
console.log(countriesCharLength);
let highestcharlength = Math.max(...countriesCharLength); //  we can write this way also (let highestcharlength = Math.max.apply(null, countriesCharLength);)
console.log(countries[countriesCharLength.indexOf(highestcharlength)]);
//10
let countriesWithFiveChars = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    countriesWithFiveChars.push(countries[i]);
  }
}
console.log(countriesWithFiveChars);
//11
let webTechs = [
  "html",
  "css",
  "javascript",
  "vue",
  "react",
  "mongodb",
  "angular",
];
let webTechsLength = [];
for (let i = 0; i < webTechs.length; i++) {
  webTechsLength.push(webTechs[i].length);
}
console.log(webTechsLength);
let highestChar;
highestChar = Math.max(...webTechsLength);
console.log(highestChar);
console.log(webTechs[webTechsLength.indexOf(highestChar)]);
//12
let newWebTechs = [];
for (let i = 0; i < webTechs.length; i++) {
  newWebTechs.push([webTechs[i].toUpperCase(), webTechs[i].length]);
}
console.log(newWebTechs);
//13

let mernStack = ["MongoDb", "Express", "React", "Node"];
let mern = "";
for (let i = 0; i < mernStack.length; i++) {
  mern += mernStack[i].slice(0, 1);
}
console.log(mern);
//14
let techs = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];
for (let i = 0; i < techs.length; i++) {
  console.log(techs[i]);
}
for (let tech of techs) {
  console.log(tech);
}
//15
let fruits = ["banana", "orange", "mango", "lemon"];
let fruits1 = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  fruits1.push(fruits[i]);
}
console.log(fruits1);
//16
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
console.log(fullStack.join());
