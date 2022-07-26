// q-1
let yourAge = prompt("enter yourAge");
console.log(yourAge);

if (yourAge >= 18) {
  console.log("you are old enough to drive");
} else {
  console.log(`you are left with ${18 - yourAge} years to drive`);
}

// q-2
yourAge = prompt("enter yourAge");
let myAge = prompt("enter myAge");
if (yourAge > myAge) {
  console.log(`you are ${yourAge - myAge} years older than me`);
} else if (yourAge == myAge) {
  console.log(`we are same in age`);
} else if (yourAge < myAge) {
  console.log(`you are ${myAge - yourAge} years younger than me`);
} else {
  console.log(`we are not same in age`);
}

// q-3
let a = prompt("enter a");
let b = prompt("enter b");
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

console.log(a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`);

// q-4
let num = prompt("enter num");
let newnum = num % 2;
console.log(newnum);
if (newnum == 0) {
  console.log(`${num} is an even number`);
} else {
  console.log(`${num} is an odd number`);
}

// level-2 q-1
let score = prompt("enter score");
if (80 <= score <= 100) {
  console.log("A");
} else if (70 <= score <= 79) {
  console.log("B");
} else if (60 <= score <= 69) {
  console.log("C");
} else if (50 <= score <= 59) {
  console.log("D");
} else {
  console.log("F");
}

// Q-2
let month = prompt("enter month");
if (month == "september" || month == "october" || month == "november") {
  console.log(`season is Autumn`);
} else if (month == "december" || month == "january" || month == "february") {
  console.log(`season is Winter`);
} else if (month == "march" || month == "april" || month == "may") {
  console.log(`season is Spring`);
} else if (month == "june" || month == "july" || month == "august") {
  console.log(`season is Summer`);
} else {
  console.log(`invalid input`);
}

// q-3 .

let day = prompt("enter day", "what is the day today?");
if (
  day == `monday` ||
  day == `tuesday` ||
  day == `wednesday` ||
  day == `thursday` ||
  day == `friday`
) {
  console.log(`${day} is a working day`);
} else {
  console.log(`${day} is a weekend`);
}

// q-4 level-3
month = prompt("enter month");
if (
  month == "january" ||
  month == "JANUARY" ||
  month == "march" ||
  month == "may" ||
  month == "july" ||
  month == "august" ||
  month == "october" ||
  month == "december"
) {
  console.log(`${month} has 31 days`);
} else if (month == "february") {
  console.log(`${month} has 28 days`);
} else {
  console.log(`${month} has 30 days`);
}

// how to add leap year
month = prompt("enter month");
let year = prompt("enter year");
if (
  month == "january" ||
  month == "JANUARY" ||
  month == "march" ||
  month == "may" ||
  month == "july" ||
  month == "august" ||
  month == "october" ||
  month == "december"
) {
  console.log(`${month} ${year} has 31 days`);
} else if (month == "february") {
  console.log(`${month} ${year} has 28 days`);
} else if (month == "february" && year == year / 400) {
  console.log(`${month} ${year} has 29 days`);
} else {
  console.log(`${month} ${year} has 30 days`);
}
