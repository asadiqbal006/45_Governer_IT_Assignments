"use strict";
//Making Array of magicians
let magicianNames = [
    "Harry Potter",
    "David",
    "Peter",
    "Asta",
    "Yono",
];
function make_great(magicianNames2) {
    let greatMagicians = [];
    for (let i = 0; i < magicianNames2.length; i++) {
        greatMagicians.push(magicianNames[i] + " the Great");
    }
    return greatMagicians;
}
function show_magicians(magicians_Names) {
    for (let i = 0; i < magicians_Names.length; i++) {
        console.log(magicians_Names[i]);
    }
}
let newMagiciansName = make_great(magicianNames);
//Creaitng a copy of magician name array
let magiciansCopy = magicianNames.slice();
let newGreatMagicians = make_great(magiciansCopy);
//Showing Orignal magicians
console.log("\nORIGNAL MAGICIANS");
show_magicians(magicianNames);
//Showing the great magicians
console.log("\nGREAT MAGICIANS");
show_magicians(newGreatMagicians);
