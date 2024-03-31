//Defining the object
type artistInfo={
    artist:string;
    title:string;
    tracks?:number;
};
function make_album(artist:string,title:string,tracks?:number): artistInfo {
    let album:artistInfo={artist,title};
    if(tracks){
        album.tracks=tracks;
    }
    return album;

}


//Making three albums
let album1=make_album("Artist One","First Album")
let album2=make_album("Artist Two","Second Album")
//With Track
let album3=make_album("Artist Three","Third Album",5)

console.log(album1);
console.log(album2);
console.log(album3);
