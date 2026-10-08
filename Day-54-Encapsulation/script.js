class MovieTicket {

    #movieName;
    #ticketPrice;

    constructor(movieName, ticketPrice) {
        this.#movieName = movieName;
        this.#ticketPrice = ticketPrice;
    }

    getMovieName() {
        return this.#movieName;
    }

    getTicketPrice() {
        return this.#ticketPrice;
    }

    setMovieName(newName) {
        this.#movieName = newName;
    }

    setTicketPrice(newPrice) {
        this.#ticketPrice = newPrice;
    }

    applyOffer(discount) {
        this.#ticketPrice -= discount;

        console.log(
            "Offer applied and ticket price is",
            this.#ticketPrice
        );
    }
}

let t = new MovieTicket("Pushpa 2", 300);

console.log("Movie Name:", t.getMovieName());
console.log("Ticket Price:", t.getTicketPrice());

t.applyOffer(50);

t.setMovieName("RRR");
t.setTicketPrice(250);

console.log("Updated Movie Name:", t.getMovieName());
console.log("Updated Ticket Price:", t.getTicketPrice());


// 2. Employee


class Employee {
    #employeeId;
    #salary;
    constructor(employeeId, salary) {
        this.#employeeId = employeeId;
        this.#salary = salary;
    }

    getEmployeeId() {
        return this.#employeeId;
    }

    getSalary() {
        return this.#salary;
    }
    setEmployeeId(newEmployeeId) {
        this.#employeeId = newEmployeeId;
    }

    setSalary(newSalary) {
        this.#salary = newSalary;
    }
    incrementSalary(amount) {
        this.#salary += amount;
        console.log(
            amount,
            "salary incremented and total salary is",
            this.#salary
        );
    }
    deductSalary(amount) {
        if (this.#salary >= amount) {
            this.#salary -= amount;

            console.log(
                amount,
                "deducted and total salary is",
                this.#salary
            );
        }
        else {
            console.log("Insufficient salary");
        }
    }
}

let x = new Employee(101, 50000);
console.log("Employee ID:", x.getEmployeeId());
console.log("Salary:", x.getSalary());

//increment
x.incrementSalary(10000);
// Deduct
x.deductSalary(5000);



x.setEmployeeId(202);
x.setSalary(70000);

console.log("Updated Employee ID:", x.getEmployeeId());
console.log("Updated Salary:", x.getSalary());


//Mobile 

class MobilePhone {
    #mobileNumber;
    #balance;
    constructor(mobileNumber, balance) {
        this.#mobileNumber = mobileNumber;
        this.#balance = balance;
    }
    getMobileNumber() {
        return this.#mobileNumber;
    }

    getBalance() {
        return this.#balance;
    }
    setMobileNumber(newMobileNumber) {
        this.#mobileNumber = newMobileNumber;
    }

    setBalance(newBalance) {
        this.#balance = newBalance;
    }
    recharge(amount) {
        this.#balance += amount;

        console.log(
            amount,
            "recharge successful and total balance is",
            this.#balance
        );
    }
    callCharge(amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount;

            console.log(
                amount,
                "call charge deducted and remaining balance is",
                this.#balance
            );
        }
        else {
            console.log("Insufficient balance");
        }
    }
}

let m = new MobilePhone(9876543210, 500);
console.log("Mobile Number:", m.getMobileNumber());
console.log("Balance:", m.getBalance());

m.recharge(1000);

m.callCharge(300);
m.callCharge(1500);

m.setMobileNumber(9123456780);
m.setBalance(2000);


console.log("Updated Mobile Number:", m.getMobileNumber());
console.log("Updated Balance:", m.getBalance());