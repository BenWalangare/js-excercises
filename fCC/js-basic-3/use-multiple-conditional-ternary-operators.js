// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators
// https://youtu.be/PkZNo7MFNFg?t=9297

function checkSign(num) {
  return (num < 0) ? "negative"
  : (num > 0) ? "positive"
  : "zero";
}

console.log(checkSign(10));
console.log(checkSign(-10));
console.log(checkSign(0));