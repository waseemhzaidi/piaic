/**
 * Assignment Q-15: 
 */

 function printElem(elem,idx,ar) {
    console.log("Dear "+ ar[idx] + " You are invited to Dinner tonight");
}

var guestAr=["Father","Mother","Elder Brother","Elder Sister"];
idx=0;
// Access array elements with while loop
console.log("\n\nAccess array elements with a While loop");

while(idx<guestAr.length){
    console.log("Dear "+ guestAr[idx] + " You are invited to Dinner tonight");
    idx++;
}

// Access array elements with callback func
console.log("\n\nAccess array elements with Callback func");
guestAr.forEach(printElem);

console.log("List Updated: ")
console.log("\n\nInviting Younger sister instead of elder sister");
guestAr.pop();
guestAr.push("Younger sister");

console.log("Access array elements with a While loop");
idx=0;
while(idx<guestAr.length){
    console.log("Dear "+ guestAr[idx] + " You are invited to Dinner tonight");
    idx++;
}

console.log("List Updated: ")
console.log("\n\nInviting Younger sister instead of elder sister");
console.log("Access array elements with Callback func");
guestAr.forEach(printElem);