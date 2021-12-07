// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/generate-random-whole-numbers-within-a-range
// https://youtu.be/PkZNo7MFNFg?t=9024

function randomRange(myMin, myMax) {
  // Only change code below this line

return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

  // Only change code above this line
}

console.log(randomRange(10, 20))