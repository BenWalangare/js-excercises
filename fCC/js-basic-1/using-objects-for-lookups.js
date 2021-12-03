// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/using-objects-for-lookups
// for reference https://youtu.be/PkZNo7MFNFg?t=6956

// Setup
function phoneticLookup(val) {
  
  // Only change code below this line
  let lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot" : "Frank",
    "" : undefined,
  }
  
  let result = lookup[val];
  // Only change code above this line
  return result;
}

console.log(phoneticLookup("charlie"));