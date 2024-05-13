class VehicleFactory {
    factoryMethod() {
        throw new Error('O método factoryMethod deve ser implementado pelas subclasses.');
    }

    createVehicle() {
        return this.factoryMethod();
    }
}

class CarFactory extends VehicleFactory {
    factoryMethod() {
        return new Car();
    }
}

class BicycleFactory extends VehicleFactory {
    factoryMethod() {
        return new Bicycle();
    }
}

class Car {
    constructor() {
        this.type = 'Car';
    }

    drive() {
        console.log('Driving a car...');
    }
}

class Bicycle {
    constructor() {
        this.type = 'Bicycle';
    }

    ride() {
        console.log('Riding a bicycle...');
    }
}

const carFactory = new CarFactory();
const bicycleFactory = new BicycleFactory();

const car = carFactory.createVehicle();
const bicycle = bicycleFactory.createVehicle();

car.drive();
bicycle.ride();
