const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

describe("#assertEqual", () => {
  it("returns 'Lighthouse Labs', 'Bootcamp, false", () => {
    assert.strictEqual(assertEqual('Lighthouse Labs', 'Bootcamp'))
  })
  it("returns 1, 1, true", () => {
    assert.strictEqual(assertEqual(1, 1))
  })
  

});