/**
 * Assignment Q-14: 
 */

function printElem(elem,idx,ar) {
    console.log("Dear "+ ar[idx] + " You are invited to Dinner tonight");
}

var guestAr=["Father","Mother","Brother","Sister"];
idx=0;
// Access array elements with while loop
console.log("Access array elements with a While loop");

while(idx<guestAr.length){
    console.log("Dear "+ guestAr[idx] + " You are invited to Dinner tonight");
    idx++;
}
// Access array elements with callback func
console.log("Access array elements with Callback func");
guestAr.forEach(printElem);