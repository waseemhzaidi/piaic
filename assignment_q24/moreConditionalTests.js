var num=1, a=5, b=10, c=20, d=10;
var str1="test", str2="test", str3="TEST";
var ar=[1,2,3,4,5];

console.log("#####################################################");

if(a > b) console.log(`${a} is greater`);
if(b > c) console.log(`${b} is greater`);
if(c > a) console.log(`${c} is greater`);
if(a < b) console.log(`${a} is smaller`);
if(b < c) console.log(`${b} is smaller`);
if(c < a) console.log(`${c} is smaller`);
if (b==d) console.log(`${b} & ${d} are equal`);

if(str1===str2) console.log(`str1 and str2 are equal`);
if(str1===str3) console.log(`str1 and str3 are equal`);
if(str1!==str3) console.log(`str1 and str3 are not equal`);
if(str2!==str3) console.log(`str2 and str3 are not equal`);
if(str2===str3.toLowerCase()) console.log(`str2 and str3 are equal`);
if(str1===str2 || str1===str3 ) console.log(`condition true`);
if(str1=== str2 && str2===str3.toLowerCase()) console.log(`str1,str2 and str3.toLowerCase() are equal`);

// check if variable is an array

if(Array.isArray(ar)){ 
    console.log("Its an array");
}

if(!Array.isArray(str1)){
    console.log("Its not an array");
}