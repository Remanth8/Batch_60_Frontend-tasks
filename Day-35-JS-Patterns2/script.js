// ==========================================
// 1. LEFT ALIGNED PATTERN
// ==========================================

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= i; j++) {
        document.write(j + " ");
    }

    document.write("<br>");
}

document.write("<br><br>");


// ==========================================
// 2. LEFT ALIGNED - DECREASING
// ==========================================

// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5

for (let i = 5; i >= 1; i--) {

    for (let j = 5; j >= i; j--) {
        document.write(j + " ");
    }

    document.write("<br>");
}

document.write("<br><br>");


// ==========================================
// 3. LEFT ALIGNED - MISSING VALUES
// ==========================================

// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5

for (let i = 5; i >= 1; i--) {

    for (let j = 5; j >= 6 - i; j--) {
        document.write(j + " ");
    }

    document.write("<br>");
}

document.write("<br><br>");


// ==========================================
// 4. 1 TO 5, THEN 2 TO 5
// ==========================================

// 1 2 3 4 5
// 2 3 4 5
// 3 4 5
// 4 5
// 5

for (let i = 1; i <= 5; i++) {

    for (let j = i; j <= 5; j++) {
        document.write(j + " ");
    }

    document.write("<br>");
}

document.write("<br><br>");


// ==========================================
// 5. 5 TO 1, THEN 4 TO 1
// ==========================================

// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

for (let i = 5; i >= 1; i--) {

    for (let j = i; j >= 1; j--) {
        document.write(j + " ");
    }

    document.write("<br>");
}

document.write("<br><br>");


// ==========================================
// 6. 1 TO 5 WITH MISSING VALUES
// ==========================================

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for (let i = 5; i >= 1; i--) {

    for (let j = 1; j <= i; j++) {
        document.write(j + " ");
    }

    document.write("<br>");
}

document.write("<br><br>");


// ==========================================
// 7. RIGHT ALIGNED PATTERN
// ==========================================

//         1
//       1 2
//     1 2 3
//   1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= 5; i++) {

    for (let j = 5; j > i; j--) {
        document.write("&nbsp;&nbsp;");
    }

    for (let j = 1; j <= i; j++) {
        document.write(j + " ");
    }

    document.write("<br>");
}

document.write("<br><br>");


// ==========================================
// 8. RIGHT ALIGNED - DECREASING
// ==========================================

// 5 4 3 2 1
//   5 4 3 2
//     5 4 3
//       5 4
//         5

for (let i = 5; i >= 1; i--) {

    for (let j = 5; j > i; j--) {
        document.write("&nbsp;&nbsp;");
    }

    for (let j = 5; j >= 6 - i; j--) {
        document.write(j + " ");
    }

    document.write("<br>");
}

document.write("<br><br>");


// ==========================================
// 9. RIGHT ALIGNED - 1 TO 5
// ==========================================

//         1 2 3 4 5
//       1 2 3 4
//     1 2 3
//   1 2
// 1

for (let i = 5; i >= 1; i--) {

    for (let j = 5; j > i; j--) {
        document.write("&nbsp;&nbsp;");
    }

    for (let j = 1; j <= i; j++) {
        document.write(j + " ");
    }

    document.write("<br>");
}

document.write("<br><br>");


// ==========================================
// 10. RIGHT ALIGNED - 5 TO 1
// ==========================================

// 5 4 3 2 1
//   4 3 2 1
//     3 2 1
//       2 1
//         1

for (let i = 5; i >= 1; i--) {

    for (let j = 5; j > i; j--) {
        document.write("&nbsp;&nbsp;");
    }

    for (let j = i; j >= 1; j--) {
        document.write(j + " ");
    }

    document.write("<br>");
}

document.write("<br><br>");


// ==========================================
// 11. RIGHT ALIGNED - 1 TO 5
// ==========================================

//         1
//       1 2
//     1 2 3
//   1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= 5; i++) {

    for (let j = 5; j > i; j--) {
        document.write("&nbsp;&nbsp;");
    }

    for (let j = 1; j <= i; j++) {
        document.write(j + " ");
    }

    document.write("<br>");
}

document.write("<br><br>");


// ==========================================
// 12. RIGHT ALIGNED - 5 TO 1
// ==========================================

// 5 4 3 2 1
//   5 4 3 2
//     5 4 3
//       5 4
//         5

for (let i = 5; i >= 1; i--) {

    for (let j = 5; j > i; j--) {
        document.write("&nbsp;&nbsp;");
    }

    for (let j = 5; j >= 6 - i; j--) {
        document.write(j + " ");
    }

    document.write("<br>");
}