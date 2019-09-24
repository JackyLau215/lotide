// const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const middle  = require('../middle');



// TEST CODE
// assertArraysEqual(middle([1]), [1]);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);


describe("#middle", () => {
  it("returns [1] to [1]", () => {
    assert.strictEqual(assertArraysEqual(middle([1]), [1]));
  });
  
  it("returns [1, 2] to []", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2]), []));
  });

  it("returns [1, 2, 3, 4, 5] to [3]", () => {
    assert.strictEqual(assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]));
  });

});