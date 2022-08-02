// q-1 ax+ by + c = 0
function solveLinEquation(a, b, c) {
  for (let i = 0; i * a <= c; i++)
    if ((c - i * a) % b == 0) {
      console.log("x=" + i + "\n y=" + (c - i * a) / b);
    }
  return;
}
console.log(solveLinEquation(2, 3, 7));

//q-2 ax2 + bx + c = 0
let a = prompt("enter a");
let b = prompt("enter b");
let c = prompt("enter c");
let y = b * b - 4 * a * c;
function solveQuadEquation1(a, b, c) {
  let x1 = (-b + Math.sqrt(y)) / (2 * a);
  return x1;
}
function solveQuadEquation2(a, b, c) {
  let x2 = (-b - Math.sqrt(y)) / (2 * a);
  return x2;
}
if (y < 0) {
  console.log("complex equation");
} else {
  x1 = solveQuadEquation1(a, b, c);
  x2 = solveQuadEquation2(a, b, c);
}
console.log(x1, x2);

//q-3
function printArray() {
  const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"];
  return webTechs;
}
console.log(printArray());

//q-4
function showDateTime() {
  const today1 = new Date();
  const year1 = today1.getFullYear();
  const month1 = today1.getMonth() + 1;
  const date1 = today1.getDate();
  const hourS1 = (today1.getHours() < 10 ? "0" : "") + today1.getHours();
  const minute1 = (today1.getMinutes() < 10 ? "0" : "") + today1.getMinutes();

  console.log(`${date1}/${month1}/${year1} ${hourS1}:${minute1}`);
}
showDateTime();

//q-5
function swap(x, y) {
  return [y, x];
}
console.log(swap(3, 8));

//q-6
function reverseArr() {
  let arr = [1, 2, 3, 4, 5];
  x = arr.reverse();
  return x;
}
console.log(reverseArr());

//q-7
let capitalizeArray = (x) =>{
    let array = ['momo', 'abhipsa' ,'abhisek', 'arati' ,'prasanta' ,'anshu']
    x = array.ca
}
