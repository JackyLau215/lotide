// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎😎😎Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☹️☹️☹️Assertion Failed: ${actual} != ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😎😎😎Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☹️☹️☹️Assertion Failed: ${actual} != ${expected}`);
  };
};

const flatten = function (nestedArrays) {
  let result = [];
  for (let i = 0; i < nestedArrays.length; i++) {
    if (Array.isArray(nestedArrays[i])) {
      for (let j = 0; j < nestedArrays[i].length; j++) {
        result.push(nestedArrays[i][j]);
      } 
    } else {
      result.push(nestedArrays[i]);
    }
  }
  return result;
};

// TEST CODE
let actual = flatten([1, 2, [3, 4], 5, [6]]);

assertArraysEqual(actual, [1, 2, 3, 4, 5, 6]);