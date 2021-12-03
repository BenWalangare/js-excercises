// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup
// https://youtu.be/PkZNo7MFNFg?t=8653

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let x = 0; x < contacts.length; x++) {       // kondisi looping, kalau ada yg kena, maka return "no such contact"
    if (contacts[x].firstName === name) {           // to find the name
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";                         // letaknya setara dengan for loop karena kalau ga diketemu kondisi di if contacts === firstName, maka, dia akan return "No such contact" 
  // Only change code above this line
}

lookUpProfile("Akira", "likes");