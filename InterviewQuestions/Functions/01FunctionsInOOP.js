var car = new Vehicle("Honda", "Civic", 2015);
console.log(car);

function Vehicle(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

// Output: Vehicle { model: 'Honda', color: 'white', year: '2010', country: 'UK' }

// we can also share methods among the instances using the prototype inheritance

// we just need to add a method to the prototype of the Vehicle


Vehicle.prototype.getVehicleInfo = function () {
    console.log(`${this.year} ${this.brand} ${this.model} `)
}

car.getVehicleInfo();




