"use strict";

//Is the Number Less than or Equal to Zero?

function lessThanOrEqualToZero(num) {
  if (num <= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-5));

//Less Than 100?

function lessThan100(a, b) {
  let sum = a + b;
  if (sum < 100) {
    return true;
  } else {
    return false;
  }
}
console.log(lessThan100(5, 57));
console.log(lessThan100(77, 30));

//Using the "&&" Operator
function and(a, b) {
  return a && b;
}
console.log(and(true, true));
console.log(and(false, true));

//Are the Numbers Equal?
function isSameNum(num1, num2) {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}
console.log(isSameNum(4, 8));
console.log(isSameNum(8, 8));

//Tile Teamwork Tactics
function possibleBonus(a, b) {
  let diff = b - a;
  if (diff <= 6 && diff > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(possibleBonus(3, 7));
console.log(possibleBonus(0, 6));
console.log(possibleBonus(0, 6));
console.log(possibleBonus(6, 6));

//Is the Number a Repdigit

function isRepdigit(num) {
  if (num % 10 === num / 10 || num === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isRepdigit(6));
