// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`😎😎😎Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`☹️☹️☹️Assertion Failed: ${actual} != ${expected}`);
//   }
// };

// const eqArrays = function (array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }

//   return true;
// };

// const assertArraysEqual = function (actual, expected) {
//   if (eqArrays(actual, expected)) {
//     console.log(`😎😎😎Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`☹️☹️☹️Assertion Failed: ${actual} != ${expected}`);
//   };
// };

const middle = function(array) {
  let newArray = [];
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 !== 0) {
    let midIndex = Math.floor(array.length / 2);
    newArray = array.slice(midIndex, midIndex + 1);
    return newArray;
  } else {
    let midIndex = Math.floor(array.length / 2);
    newArray = array.slice(midIndex - 1, midIndex + 1);
    return newArray;
  };
};


// // TEST CODE
// console.log(middle([1]));
// console.log(middle([1, 2]));

// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4, 5]));

// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
// write a middle function that returns only miiddle elements
// arrays with one or two elements, there is no middle. Return an empty array
// arrays with odd number of elements, an array containing a single middle element should be returned
// arrays with an even number of elements, an array containing the two elements in the middle should be returned

module.exports = middle;