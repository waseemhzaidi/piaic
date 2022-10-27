/** 42. Unchanged Magicians */

function show_magicians(_magarr){
  var idx=0;
  while(idx < _magarr.length){
    console.log(_magarr[idx]);
    idx++;
  }
}
function make_great(_magarr){
  var idx=0, magarr2;
  while(idx < _magarr.length){
    magarr2[idx]= "Great "+_magarr[idx];
    idx++;
  }
}

var magarr=["Magician01","Magician02","Magician03","Magician04","Magician05"]; // Magician Array
show_magicians(magarr);
make_great(magarr);
show_magicians(magarr);

