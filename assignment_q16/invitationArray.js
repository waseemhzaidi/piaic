/**
 * Assignment Q-16: 
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

// List Updated
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

/** Add more guests - bigger dinner table
 *Add one new guest to the beginning of your array. 
 * Add one new guest to the middle of your array
 * Add one new guest to the end of your list.
*/
console.log("List Updated: ")
console.log("Adding additional guests Uncle, Grandfather, Grandmother ");
// fruits.splice(2, 0, "Lemon", "Kiwi");
guestAr.splice(0,0,"Uncle");
guestAr.splice(3,0,"Grandfather");
guestAr.splice(guestAr.length,0,"Grandmother"); // or guestAr.push("Grandmother");

console.log("List Updated: ")
console.log("Access array elements with a While loop");
idx=0;
while(idx<guestAr.length){
    console.log("Dear "+ guestAr[idx] + " You are invited to Dinner tonight");
    idx++;
}

console.log("List Updated: ")
console.log("Access array elements with Callback func");
guestAr.forEach(printElem);

