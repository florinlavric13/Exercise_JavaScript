// Advanced conditional AND/ OR
// *Logical op.

var a = 2;
var b = "2";
var sum;

 sum = a + b;
 console.log(sum);
 
var c = 3;
var d = 4;

// ternary Operator
 a === b ? console.log("Match") : console.log("No match"); // Shorthand

// Longhand
if (a == b) {
  console.log("Match");
} else {
  console.log("No Match");
}
// Shorthand
a ==  b ? document.body.innerHTML = "<h1> Adevarat </h1>" : document.body.innerHTML = "<h1> Fals </h1>"