"use strict";

function removeEmptyArrays(arr) {
  const arr2 = arr.filter((x) => x !== []);
  return arr2;
}
console.log(removeEmptyArrays(["a", "b", []]));

// Fix the Error / Comparing Arrays (Part #2)

function checkEquals(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

const array = checkEquals([34, 56, 98], [34, 56, 98]);
console.log(array);

// Find the Bug: Checking Even Numbers

function checkAllEven(arr) {
  return arr.every((x) => x % 2 === 0);
}

let val = checkAllEven([1, 2, 3, 4]);
console.log(val);
val = checkAllEven([2, 4, 6]);
console.log(val);

//Fix the Error: Vowel Edition

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}

console.log(removeVowels("candy"));
console.log(removeVowels("people"));

//Find the Bug: Returning Valid Units of Measure

// function hasValidUnitOfMeasure(product = {}) {
//   const { unitOfMeasure, comment } = product;
//   return comment || unitOfMeasure === "L" || unitOfMeasure === "PCE";
// }

// const value = hasValidUnitOfMeasure({ product: "Milk", unitOfMeasure: "L" });
// console.log(value);

//You FAILEDPASSED the Exam

function gradePercentage(userScore, passScore) {
  let s = "You ";
  userScore = parseInt(userScore.substring(0, userScore.length - 1));
  passScore = parseInt(passScore.substring(0, passScore.length - 1));
  if (userScore < passScore) s = s + "FAILED";
  else s = s + "PASSED";
  return s + " " + "the Exam";
}

console.log(gradePercentage("85%", "85%"));
console.log(gradePercentage("65%", "90%"));
console.log(gradePercentage("65%", "66%"));

//Fix the Error: Mutating Arrays

function minusOne(arr) {
  arr.slice(-1);
  return arr;
}
console.log(minusOne([1, 2, 3, 4, 5]));
