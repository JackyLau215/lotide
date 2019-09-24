// const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
// const assert = require('chai').assert;


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

// describe("#eqArrays", () => {
//   it("returns [1, 2, 3], [1, 2, 3], true", () => {
//     assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]))
//   })
//   it("returns [1, 2, 3], [3, 2, 1], false", () => {
//     assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]))
//   })
//   it("returns ['1', '2', '3'], ['1', '2', '3'], false", () => {
//     assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']))
//   })
//   it("returns ['1', '2', '3'], ['1', '2', 3], false", () => {
//     assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]))
//   })

// });