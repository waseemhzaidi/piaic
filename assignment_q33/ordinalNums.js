/** 33. Ordinal Numbers: */

var idx=0, numArray=[1,2,3,4,5,6,7,8,9,10];
while(idx < numArray.length){
  if(idx==0) console.log(`1st`);
  if(idx==1) console.log(`2nd`);
  if(idx==2) console.log(`3rd`);
  if(idx>=3) console.log(`${idx+1}th`);
  idx++;
}