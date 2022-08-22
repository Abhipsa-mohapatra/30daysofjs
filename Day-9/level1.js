const arr = [5, 1, 3, 2, 6];

//convert to binary
let binary = function (x) {
  return x.toString(2);
};
let op = arr.map(binary);
console.log(op); //(5)['101', '1', '11', '10', '110']

//find odd num from given array

op = arr.filter((x) => x % 2 !== 0); //gives the value (3)[5, 1, 3]
console.log(op);

op = arr.map((x) => x % 2 !== 0);
console.log(op); //(5)[true, true, true, false, false]

//find the max value of the array

op = arr.reduce(function (acc, cur) {
  if (cur > acc) {
    acc = cur;
  }
  return acc;
}, 0);
console.log(op);

//LEVEL-1 STARTS HERE

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Explain the difference between forEach, map, filter, and reduce.
//ANS ==>

// Define a callback function before you use it in forEach, map, filter or reduce.

//3 Use forEach to console.log each country in the countries array.
let country = countries.forEach((x) => console.log(x));

//4 Use forEach to console.log each name in the names array.
names.forEach((x) => console.log(x));

//5 Use forEach to console.log each number in the numbers array.
numbers.forEach((x) => console.log(x));

// 6 Use map to create a new array by changing each country to uppercase in the countries array.
let newArr = countries.map((x) => x.toUpperCase());
console.log(newArr);

// 7 Use map to create an array of countries length from countries array.

// 8 Use map to create a new array by changing each number to square in the numbers array
newArr = numbers.map((x) => x * x);
console.log(newArr);

// 9 Use map to change to each name to uppercase in the names array
newArr = names.map((x) => x.toUpperCase());
console.log(newArr);

// 10 Use map to map the products array to its corresponding prices.
newArr = products.map((x) => x.product + " = " + x.price);
console.log(newArr);

// 11 Use filter to filter out countries containing land.
newArr = countries.filter((x) => x.includes("land"));
console.log(newArr);

// 12 Use filter to filter out countries having six character.
newArr = countries.filter((x) => x.length === 6);
console.log(newArr);

// 13 Use filter to filter out countries containing six letters and more in the country array.

newArr = countries.filter((x) => x.length >= 6);
console.log(newArr);

// 14 Use filter to filter out country start with 'E';
newArr = countries.filter((x) => x.includes("E"));
console.log(newArr);

// 15 Use filter to filter out only prices with values
newArr = products.filter((x) => x.price);
console.log(newArr);

// 16 eclare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
getStringLists = countries.map((x) => console.log(x.toString()));

// 17 Use reduce to sum all the numbers in the numbers array.
let sumofAll = numbers.reduce(function (sum, val) {
  sum += val;
  return sum;
}, 0);
console.log(sumofAll);

// 18 Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries


//19 Explain the difference between some and every
//ANS-19 ==>
// in some if one of the value is true for the condition then it returns true but in every the condition is applied for each and every element of the Array.if the condition is false for 1 element then it returns false.

//20 Use some to check if some names' length greater than seven in names array
const someNamesLength = names.some((name) => name.length > 7);
console.log(someNamesLength);

//21 Use every to check if all the countries contain the word land
let checkPresenceofLand = countries.every((x) => x.includes("land"));
console.log(checkPresenceofLand);

//22 Explain the difference between find and findIndex.
//ANS-22 ==>
//in find we get the element or value according to the condition bit in findIndex we get the index of the element.
//difference bet find n filter
//ans ==> in find we get the value. but in filter the value store in an array and return the new array

//23 Use find to find the first country containing only six letters in the countries array
let findSixLetter = countries.find((x) => x.length === 6);
console.log(findSixLetter);

//24 Use findIndex to find the position of the first country containing only six letters in the countries array
let findIndexSixLetter = countries.findIndex((x) => x.length === 6);
console.log(findIndexSixLetter);

//25 Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
let findIndexofNorway = countries.findIndex((x) => x.includes("Norway"));
console.log(findIndexofNorway);

//26 Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
let findIndexofRussia = countries.findIndex((x) => x.includes("Russia"));
console.log(findIndexofRussia);
