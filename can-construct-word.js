'use strict';

/**
 * createFrequencyCounter: creates frequency counter object based on provided iterable
 *
 * items: iterable with the items to count
 *
 * returns frequency counter object
 */

function createFrequencyCounter(items) {
  let freqs = {};

  for (const item of items) {
    let curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}


/**
 * canConstructWord: checks if word can be constructed with the provided letters
 *
 * word: string
 * letters: string
 *
 * returns true if word can be constructed, false otherwise
 */

/*

PSEUDOCODE
Guard against case where length of letters is less than length of word

Create frequency counter for word
Create frequency counter for letters

Iterate through the letter keys in our word frequency counter
  For each letter key in the word counter:
    Ensure that the letter key exists in the letters counter.
    Ensure that its frequency in the letters counter exceeds or equals that of the words counter.

    If either of these conditions is not met: return false

If all the above catches are passed, return true

*/
function canConstructWord(word, letters) {
  if (word.length > letters.length) {
    return false;
  }

  let wordFreqs = createFrequencyCounter(word);
  let lettersFreqs = createFrequencyCounter(letters);

  for (let letterKey in wordFreqs) {
    let freqOfLetter = lettersFreqs[letterKey] || 0;
    if (wordFreqs[letterKey] > freqOfLetter) {
      return false;
    }
  }

  return true;
}
