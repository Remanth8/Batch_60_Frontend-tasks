let n1 = 30;
let n2 = 10;
let operation = "%";
switch (operation) {
  case "+":
    console.log("Addition: " + (n1 + n2));
    break;
  case "-":
    console.log("Subtraction: " + (n1 - n2));
    break;
  case "*":
    console.log("Multiplcation: " + n1 * n2);
    break;
  case "/":
    console.log("Division: " + n1 / n2);
    break;
  case "%":
    console.log("Modulus: " + (n1 % n2));
    break;
  default:
    console.log("Invalid Input");
}
