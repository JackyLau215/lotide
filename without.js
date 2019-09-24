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

const without = function (original, removedItems) {
  let result = [];
  for (let i = 0; i < original.length; i++) {
    let foundItem = false;
    for (let j = 0; j < removedItems.length; j++) {
      if (original[i] === removedItems[j]){
        foundItem = true
      }
    }
    if(!foundItem) {
      result.push(original[i]);
    }
  }
  return result;
}

// TEST CODE
let actual = without([1, 2, 3], [1])
assertArraysEqual(actual, [2,3]);

actual = without(["1", "2", "3"], [1, 2, "3"])
assertArraysEqual(actual, ["1", "2"]);

module.exports = without;