// class Laptop {
//   static brand = "Dell";
//   static company = "Dell Technologies";

//   constructor(id, model, processor, ram, price, color) {
//     this.laptopId = id;
//     this.laptopModel = model;
//     this.processor = processor;
//     this.ram = ram;
//     this.price = price;
//     this.color = color;
//   }

//   displayDetails() {
//     console.log("Brand ", Laptop.brand);
//     console.log("Company ", Laptop.company);
//     console.log("Laptop ID ", this.laptopId);
//     console.log("Model ", this.laptopModel);
//     console.log("Processor ", this.processor);
//     console.log("RAM ", this.ram);
//     console.log("Price ", this.price);
//     console.log("Color ", this.color);
//   }
// }

// console.log("----- Laptop 1 -----");
// let laptop1 = new Laptop(101, "Inspiron", "i5", "8GB", 55000, "Black");
// laptop1.displayDetails();

// console.log("----- Laptop 2 -----");
// let laptop2 = new Laptop(102, "Vostro", "i5", "16GB", 65000, "Silver");
// laptop2.displayDetails();

// console.log("----- Laptop 3 -----");
// let laptop3 = new Laptop(103, "XPS", "i7", "16GB", 95000, "White");
// laptop3.displayDetails();

// console.log("----- Laptop 4 -----");
// let laptop4 = new Laptop(104, "Latitude", "i3", "8GB", 45000, "Grey");
// laptop4.displayDetails();

// class BankAccount {

//     static bankName = "HDFC Bank";
//     static bankCity = "Hyderabad";

//     constructor(number, name, type, balance, branch) {
//         this.accountNumber = number;
//         this.accountName = name;
//         this.accountType = type;
//         this.balance = balance;
//         this.branch = branch;
//     }

//     displayDetails() {
//         console.log("Bank Name ", BankAccount.bankName);
//         console.log("Bank City ", BankAccount.bankCity);
//         console.log("Account Number ", this.accountNumber);
//         console.log("Account Holder ", this.accountName);
//         console.log("Account Type ", this.accountType);
//         console.log("Balance ", this.balance);
//         console.log("Branch ", this.branch);
//     }
// }

// console.log("----- Account 1 -----");
// let account1 = new BankAccount(1001, "Rahul", "Savings", 25000, "Kukatpally");
// account1.displayDetails();

// console.log("----- Account 2 -----");
// let account2 = new BankAccount(1002, "Priya", "Savings", 40000, "Madhapur");
// account2.displayDetails();

// console.log("----- Account 3 -----");
// let account3 = new BankAccount(1003, "Arun", "Current", 75000, "Ameerpet");
// account3.displayDetails();

// console.log("----- Account 4 -----");
// let account4 = new BankAccount(1004, "Sneha", "Savings", 30000, "Banjara Hills");
// account4.displayDetails();

class Bus {
  static busCompany = "TSRTC";
  static busCity = "Hyderabad";

  constructor(number, route, driver, seats, fare) {
    this.busNumber = number;
    this.route = route;
    this.driver = driver;
    this.seats = seats;
    this.fare = fare;
  }

  displayDetails() {
    console.log("Bus Company ", Bus.busCompany);
    console.log("Bus City ", Bus.busCity);
    console.log("Bus Number ", this.busNumber);
    console.log("Route ", this.route);
    console.log("Driver ", this.driver);
    console.log("Seats ", this.seats);
    console.log("Fare ", this.fare);
  }
}

console.log("----- Bus 1 -----");
let bus1 = new Bus("TS01A1234", "Hyderabad - Warangal", "Ramesh", 50, 250);
bus1.displayDetails();

console.log("----- Bus 2 -----");
let bus2 = new Bus("TS01B2345", "Hyderabad - Vijayawada", "Suresh", 45, 350);
bus2.displayDetails();

console.log("----- Bus 3 -----");
let bus3 = new Bus("TS01C3456", "Hyderabad - Karimnagar", "Mahesh", 50, 220);
bus3.displayDetails();

console.log("----- Bus 4 -----");
let bus4 = new Bus("TS01D4567", "Hyderabad - Nizamabad", "Kiran", 45, 200);
bus4.displayDetails();
