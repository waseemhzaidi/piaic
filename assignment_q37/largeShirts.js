/** 36. Shirts: */

function make_shirt(_size="Large", _mesg="I Love JavaScript"){
  console.log(`Shirt size is ${_size}, Message to print ${_mesg}`);
}
make_shirt(); // function call with default values
make_shirt("Medium"); // function call with one value
make_shirt("X-Large","I Love Web3"); //function call with both values