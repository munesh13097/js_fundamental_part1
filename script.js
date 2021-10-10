"use strict";

/*console.log(10 + 0 + 9 + 8);
console.log("munesh");

let firstname = "munesh kumar"; //declaring a variable
console.log(firstname);

let age = 23.34;
console.log(age);


let lvValue = true;
console.log(lvValue);
console.log(typeof lvValue);   "typeof used for get type of variable"


let age;
console.log(age);

//
console.log(typeof null); //treated like object this is a bug


// 3 ways of decalring va variable   let const var

let PI = 3.134;
console.log(typeof PI);
*/

// let use when we need to change the value in the code again
// const cannot be changes
//const birthYear = 1993;
//empty constatn is not mandatory it must have some valie
//var name = 'munesh';
//var not same as let
// never use var in future
/*const agejonas = 2021 - 1997;
console.log(agejonas);

console.log("munesh" + "kiumar");

let x = 5;
x += 5;
console.log(x); */

/*let x = 8 < 9;
console.log(x);*/

/*let marksWeight = 78,
  marksHeight = 1.69,
  johnWeight = 92,
  johnHeight = 1.92,
  marksBMI,
  johnBMI,
  markHeigherBMI;

marksBMI = marksWeight / marksHeight ** 2;
console.log("marks bmi is  " + marksBMI);
johnBMI = johnWeight / johnHeight ** 2;
console.log("john bmi is  " + johnBMI);

markHeigherBMI = marksBMI > johnBMI;
console.log("comparision of " + markHeigherBMI);
if (markHeigherBMI) {
  console.log(`marks bmi ${marksBMI} is greater than john bmi`);
} else {
  console.log(`john bmi ${johnBMI} is greater than mark bmi`);
}
*/
//"temlplate literrals/STRING"; ->`I'AM  ${FIRSTNAME}`

/*let x = `i
am
muensh
kumar`;

console.log(x);

const _name = `hi ${2 * 2}
muensh`;

console.log(_name);*/

//console.log("I’am munesh \n kumar ");

// convert string to number
/*const _year = "1991";
console.log(_year - 18);*/

//falsy value o , '' , undefined , null ,nan

//strict and loose oeprator
// 18 ===  18 strict answer true
// 18 == '18' false answer true
//18 === '18' false
//good to use ===

//let _var = prompt("what is ur fav num");
//console.log(typeof Number(_var));
//prompt will give string value always

/*const dolphinScore1 = 96,
  dolphinScore2 = 108,
  dolphinScore3 = 89;

const kolasScore1 = 96,
  kolasScore2 = 108,
  kolasScore3 = 110;

//calculate average
const averageDolphin = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
const averageKolas = (kolasScore1 + kolasScore2 + kolasScore3) / 3;
//console.log(averageDolphin, averageKolas);*/

/*if (averageDolphin === averageKolas) {
  console.log("draw");
} else if (averageKolas > averageDolphin) {
  console.log("kolas won");
} else {
  console.log("dolphin won");
}

if (averageDolphin > averageKolas && averageDolphin >= 100) {
  console.log("dolphin won");
} else if (averageKolas > averageDolphin && averageKolas >= 100) {
  console.log("kollas won");
} else if (
  averageKolas === averageDolphin &&
  averageKolas >= 100 &&
  averageDolphin >= 100
) {
  console.log("both won");
} else {
  console.log("ghnta mila");
}
*/

//ternamry opertator

/*const billPaid = Number(prompt("enter amount"));

console.log(
  `The bill paid is ${
    billPaid >= 50 && billPaid <= 300
      ? billPaid + (15 * billPaid) / 100
      : billPaid + (20 * billPaid) / 100
  }`
)*/

//array

let _array_1 = ["munesh", 1, "raesh"];

_array_1 = [true];
console.log(_array_1);
