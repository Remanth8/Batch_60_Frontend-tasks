// ================================================
// Named Function – Without Input & Without Return
// ================================================

// 1. Check whether a given number is Even or Odd.

function checkEvenOdd() {
  let num = 17;

  if (num % 2 == 0) {
    console.log(num + " is Even");
  } else {
    console.log(num + " is Odd");
  }
}

checkEvenOdd();

// 2. Print the multiplication table of 9.

function multiplicationTable() {
  let num = 9;

  for (let i = 1; i <= 10; i++) {
    console.log(num, "X", i, "=", num * i);
  }
}

multiplicationTable();

// 3. Find the factorial of a number.

function findFactorial() {
  let num = 6;
  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }

  console.log("Factorial =", factorial);
}

findFactorial();

// 4. Check whether a number is a Palindrome.

function checkPalindrome() {
  let num = 1331;
  let temp = num;
  let reverse = 0;

  while (temp != 0) {
    let lastDigit = temp % 10;
    reverse = reverse * 10 + lastDigit;
    temp = parseInt(temp / 10);
  }

  if (reverse == num) {
    console.log(num + " is a Palindrome");
  } else {
    console.log(num + " is not a Palindrome");
  }
}

checkPalindrome();

// 5. Print the number pattern.

function printNumberPattern() {
  let num = 6;

  for (let i = 1; i <= num; i++) {
    let output = "";

    for (let j = 1; j <= i; j++) {
      output = output + j + " ";
    }

    console.log(output);
  }
}

printNumberPattern();

// ================================================
// Named Function – With Input & With Return
// ================================================

// 6. Return whether a given number is Even or Odd.

function checkEvenOdd(a) {
  if (a % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(15));

// 7. Return the factorial of N.

function findFactorial(n) {
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }

  return factorial;
}

console.log(findFactorial(7));

// 8. Return whether a number is a Palindrome.

function checkPalindrome(n) {
  let original = n;
  let reverse = 0;

  while (n != 0) {
    let lastDigit = n % 10;
    reverse = reverse * 10 + lastDigit;
    n = parseInt(n / 10);
  }

  if (reverse == original) {
    return "Palindrome";
  } else {
    return "Not a palindrome";
  }
}

console.log(checkPalindrome(1221));

// 9. Return whether a number is Prime.

function checkPrime(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      count += 1;
    }
  }

  if (count == 2) {
    return "Prime";
  } else {
    return "Not prime";
  }
}

console.log(checkPrime(17));

// 10. Return the Greatest Common Divisor (GCD) of two numbers.

function findGCD(a, b) {
  while (b != 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

console.log(findGCD(24, 36));

// ================================================
// Named Function – With Input & Without Return
// ================================================

// 11. Check whether a given number is Even or Odd.

function checkEvenOdd(a) {
  if (a % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

checkEvenOdd(15);

// 12. Print the multiplication table of a given number.

function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(n, "X", i, "=", n * i);
  }
}

multiplicationTable(8);

// 13. Reverse a given number.

function reverseNumber(n) {
  let reverse = 0;

  while (n != 0) {
    let lastDigit = n % 10;
    reverse = reverse * 10 + lastDigit;
    n = parseInt(n / 10);
  }

  console.log(reverse);
}

reverseNumber(4567);

// 14. Check whether a number is a Strong number.

function checkStrongNumber(n) {
  let original = n;
  let temp = n;
  let sum = 0;

  while (temp != 0) {
    let lastDigit = temp % 10;
    let factorial = 1;

    for (let i = 1; i <= lastDigit; i++) {
      factorial = factorial * i;
    }

    sum = sum + factorial;
    temp = parseInt(temp / 10);
  }

  if (sum == original) {
    console.log("Strong number");
  } else {
    console.log("Not a strong number");
  }
}

checkStrongNumber(40585);

// 15. Print a number triangle pattern using nested loops.

function numberPattern(n) {
  for (let i = 1; i <= n; i++) {
    let output = "";

    for (let j = 1; j <= i; j++) {
      output = output + j + " ";
    }

    console.log(output);
  }
}

numberPattern(6);

// ================================================
// Named Function – Without Input & With Return
// ================================================

// 16. Return whether a number is Even or Odd.

function checkEvenOdd() {
  let num = 17;

  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd());

// 17. Return the sum of numbers from 1 to N.

function calculateSum() {
  let sum = 0;

  for (let i = 1; i <= 30; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(calculateSum());

// 18. Return the reverse of a number.

function reverseNumber() {
  let num = 4567;
  let reverse = 0;

  while (num != 0) {
    let lastDigit = num % 10;
    reverse = reverse * 10 + lastDigit;
    num = parseInt(num / 10);
  }

  return reverse;
}

console.log(reverseNumber());

// 19. Return whether a number is Prime.

function checkPrime() {
  let num = 19;
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count += 1;
    }
  }

  if (count == 2) {
    return "Prime";
  } else {
    return "Not prime";
  }
}

console.log(checkPrime());

// 20. Return the Sum of All Even Numbers from 1 to 100.

function sumOfEven() {
  let sum = 0;

  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      sum = sum + i;
    }
  }

  return sum;
}

console.log(sumOfEven());
