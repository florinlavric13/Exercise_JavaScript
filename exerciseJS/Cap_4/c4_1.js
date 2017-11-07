// 1.Function  in Java script

function multiply(a,b){
  var result = a*b;
  console.log(result);
  return result;
}
 multiply (3,4);


// Type the function in Java script
// Regular (named) function

function inmultire(){
  var rezultat = 5 * 8;
  console.log(" 5 * 8 = ", rezultat);
}
inmultire();

// // Anonymus function

var impartire = function() {
  var rezultat = 5 / 7;
  console.log(" 5 / 7 = ", rezultat);
}
impartire();

// // Imediately Invoked function expresion.

(function() {
   var rezultat  = 10 / 8.5;
   console.log(" 10 / 8.5 = ", rezultat);
 }())
