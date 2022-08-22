let fsName = "Arati";
let lsName = "Mohapatra";
let Country;
let City;
let Age = 57;
let IsMarried = true;

console.log(fsName, lsName, Country, City, Age, IsMarried);

console.log(typeof "Arati");
console.log(typeof 57);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined); //q-1

console.log("10" == 10);
console.log("10" === 10); //q-2

let num = "9.81";
let numInt = parseInt(num);
console.log(numInt);
console.log(numInt == 10); //q-3

// 4 > 3  true
// 4 >= 3  true
// 4 < 3   false
// 4 <= 3   false
// 4 == 4    true
// 4 === 4    true
// 4 != 4    false
// 4 !== 4    false
// 4 != '4'   false
// 4 == '4'   true
// 4 === '4'  false

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
console.log("python".length > "jargon".length); //q-5

// 4 > 3 && 10 < 12;        true
// 4 > 3 && 10 > 12;        false
// 4 > 3 || 10 < 12;       true
// 4 > 3 || 10 > 12;       true
// !(4 > 3);              false
// !(4 < 3);               true
// !false;                  true
// !(4 > 3 && 10 < 12);     false
// !(4 > 3 && 10 > 12);     true
// !(4 === "4");            true

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

let py = "python";
let ja = "jargon";
console.log(!(py.indexOf("on") == ja.indexOf("on"))); //false q-6

const now = new Date();
console.log(now.getFullYear()); // 2022
console.log(now.getMonth()); // 6, because the month is july,  month(0-11)
console.log(now.getDate()); // 25, because the day of the month is 25th,  day(1-31)
console.log(now.getDay()); // 1, because the day is monday which is the 1st day
//  Sunday is 0, Monday is 1 and Saturday is 6
console.log(now.getHours()); // 5, because the time is 05:21:04
console.log(now.getMinutes()); // 21,
console.log(now.getSeconds()); // 4,

console.log(now.getTime()); // 1658706873451, this is the number of seconds passed from January 1, 1970 to july 25, 2022 05:21:41
const allSeconds = Date.now(); //
console.log(allSeconds); //  1658706873451,
const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds); // true q-7

// level 2
let base = prompt("Enter base", "base goes here");
let height = prompt("Enter height", "height goes here");
let area = 0.5 * base * height;
console.log(area);
// let number = prompt("Enter number", "number goes here");
// console.log(number);

let a = Number(prompt("Enter a", "a goes here"));
let b = Number(prompt("Enter b", "b goes here"));
let c = Number(prompt("Enter c", "c goes here"));
let perimeter = a + b + c;
console.log(perimeter);

let length = prompt("Enter length", "length goes here");
let width = prompt("Enter width", "width goes here");
area = length * width;
perimeter = 2 * (length + width);
console.log(area);
console.log(perimeter);

const pi = 3.14;
let r = prompt("enter r", "r goes here");
area = pi * r * r;
let circumference = 2 * pi * r;
console.log(area, circumference);

// let y = 2 * x - 2;
// let m = 2;

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
m = (y2 - y1) / (x2 - x1);
console.log(m);

console.log(m === m);

let x = prompt("enter x", "x goes here");
y = Math.pow(x, 2) + 6 * x + 9;
console.log(y);

let hours = prompt("enter hour", "hour goes here");
let rateperhours = prompt("enter rateperhours", "rateperhours goes here");
let totalearning = hours * rateperhours;
console.log(totalearning);

let Name = "Abhipsamohapatra";
console.log(Name.length);
console.log(Name.length > 7 ? `${Name} is long` : `${Name} is short`);

let firstName = "Abhipsa";
let lastName = "Mohapatra";
console.log(
  firstName.length < lastName.length
    ? `Your first name, ${firstName} is shorter than your family name, ${lastName}`
    : `Your first name, ${firstName} is longer than your family name, ${lastName}`
);

let myAge = 250;
let yourAge = 25;
console.log(
  myAge > yourAge
    ? `I am ${myAge} years older than you.`
    : `I am ${myAge} years younger than you`
);

let birthyear = prompt("enter birthyear");
const now1 = new Date();
let age = now1.getFullYear() - birthyear;
console.log(age);

console.log(
  age > 18
    ? `You are ${age}. You are old enough to drive`
    : `You are ${age}. You will be allowed to drive after ${18 - age} years.`
);

let numberofyears = prompt("enter numberofyears");
let day = numberofyears * 365;
let hour = day * 24;
let minutes = hour * 60;
let seconds = minutes * 60;
console.log(seconds);
console.log(`You lived ${seconds} seconds.`);
// Enter number of years you live: 100
// You lived 3153600000 seconds.

const today = new Date();
const year = today.getFullYear(); // return year
const month = today.getMonth() + 1; // return month(0 - 11)
const date = today.getDate(); // return date (1 - 31)
const hourS = today.getHours(); // return number (0 - 23)
const minute = today.getMinutes(); // return number (0 -59)

console.log(`${date}-${month}-${year} ${hourS}:${minute}`); //28-7-2022 18:2
console.log(`${date}-${month}-${year} ${hourS}:${minute}`); //28-7-2022 18:4
console.log(`${date}/${month}/${year} ${hourS}:${minute}`); // 28/7/2022 17:58

const today1 = new Date();
const year1 = today1.getFullYear();
const month1 = today1.getMonth() + 1;
const date1 = today1.getDate();
const hourS1 = (today1.getHours() < 10 ? "0" : "") + today1.getHours();
const minute1 = (today1.getMinutes() < 10 ? "0" : "") + today1.getMinutes();

console.log(`${date1}-${month1}-${year1} ${hourS1}:${minute1}`);
