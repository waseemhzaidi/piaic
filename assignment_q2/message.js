/** Comments
 * Personal Message: Store a person’s name in a variable, and print a message to that person. 
 * Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
 */

function printMsg() {
    document.getElementById("pGreet").innerText="Hello Mr/Ms "+document.getElementById("txtName").value+", would you like to learn some javascript today? ";
}