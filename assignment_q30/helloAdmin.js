/** Hello Admin */

var users=["User01","User02","User03","User04","User05","User06","User07","User08","User09","admin"];
let idx=0;
while(idx < users.length){
  if(users[idx]==="admin") {
    console.log("Hello admin, would you like to see a status report?");
  }else{
    console.log(`Hello! ${users[idx]}, Thank you for logging in again`);
  }
  idx++;
}