/** 40. Make_Album: */
class MusicAlbum {
  constructor(_nt){
    this.numberOfTracks=_nt;
  }
  make_album(_an,_at,_nt){
    this.artistName=_an;
    this.albumTitle=_at;
    if(_nt!=null) this.numberOfTracks=_nt;
  }

  getParams(){
    return `Artist Name:${this.artistName}\n Album Title:${this.albumTitle}\n Number of Tracks:${this.numberOfTracks}`;
  }
}
var album1=new MusicAlbum();
var album2=new MusicAlbum();
var album3=new MusicAlbum();

album1.make_album("Atif Aslam","Atif Aslam's Album");
album2.make_album("Ali Azmat","Ali Azmat's Album");
album3.make_album("Nazia Hassan","Nazia Hassan's Album",8);

console.log(album1.getParams()+"\n");
console.log(album2.getParams()+"\n");
console.log(album3.getParams()+"\n");