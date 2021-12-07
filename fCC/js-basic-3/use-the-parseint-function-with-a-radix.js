// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-the-parseint-function-with-a-radix
// https://youtu.be/PkZNo7MFNFg?t=9156

function convertToInteger(str) {
  return parseInt(str, 2);
}

console.log(convertToInteger("10011"));