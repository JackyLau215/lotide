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

const letterPositions = function(phrase) {
  let phraseArray = phrase.split("");
  phrase = phrase.replace(/ /g, "");
  const results = {};
  for (let i = 0; i < phraseArray.length; i++) {
    const letter = phraseArray[i];
    if (letter === " ") {
      // Do nothing
    } else if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};


// TEST CODE
console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);

module.exports = letterPositions;

