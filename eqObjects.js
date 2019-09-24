// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎😎😎Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☹️☹️☹️Assertion Failed: ${actual} != ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] instanceof Array && !eqArrays(object1[key], object2[key])) {
      return false;
    }
    if (!object1[key] instanceof Array && object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// Primitives As Values
const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};

const abc = {a: "1", b: "2", c: "3"};

// Arrays As Values
const cd = {c: "1", d: ["2", 3]};
const dc = {d: ["2", 3], c: "1"};

const cd2 = {c: "1", d: ["2", 3, 4]};

// TEST CODE
assertEqual(eqObjects(ab, ba), true); // true
assertEqual(eqObjects(ab, abc), false); // false

assertEqual(eqObjects(cd, dc), true); // true
assertEqual(eqObjects(cd, cd2), false); // false

module.exports = eqObjects;