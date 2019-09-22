
// const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// console.log(map(words, (item) => {
//   return item[0];
// }))


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


// TEST CODE
assertEqual(eqArrays(map([1,2,3], (x) => x), [1,2,3]), true);
assertEqual(eqArrays(map([1, 2, 3], (x) => x), [3, 2, 1]), false);

assertEqual(eqArrays(map(["1", "2", "3"], (x) => x), ["1", "2", "3"]), true);
assertEqual(eqArrays(map(["1", "2", "3"], (x) => x), ["1", "2", 3]), false);

