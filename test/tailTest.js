// const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');
// const eqArrays = require('../assertEqual');

// TEST CODE
// step 1
// assertArrayEqual(["Lighthouse", "Labs"], ["Lighthouse", "Labs"])


// const tailTest = function (actual, expected) {
//   if (eqArrays(actual, expected)) {
//     console.log(`😎😎😎Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`☹️☹️☹️Assertion Failed: ${actual} != ${expected}`);
//   };
// };

const res = tail([1, 2, 3]); //something
assertArraysEqual(res, [2,3]);
// // step 2
// const input = ["Hello", "Lighthouse", "Labs"]
// const result = tail(input);
// console.log(result);
// assertEqual(input.length, 3)
// assertArrayEqual(result, ["Lighthouse", "Labs"]);

// step 3
// const emptyInput = [];
// assertArrayEqual(tail(emptyInput),[]);