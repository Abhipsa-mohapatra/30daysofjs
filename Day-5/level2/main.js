//q1
console.log(countries);
console.log(webTechs1);

//q-2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
console.log(text);
let text1 = text.replace(/[.,]/g, "");
console.log(text1);
let words = text1.split(" ");
console.log(words);
console.log(words.length);

//q-3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart);
console.log(shoppingCart.unshift("Meat"));
console.log(shoppingCart.push("Sugar"));

console.log(shoppingCart);

console.log(shoppingCart.splice(4, 1));
console.log(shoppingCart);

shoppingCart[3] = "GreenTea";
console.log(shoppingCart);

//q-4  In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let countries1 = countries.includes("Ethiopia");
console.log(countries1);
if (countries1 === true) {
  console.log("ETHIOPIA");
} else {
  console.log(countries.push("Ethiopia"));
}

//q-5 In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let webTechs2 = webTechs1.includes("Sass");
console.log(webTechs2);
if (webTechs2 === true) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs3 = webTechs1.push("Sass");
  console.log(webTechs3);
}

//q-6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// level-3 q-1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages);

// Sort the array and find the min and max age
console.log(ages.sort());
let minAge = ages[0];
console.log(minAge);
let length = ages.length - 1;
maxAge = ages[length];
console.log(maxAge);

// Find the median age(one middle item or two middle items divided by two)
console.log(ages.length);
console.log(ages);
medianAge = ages.slice(4, 6);
console.log(medianAge);

// Find the average age(all items divided by number of items)
avrgAge = (19 + 22 + 19 + 24 + 20 + 25 + 26 + 24 + 25 + 24) / 10;
console.log(Math.floor(avrgAge));
// Find the range of the ages(max minus min)
ranges = maxAge - minAge;
console.log(ranges);
// Compare the value of (min - average) and (max - average), use abs() method

//q-2 1.Slice the first ten countries from the countries array
console.log(countries.slice(0, 10));

// Find the middle country(ies) in the countries array
midindex = Math.floor(countries.length / 2);

console.log(midindex);
console.log(countries[(midindex - 1, midindex)]);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
