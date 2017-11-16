var prima_fractie = 8/8;
var adoua_fractie = 7/9;

var theBig = (function(a,b) {
  var rezultat;
  a>b ? rezultat = ["a", a] : rezultat = ["b", b];
  return rezultat;

})(prima_fractie,adoua_fractie)

console.log(theBig);
