// 1 Destructure the countries object print name, capital, population and languages of all countries
for (const { name, capital, population, languages } of Countries) {
  console.log(name, capital, population, languages);
}

// 2 A  junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

let jsScore = student[2].slice(2, 3).join();
console.log(jsScore);
let reactScore = student[2].slice(3, 4).join();
console.log(reactScore);

let [name, skills] = student;
console.log(name, skills, jsScore, reactScore); // David (4) ["HTM", "CSS", "JS", "React"] 90 95

// 3 Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

let a = [];
let convertArrayToObject = function (students) {
  for (let [Name, Skills, Scores] of students) {
    a.push({ Name, Skills, Scores });
  }

  return a;
};
console.log(convertArrayToObject(students));

// 4 Copy the student object to newStudent without mutating the original object. In the new object add the following ?
//==> Add Bootstrap with level 8 to the front end skill sets
//==? Add Express with level 9 to the back end skill sets
//==> Add SQL with level 8 to the data base skill sets
//==> Add SQL without level to the data science skill sets

const Student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

const copiedStudent = { ...Student };
copiedStudent.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });
copiedStudent.skills.backEnd.push({ skill: "Express", level: 9 });
copiedStudent.skills.dataBase.push({ skill: "SQL", level: 8 });
copiedStudent.skills.dataScience.push("SQL");
console.log(copiedStudent);
