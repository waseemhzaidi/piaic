/** 32. Check Users: */

var current_users=["User01","User03","User04","User05","User06","User07","User08","User09","admin"];

var new_users=["User02","User04","User06","User08","User10","user12","admin"];

var idxnew=0;

while(idxnew < new_users.length) {
  var idxcur=0;
  var nameExists=false;
  while(idxcur < current_users.length) {
    if(new_users[idxnew]===current_users[idxcur]) {
      nameExists=true;
      break;    
    }    
    idxcur++;
  }
  nameExists?
  console.log(`Username ${new_users[idxnew]} is already in use, enter new one.`):
  console.log(`Username ${new_users[idxnew]} is available`);
  idxnew++;
}