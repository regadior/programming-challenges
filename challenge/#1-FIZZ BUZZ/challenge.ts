/*
 * Write a program that displays by console (with a print) the numbers 1 to 100 (both included and with a line break between
 * numbers from 1 to 100 (both included and with a line break between each printout), substituting
 * each print), substituting the following:
 * - Multiples of 3 for the word “fizz”.
 * Multiples of 5 for the word “buzz”.
 * - Multiples of 3 and 5 at the same time for the word “fizzbuzz”.
 */

for (let i = 1; i <= 100; i++) {
  if (i % 3) {
    console.log("fizz");
  } else if (i % 5) {
    console.log("buzz");
  } else if (i % 3 && i % 5) {
    console.log("fizzbuzz");
  } else {
    console.log(i);
  }
};
