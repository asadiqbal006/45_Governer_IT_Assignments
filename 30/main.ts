let username = ["Ali", "Admin", "Abdullah", "Taha", "Hassan"];

for (let i = 0; i < username.length; i++) {
  if (username[i] == "Admin") {
    console.log("Hello Admin, would you like to see status report?");
  } else {
    console.log("Hello ", username[i], " thank you for logging in again");
  }
}
