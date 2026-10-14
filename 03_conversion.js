/*
SUMMARY:- "33" => 33
          "33abc" => NaN
          true => 1 ; false => 0
*/

// INVESTIGATION STUDY
// CASE-01 (STRING with numeric)
let score = "33";

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// CASE-02 (STRING with alphanumeric)
let score2 = "33abc";

let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

// CASE-03 (NULL)
let score3 = null;

let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

// CASE-04 (BOOLEAN)
let score4 = true;

let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4);
console.log(valueInNumber4);


//BOOLEAN CONVERSION

//CASE-01
let isLoggedIn = 1;

let valueInBoolean = Boolean(isLoggedIn);
console.log(valueInBoolean);

//CASE-02(EMPTY STRING)
let isLoggedIn2 = "";

let valueInBoolean2 = Boolean(isLoggedIn2);
console.log(valueInBoolean2);

//CASE-03(STRING)
let isLoggedIn3 = " "     //"123","ab","   "

let valueInBoolean3 = Boolean(isLoggedIn3);
console.log(valueInBoolean3);

