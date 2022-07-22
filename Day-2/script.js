let challenge = "30 Days Of JavaScript"; //declare variable challenge 1
console.log(challenge); // assign a value 2
console.log(challenge.length); //q-3
console.log(challenge.toUpperCase()); //q-4
console.log(challenge.toLowerCase()); //q-5
console.log(challenge.substring(3, 21)); //q-6
console.log(challenge.substring(0, 2)); //q-7
console.log(challenge.includes("Script")); //q-8
console.log(challenge.split()); //q-9
console.log(challenge.split(" ")); //q-10

let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(company.split(", ")); //q-11

console.log(challenge.replace("JavaScript", "python")); //q-12
console.log(challenge.charAt(15)); //q-13
console.log(challenge.indexOf("J"));
console.log(challenge.charCodeAt(11)); //q-14
console.log(challenge.indexOf("a")); //q-15
console.log(challenge.lastIndexOf("a")); //q-16

let str =
  "You cannot end a sentence with because because because is a conjunction";
console.log(str);
console.log(str.indexOf("because")); //q-17

console.log(str.lastIndexOf("because")); //q-18
console.log(str.search("because")); //q-19

let challng = "  30 Days Of JavaScript  ";
console.log(challng);
console.log(challng.trim()); //q-20

console.log(challenge.startsWith("30")); //q-21
console.log(challenge.endsWith("JavaScript")); //q-22
console.log(challenge.match(/a/g)); //q-23
console.log(challenge.match("a"));

let string = "30 Days of";
let space = " ";
console.log(string.concat(space, "JavaScript")); //q-24

console.log(challenge.repeat("2")); //q-25

// level 2 questions starts here

let quote = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`;
console.log(quote); // q-1

let quoteMT = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`;
console.log(quoteMT); //q-2

let num = "10";
console.log(num);
console.log(typeof num);
let numint = +num;
console.log(numint);
console.log(typeof numint); //q-3

num = 9.8;
numint = parseFloat(num);
console.log(Math.ceil(numint)); //q-4

let py = "python";
let ja = "jargon";
console.log(py.search("on"));
console.log(ja.search("on")); //q-5

ja = "I hope this course is not full of jargon.";
console.log(ja);
console.log(ja.search("jargon")); //q-6

let randomnum = Math.random() * 100;
console.log(randomnum); // gives random decimal number
console.log(Math.floor(randomnum)); // gives random integer number q-7

randomnum = Math.random() * (100 - 50) + 50;
console.log(randomnum);
console.log(Math.floor(randomnum)); //q-8

randomnum = Math.random() * 299;
console.log(randomnum);
console.log(Math.floor(randomnum)); //q-9

let js = "JavaScript";
console.log(js);
console.log(js.length);
console.log(js.charAt(Math.floor(Math.random() * 10))); //q-10

console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125"); //q-11

console.log(str.substr("31,48")); //q-12

//level 3
let sentence = `"Love is the best thing in this world. Some found their love and some are still looking for their love."`;
console.log(sentence);
//console.log(sentence.match("love"));
console.log(sentence.match(/love/g)); //q-1

console.log(str);
console.log(str.match(/because/gi)); //q-2

const Sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(Sentence); // print the original value
console.log(Sentence.replace(/[&%@#;]/g, "")); //remove ONLY THE GIVEN characters
console.log(Sentence.replace(/[^a-zA-Z ]/g, "")); //remove all the special characters

string =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let salarymonth = 5000;
let salaryannual = salarymonth * 12;
console.log(salaryannual);
let annualbonus = 10000;
console.log(annualbonus);
let onlinemonth = 15000;
let onlineannual = onlinemonth * 12;
console.log(onlineannual);
let annualincome = salaryannual + annualbonus + onlineannual;
console.log(annualincome);
