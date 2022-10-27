/** 41. Great Magicians: */

function show_magicians(_magarr){
  var idx=0;
  while(idx < _magarr.length){
    console.log(_magarr[idx]);
    idx++;
  }
}

function make_great(_magarr){
  var idx=0;
  while(idx < _magarr.length){
    _magarr[idx]= "Great "+_magarr[idx];
    idx++;
  }
  return _magarr;
}

var magarr=["Magician01","Magician02","Magician03","Magician04","Magician05"]; // Magician Array
show_magicians(magarr);
copy_magarr=make_great(magarr.slice()); // make a copy
show_magicians(magarr);
show_magicians(copy_magarr);