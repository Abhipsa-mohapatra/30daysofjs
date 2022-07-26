// Declare an empty array; q-1
const arr = Array();
console.log(arr); // []

const array = [];
console.log(arr);

// Declare an array with more than 5 number of elements  q-2
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
console.log("Web technologies:", webTechs);

// Find the length of your array q-3
console.log("Number of web technologies:", webTechs.length); //7

// Get the first item, the middle item and the last item of the array q-4
console.log(webTechs[0]);
console.log(webTechs[3]);
console.log(webTechs[6]);
let lastindex = webTechs.length - 1;
console.log(webTechs[lastindex]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5  q-5
const mixedDataTypes = [
  "Asabeneh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
  "I live in Odisha",
];
console.log(mixedDataTypes);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon q-6
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  " IBM",
  "Oracle",
  " Amazon",
];
console.log("it Companies:", itCompanies); //q-7
console.log("Number of it Companies:", itCompanies.length); //q-8
console.log(itCompanies[0]); //q-9
console.log(itCompanies[3]); //q-9
console.log(itCompanies[6]); //q-9
lastindex = itCompanies.length - 1;
console.log(itCompanies[lastindex]); //q-9

console.log(itCompanies[0]); //q-10
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

itCompanies[0] = "FACEBOOK"; //Q-11
itCompanies[1] = "GOOGLE";
itCompanies[2] = "MICROSOFT";
itCompanies[3] = "APPLE";
itCompanies[4] = " IBM";
itCompanies[5] = "ORACLE";
itCompanies[6] = " AMAZON";
console.log(itCompanies);

let sentence =
  "Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.";
console.log(sentence.split(" "));

console.log(itCompanies.join()); //q-12

let index = itCompanies.indexOf("Goggle");
if (index === 1) {
  console.log("This  does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}
