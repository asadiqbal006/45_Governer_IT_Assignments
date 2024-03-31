"use strict";
let guests = ["Abdullah", "Amaan", "Minhal"];
console.log("\t\"PEOPLE INVITED AT MY DINNER\"");
console.log(guests[0]);
console.log(guests[1]);
console.log(guests[2]);
console.log("\t\"THE PEOPLE WHO CANT MAKE AT MY DINNER\" ");
console.log(guests[2]);
console.log(guests[1]);
console.log("");
console.log("\t\"NEW PEOPLE INVITED\" ");
guests[2] = "Ali";
guests[1] = "Taha";
console.log(guests[2]);
console.log(guests[1]);
console.log("");
console.log("\t\"I JUST FOUND A BIGGER DINNER TABLE\"");
console.log("");
// Adding new guest at start
let firstGuest = guests.unshift("Hassan");
//Finding mid point of the array of guest
let midPointOFArray = Math.floor(guests.length / 2);
//Adding a guest a middle
let middleGuest = guests.splice(midPointOFArray, 0, "Usman");
//Adding a guest in last
let lastGuest = guests.push("Shahid");
//Printing New Invitations
console.log("New Invitation For Guest 1 : " + guests[0]);
console.log("New Invitation For Guest 2 : " + guests[1]);
console.log("New Invitation For Guest 3 : " + guests[2]);
console.log("New Invitation For Guest 4 : " + guests[3]);
console.log("New Invitation For Guest 5 : " + guests[4]);
console.log("New Invitation For Guest 6 : " + guests[5]);
