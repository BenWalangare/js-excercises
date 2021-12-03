// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/testing-objects-for-properties

// sake of reference https://youtu.be/PkZNo7MFNFg?t=7063

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
};

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
}

// below is the simplest solution

function checkObj(obj, checkProp) {
  // solution below this line
  return obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found";
}
  // solution above this line
  

console.log(checkObj(myObj, "gift"));
console.log(checkObj(myObj, "bullcrap"));