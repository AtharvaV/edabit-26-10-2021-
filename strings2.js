"use strict";

// Front 3 - Slice Check Repeat Concatenate

function frontThree(str) {
  if (str.length < 3) {
    return str.repeat(3);
  } else {
    return str.substr(0, 3).repeat(3);
  }
}

console.log(frontThree("Python"));
console.log(frontThree("Chocolate"));
console.log(frontThree("duh"));

// Repeat String

function repeatString(txt, n) {
  return txt.repeat(n);
}
console.log(repeatString("Mubashir", 2));
console.log(repeatString("Matt", 3));

// Reverse Psychology

function reversePsychology(s) {
  if (s === "") {
    return "Do not do anything";
  } else {
    return `Do not ${s}.`;
  }
}
console.log(reversePsychology("wash the dishes"));
console.log(reversePsychology("eat your lunch"));

// Check String for Spaces

function hasSpaces(str) {
  if (str.includes(" ")) {
    return true;
  } else {
    return false;
  }
}
console.log(hasSpaces("Foo"));
console.log(hasSpaces("Foo bar"));

// Is the Last Character an "N"?

function isLastCharacterN(word) {
  if (word.charAt(word.length - 1) === "n") {
    return true;
  } else {
    return false;
  }
}
console.log(isLastCharacterN("Aiden"));
console.log(isLastCharacterN("Roxy"));

// Array of Strings to Array of Numbers

function toNumberArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(parseFloat(arr[i]));
  }
  return newArr;
}
console.log(toNumberArray(["1", "2"]));
console.log(toNumberArray(["19", "14"]));

//Amazing Edabit!

function amazingEdabit(str) {
  if (str.includes("edabit")) {
    return str;
  } else {
    return `${str.slice("")} is not amazing`;
  }
}
console.log(amazingEdabit("CSS is amazing."));

//Get the Area of a Country

function areaOfCountry(name, area) {
  return `${name} is ${((area / 148940000) * 100).round(
    2
  )} of the total world's landmass`;
}

// Hitting the Jackpot

function testJackpot(result) {
  return result.every((a) => a === result[0]);
}
console.log(testJackpot(["@", "@", "@", "@"]));
