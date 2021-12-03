// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop
// https://youtu.be/PkZNo7MFNFg?t=8228

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total = total + myArr[i]; // or simply this line: total += myArr[i];
}

console.log(total);