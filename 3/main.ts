//DID THIS EXERCISE IN THE END OF ALL ASSIGNMENTS AND ALSO TOOK SOME HELP FROM GOOGLE FOR TITLE CASE


let personName: string = "aSad mUghal";

//For lower case
console.log(personName.toLowerCase()); 

//For Upper case
console.log(personName.toUpperCase()); 
console.log(toTitleCase(personName));  

//For title case
function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
