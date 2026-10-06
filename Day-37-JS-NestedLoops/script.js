//Sum of Prime Numbers
// let sum = 0;

// for (let n = 20; n <= 150; n++) {
//     let count = 0;

//     for (let i = 1; i <= n; i++) {
//         if (n % i == 0) {
//             count++;
//         }
//     }

//     if (count == 2) {
//         sum = sum + n;
//     }
// }

// console.log("Sum =", sum);

//Average of Perfect Numbers
// let sum = 0;
// let count = 0;

// for (let n = 1; n <= 1000; n++) {
//     let factorSum = 0;

//     for (let i = 1; i < n; i++) {
//         if (n % i == 0) {
//             factorSum = factorSum + i;
//         }
//     }

//     if (factorSum == n) {
//         console.log(n);
//         sum = sum + n;
//         count++;
//     }
// }

// let average = sum / count;

// console.log("Average =", average);

// Leap Years in a Range
// for (let year = 1900; year <= 2026; year++) {
//     if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//         console.log(year);
//     }
// }

//Palindrome Numbers
//  let i=100
// while(i<=500){
//       rev=0
//       k=i
//       while(k>0){
//          rev=rev*10+(k%10)
//          k=parseInt(k/10)
//       }
//     if (rev==i){
//      console.log(rev,"palidrome")
//  }
//  i=i+1
// }

//Digit Sum = 10
//  let i=1
// while(i<=850){
//     o=i
//     sum=0
//     while(o>0){
//         sum+=(o%10)
//         o=parseInt(o/10)
//     }
//     if (sum==10){
//         console.log(i)
//     }
//     i++
// }

//Pairs with Target Sum
// for (let a = 1; a <= 50; a++) {
//     for (let b = a; b <= 50; b++) {
//         if (a + b == 30) {
//             console.log(a, b);
//         }
//     }
// }

//Exactly 3 Factors

// for (let n = 10; n <= 300; n++) {
//     let count = 0;

//     for (let i = 1; i <= n; i++) {
//         if (n % i == 0) {
//             count++;
//         }
//     }

//     if (count == 3) {
//         console.log(n);
//     }
// }

//Maximum Factors

// let max = 0;
// let number = 0;

// for (let n = 50; n <= 150; n++) {
//     let count = 0;

//     for (let i = 1; i <= n; i++) {
//         if (n % i == 0) {
//             count++;
//         }
//     }

//     if (count > max) {
//         max = count;
//         number = n;
//     }
// }

// console.log("Number =", number);
// console.log("Factors =", max);