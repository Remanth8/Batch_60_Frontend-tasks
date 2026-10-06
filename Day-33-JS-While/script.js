// ===============================
// WHILE LOOP
// ===============================


// 1. Sum of digits

let n = 738;
let sum = 0;

while (n != 0) {

    let ld = n % 10;

    sum = sum + ld;
    n = Math.floor(n / 10);
}

console.log(sum);


// ===============================


// 2. Average of digits

n = 624;
sum = 0;
let avg = 0;
let count = 0;

while (n != 0) {

    let ld = n % 10;

    sum = sum + ld;
    n = Math.floor(n / 10);

    count++;
}

avg = sum / count;

console.log(avg);


// ===============================


// 3. Sum of first and last digit

n = 736;

let ld = n % 10;
let fd = n;

while (fd >= 10) {
    fd = Math.floor(fd / 10);
}

sum = ld + fd;

console.log(sum);


// ===============================


// 4. Average of digits greater than or equal to 5

n = 12575;

count = 0;
sum = 0;

while (n != 0) {

    ld = n % 10;

    if (ld >= 5) {
        sum = sum + ld;
        count++;
    }

    n = Math.floor(n / 10);
}

avg = sum / count;

console.log(avg);


// ===============================


// 5. Find the largest and smallest digit

n = 5321;

let large = 0;
let small = 9;

while (n != 0) {

    ld = n % 10;

    if (ld > large) {
        large = ld;
    }

    if (ld < small) {
        small = ld;
    }

    n = Math.floor(n / 10);
}

let diff = large - small;

console.log(diff);