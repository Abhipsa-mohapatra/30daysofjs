// 1 Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

let totalPriceofProducts = products
  .map((x) => x.price)
  .reduce((sum, num) => Number((sum += num)), 0);

console.log(totalPriceofProducts);

// 2 Find the sum of price of products using only reduce reduce(callback))
let sumofPriceofProducts = products.reduce(
  (sum, val) => Number((sum += val.price)),
  0
);
console.log(sumofPriceofProducts);

// 3 Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
let categorizeCountries = countriesjs.filter((x) => x.includes("ia"));
console.log(categorizeCountries);
categorizeCountries = countriesjs.filter((x) => x.includes("land"));
console.log(categorizeCountries);
categorizeCountries = countriesjs.filter((x) => x.includes("island"));
console.log(categorizeCountries);
categorizeCountries = countriesjs.filter((x) => x.includes("stan"));
console.log(categorizeCountries);

// 4 Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// let arrayofObjects = countriesjs.filter(({ fl, times }) => x);

// 5 Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

let getFirstTenCountries = countriesjs.slice(0, 10);
console.log(getFirstTenCountries);

// 6 Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

let getLastTenCountries = countriesjs.slice(-10);
console.log(getLastTenCountries);

// 7 Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)


let initial = [];
for (const x of countriesjs) {
  initial.push(x[0]); // get only the first letter of each element,  H C J R N M
}
console.log(initial);
let count = {};
initial.forEach((element) => {
  count[element] = (count[element] || 0) + 1;
});
console.log(count);


