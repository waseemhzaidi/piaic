/** 45. Cars: */
function getCarObj(_make,_model,..._etc){
  this.carMake=_make;
  this.carModel=_model;
  this.etc=_etc;
  return this;
}

var redCar=new getCarObj("Honda","Civic","Red");
var greenCar=new getCarObj("Toyota","Corolla","Green","GLi","param0");
var blueCar=new getCarObj("Hundae","Elantra","Blue","param01","param02","param03","param04");

console.log(`Make: ${redCar.carMake}, Model: ${redCar.carModel}, Others:${redCar.etc.toString()}`);
console.log(`Make: ${greenCar.carMake}, Model: ${greenCar.carModel}, Others:${greenCar.etc.toString()}`);
console.log(`Make: ${blueCar.carMake}, Model: ${blueCar.carModel}, Others:${blueCar.etc.toString()}`);

