// Sum of Prime Numbers

let sum = 0;

for (let n = 20; n <= 150; n++) {

    let factors = 0;

    for (let i = 1; i <= n; i++) {

        if (n % i === 0) {
            factors = factors + 1;
        }
    }

    if (factors === 2) {
        sum += n;
    }
}

console.log("Prime Numbers Sum =", sum);


// Average of Perfect Numbers

let total = 0;
let perfectCount = 0;

for (let n = 1; n <= 1000; n++) {

    let totalFactors = 0;

    for (let i = 1; i < n; i++) {

        if (n % i === 0) {
            totalFactors += i;
        }
    }

    if (totalFactors === n) {

        console.log("Perfect Number =", n);

        total += n;
        perfectCount++;
    }
}

let avg = total / perfectCount;

console.log("Average =", avg);


// Leap Years in a Range

for (let year = 1900; year <= 2026; year++) {

    let leap = false;

    if (year % 400 === 0) {
        leap = true;
    }
    else if (year % 4 === 0 && year % 100 !== 0) {
        leap = true;
    }

    if (leap) {
        console.log("Leap Year =", year);
    }
}


// Palindrome Numbers

let num = 100;

while (num <= 500) {

    let original = num;
    let reverse = 0;

    while (num > 0) {

        let digit = num % 10;

        reverse = reverse * 10 + digit;

        num = parseInt(num / 10);
    }

    if (reverse === original) {
        console.log(original, "is Palindrome");
    }

    num = original + 1;
}


// Digit Sum = 10

let number = 1;

while (number <= 850) {

    let temp = number;
    let digitSum = 0;

    while (temp > 0) {

        digitSum = digitSum + (temp % 10);

        temp = parseInt(temp / 10);
    }

    if (digitSum === 10) {
        console.log("Digit Sum 10 =", number);
    }

    number++;
}


// Pairs with Target Sum

for (let first = 1; first <= 50; first++) {

    for (let second = first; second <= 50; second++) {

        let total = first + second;

        if (total === 30) {
            console.log(first, second);
        }
    }
}


// Exactly 3 Factors

for (let number = 10; number <= 300; number++) {

    let factors = 0;

    for (let divisor = 1; divisor <= number; divisor++) {

        if (number % divisor === 0) {
            factors++;
        }
    }

    if (factors === 3) {
        console.log("Exactly 3 Factors =", number);
    }
}


// Maximum Factors

let maximum = 0;
let maximumNumber = 0;

for (let number = 50; number <= 150; number++) {

    let factors = 0;

    for (let divisor = 1; divisor <= number; divisor++) {

        if (number % divisor === 0) {
            factors++;
        }
    }

    if (factors > maximum) {

        maximum = factors;
        maximumNumber = number;
    }
}

console.log("Number =", maximumNumber);
console.log("Maximum Factors =", maximum);