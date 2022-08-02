//q-1
function fullname() {
  let firstName = "Abhipsa";
  let lastName = "Mohapatra";
  let space = " ";
  let fullName = firstName + space + lastName;
  console.log(fullName);
}

fullname();

//q-2
function fullname(fname, space, lname) {
  let fullname = fname + space + lname;
  return fullname;
}
console.log(fullname("Abhipsa", " ", "Mohapatra"));

//q-3
function addnumbers() {
  let numOne = 4;
  let numTwo = 5;
  let sum = numOne + numTwo;

  console.log(sum);
}

addnumbers(); //a-9

//q-4
function areaOfRectangle() {
  let l = 10;
  let w = 12;
  let area = l * w;
  return area;
}
console.log(areaOfRectangle()); //a-120

//q-5
function perimeterOfRectangle(l, w) {
  return 2 * (l + w);
}
console.log(perimeterOfRectangle(12, 20)); //a-64

//Q-6 volume = length x width x height.
let volumeOfRectPrism = (l, w, h) => {
  let volume = l * w * h;
  return volume;
};
console.log(volumeOfRectPrism(3, 4, 5)); //a-60

//q-7 area = π x r x r
let areaOfCircle2 = (r) => {
  return Math.PI * r * r;
};
console.log(areaOfCircle2(4)); //a=50.26548245743669

//q-8  circumference = 2πr
let circumOfCircle = (r) => {
  return 2 * Math.PI * r;
};
console.log(circumOfCircle(4)); //a-25.132741228718345

//q-9 density= mass/volume
let density = (mass, vol) => {
  return mass / vol;
};
console.log(density(20, 10)); //a-2

//q-10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken speed = distance covered by moving obj / time
let speed = (dist, time) => {
  return dist / time;
};
console.log(speed(50, 2)); //a-25

//q-11 weight = mass x gravity
let weight = (mass, gravity = 9.81) => {
  return mass * gravity;
};
console.log(weight(50)); //a-490.5

//q-12 oF = (oC x 9/5) + 32
function convertCelsiusToFahrenheit() {
  let oC = prompt("enter oC");
  let oF = (oC * 9) / 5 + 32;
  return oF;
}
console.log(convertCelsiusToFahrenheit()); //whatever value given by user then get the answer

//q-13 bmi = weight in Kg / (height x height) in m2 The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

let bmi = (weight, height) => {
  let BMI = (weight / ((height * height) / 10000)).toFixed(2);
  return BMI;
};
console.log(bmi(80, 177));
if (bmi < 18.5) {
  console.log("Underweight");
} else if (18.5 < bmi < 24.9) {
  console.log("Normal weight");
} else if (25 < bmi < 29.9) {
  console.log("Overweight");
} else if (bmi >= 30) {
  console.log(" Obese");
} else {
  console.log(" error");
}

// q-14
function checkSeason() {
  let month = prompt("enter month");

  if (month == "september" || month == "october" || month == "november") {
    console.log(`season is Autumn`);
  } else if (month == "december" || month == "january" || month == "february") {
    console.log(`season is Winter`);
  } else if (month == "march" || month == "april" || month == "may") {
    console.log(`season is Spring`);
  } else if (month == "june" || month == "july" || month == "august") {
    console.log(`season is Summer`);
  } else {
    console.log(`invalid input`);
  }
  return month;
}
console.log(checkSeason());


