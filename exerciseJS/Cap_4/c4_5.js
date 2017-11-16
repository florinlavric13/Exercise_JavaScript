
function logScope() {
  var  varLocal = 3;

  if (varLocal) {
    let varLocal = "Sunt diferit!"
    console.log("nested varLocal: ", varLocal);
  }

  console.log("logScope varLocal ", varLocal);

}
logScope();
