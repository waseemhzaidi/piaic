/**
 * Assignment Q-18: Seeing the World
 */

var worldAr=["Turky", "Russia", "Antarctica", "Kenya", "Switzerland", "Brazil"];
console.log("Original Array: "+worldAr.toString());
console.log("Sorted Array: "+ worldAr.slice().sort().toString()); // print new sorted array
console.log("Original Array: "+worldAr.toString()); // original unchanges array
console.log("Reverse Sorted Array: "+worldAr.slice().sort().reverse().toString()); // print reversed array
console.log("Original Array: "+worldAr.toString()); // original unchanged array
console.log("Reversing Original Array: "+worldAr.reverse().toString()); // Reverse Original
console.log("Reverting to Original Array: "+worldAr.reverse().toString()); // Revert to Original
console.log("Original Sorted Array: "+ worldAr.sort().toString()); // print original sorted array
console.log("Original Sorted Array: "+ worldAr.reverse().toString()); // print original sorted reversed array