let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//looping array
for (let i = 0; i < num.length; i++) {
  if (num[i] == 1) {
    console.log("\n", num[i], "st");
  } else if (num[i] == 2) {
    console.log("\n", num[i], "nd");
  } else if (num[i] == 3) {
    console.log("\n", num[i], "rd");
  } else {
    console.log("\n", num[i], "th");
  }
}
