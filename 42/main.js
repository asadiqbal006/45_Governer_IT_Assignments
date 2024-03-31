"use strict";
//Making Array of magicians
let magicianNames = [
    "Harry Potter",
    "David",
    "Peter",
    "Asta",
    "Yono",
];
//Adding the Great to each name of magicians
function make_great(magicianNames2) {
    let greatMagicians = [];
    for (let i = 0; i < magicianNames2.length; i++) {
        greatMagicians.push(magicianNames[i] + " the Great");
    }
    return greatMagicians;
}
//Printing the new modified names
function show_magicians(magicians_Names) {
    for (let i = 0; i < magicians_Names.length; i++) {
        console.log(magicians_Names[i]);
    }
}
//Modifying array of magicians
let newMagiciansName = make_great(magicianNames);
//Calling the modified function
show_magicians(newMagiciansName);
