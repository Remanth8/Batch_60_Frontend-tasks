// ==========================================
// CREATING OBJECT USING OBJECT CONSTRUCTOR
// ==========================================

let employee = new Object();

// Retrieve

console.log("Before");
console.log(employee);

// Updating & Adding Properties

employee.name = "Arjun";

employee["age"] = 23;

employee.salary = 42000;

employee.place = "Bangalore";

employee["skill-set"] = "Java,HTML,CSS";

employee["batch-num"] = "Batch-61";

employee["language-known"] = "English,Telugu,Hindi";

employee["phone-number"] = 9123456780;

employee["education"] = "B.Tech";

employee.gender = "Male";

// Delete

delete employee.salary;

console.log("=======After=======");

console.log(employee);
