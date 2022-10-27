/**
 * Multiline Comment
 * Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
 * Then compose your message and store it in a new variable called message. Print your message.
 */

function showSaying(){
    var famous_person="John Wooden";
    var message=`"If you're not making mistakes, then you're not doing anything. I'm positive that a doer makes mistakes."`;
    document.getElementById("pSaying").innerText = famous_person +" once said, " + message;
}