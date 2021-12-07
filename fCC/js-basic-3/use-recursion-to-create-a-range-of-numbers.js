// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers
// note: this shit brutal, I hate to understand this

function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum + 1) {
  return [];
} else {
  const countArray = rangeOfNumbers(startNum + 1, endNum);
  countArray.unshift(startNum);
  return countArray;
}
}

console.log(rangeOfNumbers(10, 20))