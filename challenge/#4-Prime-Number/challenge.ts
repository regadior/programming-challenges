/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

for (let i = 2; i < 100; i++) {
  let isDivisible = false;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isDivisible = true;
      break;
    }
  }
  if (!isDivisible) {
    console.log(i);
  }
}
