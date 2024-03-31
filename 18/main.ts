let visitingPlaces = ["Japan", "England", "France", "Turkey"];

//Orinal order
console.log("\nORIGNAL ARRAY :");
console.log(visitingPlaces);

//Alphabetically order
console.log("\nALPHABETICAL ARRANGEMENT");
console.log([...visitingPlaces].sort());

// //The orinal array still not changed
console.log("\nORIGNAL ARRAY AFTER ALPHABETICAL ARRANGEMENT :");
console.log(visitingPlaces);

//Reverse alphabetical order
console.log("\nREVERSE ALPHABETICAL ARRANGEMENT :");
console.log([...visitingPlaces].sort().reverse());

//The orinal array is still not changed
console.log("\nORIGNAL ARRAY AFTER REVERSE ALPHABETICAL ARRANGEMENT :");
console.log(visitingPlaces);

//Reversing array
console.log("\nREVERSE OF ORIGNAL ARRAY :");
visitingPlaces.reverse;
console.log(visitingPlaces);

// Again reversing array to get back orignal array
console.log("\nAGAIN REVERSE OF ABOVE ARRAY TO GET BACK ORIGNAL ARRAY :");
visitingPlaces.reverse();
console.log(visitingPlaces);

// Sorting in alphebetical order
let alphSort = visitingPlaces.sort();
console.log("\nSORTING OF ARRAY :");
console.log(alphSort);

// Reverse Sorting
let revSort = alphSort.reverse();
console.log("\nREVERSE SORTING OF ARRAY :");
console.log(revSort);
