// 1. Print "Hello" 3 times

let n = 1;

while (n <= 3) {
    console.log("Hello");
    n = n + 1;
}


// 2. Print numbers from 1 to 5

n = 1;

while (n <= 5) {
    console.log(n);
    n = n + 1;
}


// 3. Print numbers from 5 to 1

n = 5;

while (n >= 1) {
    console.log(n);
    n = n - 1;
}


// 4. Print numbers from 100 to 50 with decrement of 10

n = 100;

while (n >= 50) {
    console.log(n);
    n = n - 10;
}


// 5. Find sum of first 3 numbers multiplied by 10

n = 1;
let sum = 0;

while (n <= 3) {
    sum = sum + 10;
    n = n + 1;
}

console.log(sum);


// 6. Print multiples of 2 from 2 to 20

n = 1;

while (n <= 10) {
    console.log(2 * n);
    n = n + 1;
}


// 7. Find factorial of 4

n = 4;
let fact = 1;

while (n >= 1) {
    fact = fact * n;
    n = n - 1;
}

console.log(fact);


// 8. Fibonacci series

let a = 0;
let b = 1;

console.log(a);
console.log(b);

sum = 0;
n = 1;

while (n <= 5) {
    sum = a + b;
    a = b;
    b = sum;

    console.log(sum);

    n = n + 1;
}


// 9. Print even numbers from 1 to 5

n = 1;

while (n <= 5) {

    if (n % 2 == 0) {
        console.log(n);
    }

    n = n + 1;
}


// 10. Print odd numbers from 10 to 5

n = 10;

while (n >= 5) {

    if (n % 2 != 0) {
        console.log(n);
    }

    n = n - 1;
}


// 11. Print numbers divisible by 5 from 10 to 15

n = 10;

while (n <= 15) {

    if (n % 5 == 0) {
        console.log(n);
    }

    n = n + 1;
}


// 12. Find sum of even numbers from 1 to 5

n = 1;
sum = 0;

while (n <= 5) {

    if (n % 2 == 0) {
        sum = sum + n;
    }

    n = n + 1;
}

console.log(sum);


// 13. Count odd numbers from 1 to 5

n = 1;
let count = 0;

while (n <= 5) {

    if (n % 2 != 0) {
        count = count + 1;
    }

    n = n + 1;
}

console.log(count);


// 14. Check whether a number is prime

let num = 6;
count = 0;
n = 1;

while (n <= num) {

    if (num % n == 0) {
        count++;
    }

    n = n + 1;
}

if (count == 2) {
    console.log(num + " is prime");
} else {
    console.log(num + " is not prime");
}


// 15. Check whether a number is a perfect number

num = 6;
n = 1;
sum = 0;

while (n < num) {

    if (num % n == 0) {
        sum = sum + n;
    }

    n = n + 1;
}

if (sum == num) {
    console.log(num + " is perfect number");
} else {
    console.log(num + " is not perfect number");
}