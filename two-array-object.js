/**
 * twoArrayObject: Create an object from provided arrays of keys and values
 * Extra values will be ignored, and insufficient values will be filled with null
 *
 * keys: array
 * values: array
 *
 * return: object
 */

/*
PSEUDOCODE

Create an empty object for us to store our key-value pairs

Iterate through the indices of the keys array
  At each index
    Create a key-value pair in the object, where the key is equal to the value of the keys array at the index,
    and the value is equal to the value of the values array at the index if it exists, otherwise null.

Return object
*/

function twoArrayObject(keys, values) {
  let objOfPairs = {};

  for (let i = 0; i < keys.length; i++) {
    objOfPairs[keys[i]] = (i < values.length) ? values[i] : null;
  }

  return objOfPairs;
}
