//Making Array of magicians
let magicianNames = ["Harry Potter", "David", "Peter", "Asta", "Yono"];

function show_magicians(magicians_Names: string[]) {
  for (let i = 0; i < magicians_Names.length; i++) {
    console.log(magicians_Names[i]);
  }
}
//calling the function
show_magicians(magicianNames);
