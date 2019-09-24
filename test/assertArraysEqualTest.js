// const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../eqArrays');

const assert = require('chai').assert;
const assertArraysEqual  = require('../assertArraysEqual');




// TEST CODE
// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);


describe("#assertArraysEqual", () => {
  it("returns [1, 2, 3], [1, 2, 3], true", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]))
  })
  it("returns [1, 2, 3], [3, 2, 1], false", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]))
  })
  it("returns ['1', '2', '3'], ['1', '2', '3'], false", () => {
    assert.strictEqual(assertArraysEqual(['1', '2', '3'], ['1', '2', '3']))
  })
  it("returns ['1', '2', '3'], ['1', '2', 3], false", () => {
    assert.strictEqual(assertArraysEqual(['1', '2', '3'], ['1', '2', 3]))
  })

});
