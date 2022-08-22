//Q-1 Create an empty object called dog
let dog = {};

//2 Print the the dog object on the console
console.log(dog);

//3 Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog.name = "tommy";
dog.legs = 4;
dog.color = "black";
dog.age = 12;
dog.bark = " woof woof";
console.log(dog);
// ourDog["bark"] = "bow-wow";

//4 Get name, legs, color, age and bark value from the dog object
console.log(Object.keys(dog));
console.log(Object.values(dog));

//5 Set new properties the dog object: breed, getDogInfo
dog["breed"] = "pug";
console.log(Object.values(dog));


dog.getDogInfo = function () {
  console.log(dog(getDogInfo));
};
