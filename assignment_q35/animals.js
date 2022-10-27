/** 35. Animal: */

var animArray=["Cat","Parrot","Dog"];
for(idx=0;idx<animArray.length;idx++){
  if(animArray[idx].toString()==="Dog") console.log(`${animArray[idx]} barks very loud`);
  if(animArray[idx].toString()==="Cat") console.log(`${animArray[idx]} is very cute`);
  if(animArray[idx].toString()==="Parrot") console.log(`${animArray[idx]} very clever`);
}
console.log("All of them will make a great PET.");