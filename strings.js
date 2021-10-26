"use strict";

// Return Something to Me!

function giveMeSomething(a) {
  return "something" + " " + a;
}
console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("is cooking"));
console.log(giveMeSomething(" is cooking"));

//Boolean to String Conversion

function boolToString(flag) {
  return flag.toString();
}

console.log(boolToString(true));
console.log(boolToString(false));

//Miserable Parody of a Calculator

function calculator(str) {
  return eval(str);
}

console.log(calculator("23+4"));
console.log(calculator("6/(9-7)"));

// Compare Strings by Count of Characters

function comp(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

console.log(comp("AB", "CD"));
console.log(comp("ABC", "DE"));

//Is the String Empty?

function isEmpty(s) {
  if (s.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEmpty(""));
console.log(isEmpty(" "));
console.log(isEmpty("38215"));

// Recursion: Length of a String

function length(str) {
  if (str == "") {
    return 0;
  } else {
    return length(str.substring(1)) + 1;
  }
}
console.log(length("shipment"));

//Return a String as an Integer

function stringInt(str) {
  return parseInt(str);
}
console.log(stringInt("6"));
console.log(stringInt("2"));
console.log(stringInt("10"));
console.log(stringInt("666"));

//Concatenate First and Last Name into One String

function concatName(firstName, lastName) {
  return lastName.concat(", ", firstName);
}
console.log(concatName("John", "Doe"));
console.log(concatName("First", "Last"));

// Format I: Template String
function format(a, b, c) {
  const template = `Their names were: ${a}, ${b} and ${c}.`;
  return template;
}
console.log(format("John", "Joe", "Jack"));

//Is the String Odd or Even?
function oddOrEven(s) {
  if (s.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(oddOrEven("apples"));
console.log(oddOrEven("mango"));

// Word without First Character

function newWord(str) {
  return str.substring(1);
}
console.log(newWord("pokhara"));
console.log(newWord("biratnagar"));

//Name Greeting!

const helloName = (name) => `Hello ${name}!`;
console.log(helloName("Gerald"));
console.log(helloName("Fatima"));

//Convert an Array to a String

function arrayToString(arr) {
  return arr.join("");
}
console.log(arrayToString([1, 2, 3, 4, 5, 6]));
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));

// Find the Index

function findIndex(arr, str) {
  return arr.indexOf(str);
}
console.log(findIndex(["abc", "ghj", "banana", "grape"], "grape"));
console.log(findIndex(["a", "b", "c", "d", "e", "f"], "f"));

// String and Number Conversions

function intToString(num) {
  return num.toString();
}
function stringToInt(num) {
  return parseInt(num);
}
console.log(intToString(4));
console.log(stringToInt("4"));

//Word Numbers!

function word(s) {
  switch (s) {
    case "one":
      return 1;
      break;
    case "two":
      return 2;
      break;
    case "three":
      return 3;
      break;
    case "four":
      return 4;
      break;
    case "five":
      return 5;
      break;
    case "six":
      return 6;
      break;
    case "seven":
      return 7;
      break;
    case "eight":
      return 8;
      break;
    case "nine":
      return 9;
      break;
    case "zero":
      return 0;
      break;
  }
}
console.log(word("one"));
console.log(word("zero"));
console.log(word("nine"));
