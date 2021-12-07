// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown
// okay... this code is bullcrap

// Only change code below this line
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    let countArray = countdown(n - 1)
    countArray.unshift(n);
    return countArray;
  }
}
// Only change code above this line