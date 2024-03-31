var username = ["Ali", "Admin", "Abdullah", "Taha", "Hassan"];
//Checking if the ueser array is empty
if (username.length == 0) {
    console.log("We need to find some users");
}
else {
    console.log("These are our users :", username.join(" ,"));
}
//Removing Users:
username = [];
if (username.length == 0) {
    console.log("\nWe need to find some users");
}
else {
    console.log("These are our users :", username.join(" ,"));
}
