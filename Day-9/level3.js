// Use the countries information, in the data folder. Sort countries by name, by capital, by population
// console.log(Countries.capital.sort());

//by capital

Countries.sort((x, y) => {
  if (x.capital < y.capital) return -1;
  if (x.capital > y.capital) return 1;
  return 0;
});
Countries.forEach((Country) => {
  console.log(Country);
});

// another method
Countries.sort((x, y) => {
  //for ascending order return x.capital.localeCompare(y.capital)
  return y.capital.localeCompare(x.capital); // descending order
});
Countries.forEach((Country) => {
  console.log(Country);
});

// by population
Countries.sort((a, b) => {
  return a.population - b.population; //ascending order
});
Countries.forEach((Country) => {
  console.log(Country);
});

// *** Find the 10 most spoken languages:
// count = {};
// Countries.languages.forEach((element) => {
//   count[element] = (count[element] || 0) + 1;
// });
// console.log(count);

// Use countries_data.js file create a function which create the ten most populated countries
Countries.sort((a, b) => {
  return a.population - b.population; //ascending order
});
Countries.map((Country) => {
  console.log(Country);
});
let populatedCountries = Country.slice(0, 10);
console.log(populatedCountries);
