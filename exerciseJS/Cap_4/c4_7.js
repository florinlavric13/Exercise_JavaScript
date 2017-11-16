function Cars(model, anFabricatie, horsePower, price, views) {
  this.model = model;
  this.anFabricatie = anFabricatie;
  this.horsePower = horsePower;
  this.price = price;
  this.views = views;
  this.updateViews = function () {
    return ++this.views;
  };
}
var cars = [
  new Cars("VW-Passat", 2010, 156, 20000, 0),
  new Cars("Audi A8", 2015, 256, 40000, 2),

];
console.log(cars[1].updateViews());
