class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

//method
Information(){
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

//let myVehicle = new Vehicle ('VW', 'Yellow', 2009);
//let info = myVehicle.Information();

//extending the class
class Cars extends Vehicle{
    constructor(make, model, year, doors){
       super(make, model, year);
       this.doors = doors;
    }

// extended for doors, using Super
Information(){
    super.Information();
    console.log(`Doors: ${this.doors}`);
    }
}

let myCar = new Cars('vW', 'Golf', 2010, 2);
myCar.Information();
