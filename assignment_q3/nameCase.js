/** Comment
 * Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
 */
function changeToLower(){
    document.getElementById("pNameCase").innerText= document.getElementById("txtName").value.toLowerCase();
}

function changeToUpper(){
    document.getElementById("pNameCase").innerText= document.getElementById("txtName").value.toUpperCase();
}

function changeToTitle(){
    var nameArray=document.getElementById("txtName").value.toLowerCase().split(" "), count=0, name="";
    while (count < nameArray.length) {
        name += nameArray[count].charAt(0).toUpperCase() + nameArray[count].substring(1, nameArray[count].length) + " ";
        count++;
    }
    name=name.trim();
    document.getElementById("pNameCase").innerText=name;
}