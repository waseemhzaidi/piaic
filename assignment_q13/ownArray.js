/**
 * Assignment Q-13: 
 */

function printElem(elem,idx,ar) {
    console.log("I Love "+ ar[idx]);
}

var ownAr=["Honda 125","Honda Roadmaster 200","Yamaha YBR150","Kawasaki","Harley & Davidson"];
idx=0;
// Access array elements with while loop
console.log("Access array elements with a While loop");

while(idx<ownAr.length){
    console.log("I Love "+ ownAr[idx]);
    idx++;
}
// Access array elements with callback func
console.log("Access array elements with Callback func");
ownAr.forEach(printElem);


