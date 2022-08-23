// Exercises:Level 1
// Display the countries array as a table
console.table(countriesjs);

// Display the countries object as a table
console.table(Countries);

// Use console.group() to group logs
const names = ["Asabeneh", "Brook", "David", "John"];
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.group("Names");
console.log(names);
console.log(countries);
console.groupEnd();

// 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, "10 is greater than 2*10");

// Write a warning message using console.warn()
console.warn("This is a warning");

// Write an error message using console.error()
console.error("This is an error message");

// Exercises:Level 3
// Check the speed difference among the following loops: while, for, for of, forEach
const name = ["Asabeneh", "Brook", "David", "John"];
console.time("Regular while loop");
let i = 0;
while (i < name.length) {
  console.log(name[i]);
  i++;
}
console.timeEnd("Regular while loop");
console.time("Regular for loop");
for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const Names of name) {
  console.log(Names);
}
console.timeEnd("for of loop");

console.time("forEach loop");
name.forEach((Names) => {
  console.log(Names);
});
console.timeEnd("forEach loop");
