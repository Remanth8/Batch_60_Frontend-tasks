// ==========================================
// DEEPLY NESTED OBJECT
// ==========================================

let student = {
  name: "Pavan",
  age: 21,

  "educational-details": {
    "B-tech": 2026,
    intermediate: 2022,
    ssc: 2020,
  },

  "permanent-address": {
    "H-NO": "5-124/32",
    colony: "KPHB",
    street: "Road-No-5",
    dist: "Hyderabad",
    state: "Telangana",

    "phone-details": {
      "permanent-number": 9876543210,
      "temporary-number": 9123456780,
    },
  },
};

// Accessing deeply nested value

console.log(student["permanent-address"]["phone-details"]["permanent-number"]);

// Delete a selected property

delete student["educational-details"].ssc;

console.log(student);

// ==========================================
// CRUD OPERATION USING SQUARE BRACKET NOTATION
// ==========================================

// Creation

let employee = {
  ["name"]: "Rahul",
  ["age"]: 24,
  ["salary"]: 45000,
};

// Retrieve

console.log(employee["name"]);

// Updation

employee["age"] = employee["age"] + 1;

console.log(employee["age"]);

// Add

employee["gender"] = "Male";

console.log(employee["gender"]);

// Delete

delete employee["salary"];

console.log(employee);
