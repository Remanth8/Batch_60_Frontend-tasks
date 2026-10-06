// ==========================================
// OBJECT IN FUNCTION
// ==========================================

// 1. NAMED FUNCTION
// Without Input & Without Return

function mobile() {
  let mobile = {
    brand: "Samsung",
    color: "Black",
    price: 25000,
  };

  console.log("Brand of mobile is :", mobile.brand);
  console.log("Color of mobile is :", mobile.color);
  console.log("Price of mobile is :", mobile.price);
}

mobile();

// ==========================================
// Named Function
// Without Input & With Return

function bike() {
  let bike = {
    brand: "Yamaha",
    color: "Blue",
    model: "R15",
  };

  return bike;
}

console.log(bike());

// ==========================================
// Named Function
// With Input & Without Return

function student(name, course) {
  console.log("Student Name :", name);
  console.log("Course :", course);
}

student("Pavan", "B.Tech");

// ==========================================
// Named Function
// With Input & With Return

function calculateSalary(amount) {
  return {
    salary: amount,
  };
}

console.log(calculateSalary(35000));

// ==========================================
// 2. FUNCTION AS OBJECT PROPERTY
// NAMED FUNCTION
// ==========================================

// Without Input & Without Return

let car = {
  name: "Honda",

  start: function carStart() {
    console.log("Car is started");
  },
};

car.start();

// ==========================================
// With Input & Without Return

let employee = {
  name: "Rahul",

  display: function employeeDetails(department) {
    if (department == "IT") {
      console.log(employee.name, "works in IT department");
    } else {
      console.log(employee.name, "works in another department");
    }
  },
};

employee.display("IT");

// ==========================================
// Without Input & With Return

let product = {
  price: 1500,

  getPrice: function () {
    return product.price;
  },
};

console.log(product.getPrice());

// ==========================================
// With Input & With Return

let calculator = {
  add: function (num) {
    return num + 10;
  },
};

console.log(calculator.add(25));

// ==========================================
// 3. ANONYMOUS FUNCTION
// ==========================================

// Without Input & Without Return

let internet = {
  name: "Jio",

  recharge: function () {
    console.log("Recharge completed");
  },
};

internet.recharge();

// ==========================================
// With Input & Without Return

let laptop = {
  brand: "Dell",

  storage: function (capacity) {
    console.log("Laptop storage :", capacity);
  },
};

laptop.storage("512GB");

// ==========================================
// Without Input & With Return

let location = {
  city: "Hyderabad",

  getState: function () {
    return "Telangana";
  },
};

console.log(location.getState());

// ==========================================
// With Input & With Return

let school = {
  name: "ABC School",

  getCity: function (city) {
    return city;
  },
};

console.log(school.getCity("Bangalore"));

// ==========================================
// 4. ARROW FUNCTION
// ==========================================

// Without Input & Without Return

let tree = {
  name: "Mango",

  benefit: () => {
    console.log("Provides fruits");
  },
};

tree.benefit();

// ==========================================
// With Input & Without Return

let flower = {
  name: "Lotus",

  displayColor: (color) => {
    console.log("Flower color :", color);
  },
};

flower.displayColor("White");

// ==========================================
// Without Input & With Return

let bottle = {
  type: "Plastic",

  capacity: "1 Litre",

  getCapacity: () => {
    return bottle.capacity;
  },
};

console.log(bottle.getCapacity());

// ==========================================
// With Input & With Return

let office = {
  city: "Hyderabad",

  getLocation: (place) => {
    return place;
  },
};

console.log(office.getLocation("Bangalore"));
