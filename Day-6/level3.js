//1

console.log(countries.slice());
//2
let copiedarr = [];
for (const country of countries) {
  copiedarr.push(country);
}
console.log(copiedarr);

let storedcountries = copiedarr.sort();

console.log(storedcountries);
//3
console.log(webTechs.sort());
console.log(mernStack.sort());
//4,6
countWithLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    countWithLand.push(countries[i]);
  }
}
console.log(countWithLand);
//5

countriesCharLength = [];
for (let i = 0; i < countries.length; i++) {
  countriesCharLength.push(countries[i].length);
}
console.log(countriesCharLength);
highestcharlength = Math.max(...countriesCharLength);
console.log(countries[countriesCharLength.indexOf(highestcharlength)]);
//7

countriesWithFourChars = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 4) {
    countriesWithFourChars.push(countries[i]);
  }
}
console.log(countriesWithFourChars);
//8

countriesWithChars = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length >= 2) {
    countriesWithChars.push(countries[i]);
  }
}
console.log(countriesWithChars);
//9

let reverseArr = [];
console.log(countries.reverse());
for (let i = 0; i < countries.length; i++) {
  reverseArr.push(countries[i].toUpperCase());
}
console.log(reverseArr);
