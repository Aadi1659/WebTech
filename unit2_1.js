let Vehicle = function(){
    this.name = "hyundai";
    this.year = 2019;
}
let car = new Vehicle();
Vehicle.prototype.year = 2020;
Vehicle.prototype.color = "blue";
//changing the the blueprint itself.
//car[[prototype]]={year,color} is like car.year car.color

