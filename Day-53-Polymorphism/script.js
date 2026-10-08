// Example 1 — Employee System
class Employee {
    work() {
        console.log("Employee is working");
    }
}
class Developer extends Employee {
    work() {
        console.log("Developer writes code");
    }
}
class Designer extends Employee {
    work() {
        console.log("Designer creates designs");
    }
}

let e1 = new Developer();
let e2 = new Designer();
e1.work();
e2.work();

// Example 2 — Vehicle 
class Vehicle {
    start() {
        console.log("Vehicle is starting");
    }
}
class Car extends Vehicle {
    start() {
        console.log("Car starts with a key");
    }
}
class Bike extends Vehicle {
    start() {
        console.log("Bike starts with a button");
    }
}

let v1 = new Car();
let v2 = new Bike();
v1.start();
v2.start();

// Example-3 Payment System
class Payment {
    pay() {
        console.log("Making payment");
    }
}
class CreditCard extends Payment {
    pay() {
        console.log("Payment made using Credit Card");
    }
}
class UPI extends Payment {
    pay() {
        console.log("Payment made using UPI");
    }
}
let p1 = new CreditCard();
let p2 = new UPI();
p1.pay();
p2.pay();