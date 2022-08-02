// q-1 ax+ by + c = 0
function solveLinEquation(a, b, c) {
  for (let i = 0; i * a <= c; i++)
    if ((c - i * a) % b == 0) {
      console.log("x=" + i + "\n y=" + (c - i * a) / b);
    }
  return;
}
console.log(solveLinEquation(2, 3, 7));

//q-2 ax2 + bx + c = 0
let a = prompt("enter a");
let b = prompt("enter b");
let c = prompt("enter c");
let y = b * b - 4 * a * c;
function solveQuadEquation1(a, b, c) {
  let x1 = (-b + Math.sqrt(y)) / (2 * a);
  return x1;
}
function solveQuadEquation2(a, b, c) {
  let x2 = (-b - Math.sqrt(y)) / (2 * a);
  return x2;
}
if (y < 0) {
  console.log("complex equation");
} else {
  x1 = solveQuadEquation1(a, b, c);
  x2 = solveQuadEquation2(a, b, c);
}
console.log(x1, x2);

//q-3
function printArray() {
  const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"];
  return webTechs;
}
console.log(printArray()); //a-['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']

//q-4
function showDateTime() {
  const today1 = new Date();
  const year1 = today1.getFullYear();
  const month1 = today1.getMonth() + 1;
  const date1 = today1.getDate();
  const hourS1 = (today1.getHours() < 10 ? "0" : "") + today1.getHours();
  const minute1 = (today1.getMinutes() < 10 ? "0" : "") + today1.getMinutes();

  console.log(`${date1}/${month1}/${year1} ${hourS1}:${minute1}`);
}
showDateTime();

//q-5
function swap(x, y) {
  return [y, x];
}
console.log(swap(3, 8)); //[8, 3]

//q-6
function reverseArr() {
  let arr = [1, 2, 3, 4, 5];
  x = arr.reverse();
  return x;
}
console.log(reverseArr()); // [5, 4, 3, 2, 1]

//q-7
function capitalizeArray() {
  let array = ["momo", "abhipsa", "abhisek", "arati", "prasanta", "anshu"];
  x = array.toString();
  Array = x.toUpperCase();
  arr = Array.split(",");
  return arr;
}
console.log(capitalizeArray()); //a- ['MOMO', 'ABHIPSA', 'ABHISEK', 'ARATI', 'PRASANTA', 'ANSHU']

//q-8  addItem
function addItem() {
  let item = ["a", "b", "c"];
  x = item.push("d");
  return item;
}
console.log(addItem());

//q-9 removeItem.
function removeItem() {
  let item = ["a", "b", "c"];
  x = item.pop();
  return item;
}
console.log(removeItem());

//q-10 sumOfNumbers
function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
console.log(sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //a-55

//q-11 sumOfOdds
function sumOfOdds() {
  let odd = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
      odd += i;
    }
  }
  return odd;
}
console.log(sumOfOdds()); //a-2500

//q-12  sumOfEven
function sumOfEven() {
  let even = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      even += i;
    }
  }
  return even;
}
console.log(sumOfEven()); //a-2550

//q-13  evensAndOdds
// function evensAndOdds() {
//   let even = 0;
//   let odd = 0;
//   for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//       even++;
//     } else {
//       odd++;
//     }
//   }
//   return even, odd;
// }
// console.log(evensAndOdds(even, odd));

//2-14

function sumOfnum(num) {
  let sum = 0;
  for (let i = 0; i <= num.length; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfnum([1, 2, 3]));
console.log(sumOfnum([1, 2, 3, 4]));

//q-15
