//1 Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

//2 Iterate 10 to 0 using for loop, do the same using while and do while loop
for (i = 10; i >= 0; i--) {
  console.log(i);
}

i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);

//3 Iterate 0 to n using for loop
let n = prompt("enter n", "enter a number");
for (let i = 0; i <= n; i++) {
  console.log(i);
}

//q-4
for (i = 1; i <= 8; i++) {
  let pattern = "";
  for (j = 1; j < i; j++) {
    pattern += "#"; // a += i print 2 33 444 etc  a += j print 1 12 123 1234 etc
  }
  console.log(pattern);
}
for (i = 8; i >= 1; i--) {
  let revpattern = "";
  for (j = 1; j < i; j++) {
    revpattern += "#";
  }
  console.log(revpattern);
}

//q-5
for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

//q-6
for (let i = 0; i <= 10; i++) {
  console.log(`${i}  ${i ** 2}  ${i ** 3}`);
}

//q-7 Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//q-8  Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

//q-9 Use for loop to iterate from 0 to 100 and print only prime numbers
let count = 0;
for (let i = 0; i <= 100; i++) {
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) count++;
  }
  if (count == 2) console.log(i);
  count = 0;
}

// q-10
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum); //The sum of all numbers from 0 to 100 is 5050.

//q-11
let even = 0;
let odd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    even += i;
  } else if (i % 2 != 0) {
    odd += i;
  }
}
console.log(
  `The sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odd}.`
);

//q-12
even = 0;
odd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    even += i;
  } else if (i % 2 != 0) {
    odd += i;
  }
}
console.log([even, odd]);

//q-13 Develop a small script which generate array of 5 random numbers
let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random() * 10));
}
console.log(arr);

//Q-14 Develop a small script which generate array of 5 random numbers and the numbers must be unique
arr = [];
while (arr.length < 5) {
  let r = Math.floor(Math.random() * 10) + 1;
  if (arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

let uniqueRN = [];
for (let i = 0; i < 5; i++) {
  let r = Math.floor(Math.random() * 10);
  if (uniqueRN.indexOf(r) === -1) {
    uniqueRN.push(r);
  }
}
console.log(uniqueRN);

//q-15
let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
let result = "";
let chaactersLength = characters.length;

for (let i = 0; i < 5; i++) {
  result += characters.charAt(Math.floor(Math.random() * chaactersLength));
}

console.log(result);
