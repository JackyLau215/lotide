// FUNCTION IMPLEMENTATION
// const assertEqual = require('../assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual.toString() === expected.toString()) {
//     console.log(`😎😎😎Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`☹️☹️☹️Assertion Failed: ${actual} != ${expected}`);
//   }
// };

const tail = function(array) {
  return array.slice(1);
}

// TEST CODE
// step 1
// assertEqual([1, 2, 3], [1, 2, 3])
// assertEqual(["Lighthouse", "Labs"], ["Lighthouse", "Labs"])

// // step 2
// const input = ["Hello", "Lighthouse", "Labs"]
// const result = tail(input);
// assertEqual(input.length, 3)
// assertEqual(result, ["Lighthouse", "Labs"]);

// // step 3
// const emptyInput = [];
// assertEqual(tail(emptyInput),[]);

module.exports = tail;