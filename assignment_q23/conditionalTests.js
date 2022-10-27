var num=1, a=5, b=10, c=20;
var str1="test", str2="test", str3="TEST";

console.log("#####################################################");

if(a > b) console.log(`${a} is greater`);
if(b > c) console.log(`${b} is greater`);
if(c > a) console.log(`${c} is greater`);
if(a < b) console.log(`${a} is smaller`);
if(b < c) console.log(`${b} is smaller`);
if(c < a) console.log(`${c} is smaller`);

if(str1===str2) console.log(`str1 and str2 are equal`);
if(str1===str3) console.log(`str1 and str3 are equal`);
if(str1!==str3) console.log(`str1 and str3 are not equal`);
if(str2!==str3) console.log(`str2 and str3 are not equal`);

while(num <= 20){
    // Ternary operator, checks Even or Odd, printed on the remainder test.
    (num%2) ? (console.log(`${num} is an Odd Number`)) : (console.log(`${num} is an Even Number`)); 
    num++;
}

if(a > b){
    console.log(`${a} is an greater than b`);
}

if(a > b){
    console.log(`${a} is greater than b`);
} else if(a < b){ //condition true, print 5 is less than b
    console.log(`${a} is less than b`);
} else if(a==b){
    console.log(`${a} is equal to b`);
}

switch(a>b){ // Condition is false, Prints 5 is not equal to b
    case true : 
        console.log(`${a} is an greater than b`);
        break;

    case false : 
        console.log(`${a} is not equal to b`);
        break;
}