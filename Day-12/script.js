// 1 Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let totalAnnualIncome = function (a, b, c) {
  return Number(a * 12 + b + c * 12);
};
console.log(totalAnnualIncome(4000, 10000, 5500));

//or
let x =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
let pattern = /\d+/g;
let matches = x.match(pattern);
console.log(matches); //(3) ['4000', '10000', '5500']
let totalAnnualincome = function () {
  return Number(matches[0]) * 12 + Number(matches[1]) + Number(matches[2]) * 12;
};
console.log(totalAnnualincome()); //124000

// 2 The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
let str =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";
pattern = /\-?\d+/g;
let particles = str.match(pattern);
console.log(particles); // ['-12', '-4', '-3', '-1', '0', '4', '8']
particles.sort((a, b) => {
  return a - b; //ascending order
});
particles.reduce((particle) => {
  console.log(particle);
});

// Write a pattern which identify if a string is a valid JavaScript variable
let is_valid_variable = (v) => {
  pattern = /^[$|_|a-z|A-Z][1-9|a-z|A-Z|_]*?/;
  return pattern.test(v);
};

console.log(is_valid_variable("first_name"));
console.log(is_valid_variable("first-name"));
console.log(is_valid_variable("1first_name"));
console.log(is_valid_variable("firstname"));
