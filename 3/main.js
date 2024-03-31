"use strict";
let personName = "aSad mUghal";
console.log(personName.toLowerCase()); // john doe
console.log(personName.toUpperCase()); // JOHN DOE
console.log(toTitleCase(personName)); // John Doe
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
