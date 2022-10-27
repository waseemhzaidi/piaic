/**
 * Assignment Q-12: 
 * Store the names of a few of your friends in a array called names. display personalized greeting
 * 
 */

function printElem(elem,idx,ar) {
    console.log("Hello! "+ ar[idx]);
}

var friendsAr=["friend01","friend02","friend03","friend05","friend06"];
idx=0;
// Access array elements with while loop
console.log("Access array elements with a While loop");

while(idx<friendsAr.length){
    console.log("Hello! "+ friendsAr[idx]);
    idx++;
}
// Access array elements with callback func
console.log("Access array elements with Callback func");
friendsAr.forEach(printElem);


