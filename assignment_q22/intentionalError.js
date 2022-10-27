/**
 * Intentional Error: If you haven’t received an array index error 
*/

var testAr=new Array("one","two","three","four","five");
idx=0;

while(idx < testAr.length){
    console.log(`Value ${testAr[idx]} \n Location ${idx}`);
    idx++;
}

console.log("idx is: "+idx);
console.log(testAr.toString());
console.log("Undefined at Index: "+testAr[idx]); // undefined
idx=testAr.length-1;
console.log("Last Index: "+testAr[idx]); // last element