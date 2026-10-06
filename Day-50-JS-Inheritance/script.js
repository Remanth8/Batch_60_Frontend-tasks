// Example 1 — Vehicle -> Car
class Vehicle {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  displayDetails() {
    console.log("Brand is :", this.brand);
    console.log("Color is :", this.color);
  }
}

class Car extends Vehicle {}

let c = new Car("Toyota", "White");
c.displayDetails();

// Example 2 — Person -> Student
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayDetails() {
    console.log("Name is :", this.name);
    console.log("Age is :", this.age);
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  displayDetails() {
    super.displayDetails();
    console.log("Course is :", this.course);
  }
}

let s = new Student("Pavan", 21, "Java Full Stack");
s.displayDetails();

// Example 3 — Device -> Laptop
class Device {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  displayDetails() {
    console.log("Brand is :", this.brand);
    console.log("Price is :", this.price);
  }
}

class Laptop extends Device {
  constructor(brand, price, ram) {
    super(brand, price);
    this.ram = ram;
  }

  displayDetails() {
    super.displayDetails();
    console.log("RAM is :", this.ram);
  }
}

let l = new Laptop("HP", 55000, "16GB");
l.displayDetails();

// Example 4 — College -> Teacher
class College {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }

  displayDetails() {
    console.log("College Name is :", this.name);
    console.log("City is :", this.city);
  }
}

class Teacher extends College {
  constructor(name, city, subject) {
    super(name, city);
    this.subject = subject;
  }

  displayDetails() {
    super.displayDetails();
    console.log("Subject is :", this.subject);
  }
}

let t = new Teacher("Alliance University", "Bangalore", "Java");
t.displayDetails();
