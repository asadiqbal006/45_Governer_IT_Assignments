"use strict";
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
//Making three albums
let album1 = make_album("Artist One", "First Album");
let album2 = make_album("Artist Two", "Second Album");
let album3 = make_album("Artist Three", "Third Album", 5);
console.log(album1);
console.log(album2);
console.log(album3);
