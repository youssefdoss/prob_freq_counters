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
 * sameFrequency: Given two positive integers, find out if the two numbers have the same
 * frequency of digits
 *
 * num1: number
 * num2: number
 *
 * returns: boolean
 */

/*
PSEUDOCODE

Convert the numbers into an iterable string format
Check for mismatch of number length: return false if they don't match

Create one frequency counter for each stringified numbers
Iterate through the keys of num1Freqs
  Ensure that each digit key has the same value in both num1Freqs and num2Freqs
    If not, return false

return true
*/
function sameFrequency(num1, num2) {
  const num1String = num1.toString();
  const num2String = num2.toString();

  if (num1String.length !== num2String.length) return false;

  const num1Freqs = createFrequencyCounter(num1String);
  const num2Freqs = createFrequencyCounter(num2String);

  for (let digitKey in num1Freqs) {
    if (num1Freqs[digitKey] !== num2Freqs[digitKey]) return false;
  }

  return true;
}
