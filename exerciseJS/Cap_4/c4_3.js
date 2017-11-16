function fractie(a,b) {
  var rezultat;
  a>b ? rezultat = ["primaFractie", a] : rezultat = ["adouaFractie", b];
  return rezultat;
}

var primaFractie  = 24/2;
var adouaFractie  = 44/2;

 var fractionRez = fractie(primaFractie, adouaFractie);
console.log(fractionRez);
console.log("Prima fractie are ca rezultat: ", primaFractie);
console.log("A doua fractie are  a rezultat: ", adouaFractie);
console.log("Fractia " + fractionRez[0] +  " cu valoarea " + fractionRez[1]  +  " este cea mai mare!");
