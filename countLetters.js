// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎😎😎Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☹️☹️☹️Assertion Failed: ${actual} != ${expected}`);
  }
};

const countLetters = function (phrase) {
  let phraseArray = phrase.split("");
  let result = {};
  for(const letter of phraseArray) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
}

// TEST CODE
console.log(countLetters("lighthouse in the house"));

assertEqual(countLetters("lighthouse in the house")['l'], 1);
assertEqual(countLetters("lighthouse in the house")['h'], 4);