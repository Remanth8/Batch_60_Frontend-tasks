// example 1 . without constuctor

// class Electronics {
//     category = "Electronic Device";
//     showCategory() {
//         console.log("Category: " + this.category);
//     }
// }

// class Television extends Electronics {
//     screenSize = "55 inch";
//     showTV() {
//         console.log("Screen Size: " + this.screenSize);
//     }
// }
// let tv1 = new Television();
// tv1.showCategory();
// tv1.showTV();

// class Laptop extends Electronics {
//     ram = "16 GB";
//     showLaptop() {
//         console.log("RAM: " + this.ram);
//     }
// }
// let l1 = new Laptop();
// l1.showCategory();
// l1.showLaptop();



//example 2 . without constructor

// class School {
//     schoolName = "Delhi Public School";
//     showSchool() {
//         console.log("School: " + this.schoolName);
//     }
// }
// class Student extends School {
//     studentName = "Ravi";
//     showStudent() {
//         console.log("Student: " + this.studentName);
//     }
// }
// let s1 = new Student();
// s1.showSchool();
// s1.showStudent();

// class Teacher extends School {
//     teacherName = "Suresh";
//     showTeacher() {
//         console.log("Teacher: " + this.teacherName);
//     }
// }
// let t1 = new Teacher();
// t1.showSchool();
// t1.showTeacher();



//example 3 . with constructor

// class Restaurant {
//     constructor(restaurantName) {
//         this.restaurantName = restaurantName;
//     }
//     showRestaurant() {
//         console.log("Restaurant: " + this.restaurantName);
//     }
// }
// class DineIn extends Restaurant {
//     constructor(restaurantName, tableNumber) {
//         super(restaurantName);
//         this.tableNumber = tableNumber;
//     }
//     showDetails() {
//         super.showRestaurant();
//         console.log("Table Number: " + this.tableNumber);
//     }
// }
// let d1 = new DineIn("Spice Hub", 12);
// d1.showDetails();

// class TakeAway extends Restaurant {
//     constructor(restaurantName, orderNumber) {
//         super(restaurantName);
//         this.orderNumber = orderNumber;
//     }
//     showDetails() {
//         super.showRestaurant();
//         console.log("Order Number: " + this.orderNumber);
//     }
// }
// let t1 = new TakeAway("Spice Hub", 205);
// t1.showDetails();


//example 4 . with constructor

// class BankAccount {
//     constructor(accountHolder) {
//         this.accountHolder = accountHolder;
//     }
//     showAccountHolder() {
//         console.log("Account Holder: " + this.accountHolder);
//     }
// }

// class SavingsAccount extends BankAccount {
//     constructor(accountHolder,AccType){
//         super(accountHolder);
//         this.AccType=AccType;
//     }
//     showAccountType() {
//         super.showAccountHolder()
//         console.log("Account Type:",this.AccType);
//     }
// }
// let s1 = new SavingsAccount("Kiran","Savings");
// s1.showAccountType();

// class CurrentAccount extends BankAccount {
//     constructor(accountHolder,AccType){
//         super(accountHolder);
//         this.AccType=AccType;
//     }
//     showAccountType() {
//         super.showAccountHolder()
//         console.log("Account Type: ",this.AccType);
//     }
// }

// let c1 = new CurrentAccount("Rohit","Current");
// c1.showAccountType();



//example 5.with constructor

// Example 1

class Employee {
    constructor(employeeName) {
        this.employeeName = employeeName;
    }
    showEmployee() {
        console.log("Employee Name: " + this.employeeName);
    }
}

class Developer extends Employee {
    constructor(employeeName, programmingLanguage) {
        super(employeeName);
        this.programmingLanguage = programmingLanguage;
    }
    showDeveloper() {
        super.showEmployee();
        console.log("Programming Language: " + this.programmingLanguage);
    }
}
let d1 = new Developer("Rahul", "Python");
d1.showDeveloper();


class Tester extends Employee {
    constructor(employeeName, testingTool) {
        super(employeeName);
        this.testingTool = testingTool;
    }
    showTester() {
        super.showEmployee();
        console.log("Testing Tool: " + this.testingTool);
    }
}

let t1 = new Tester("Arjun", "Selenium");
t1.showTester();
