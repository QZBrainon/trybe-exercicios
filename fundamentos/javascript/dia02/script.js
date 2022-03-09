let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 1
// for (let num of numbers) {
//   console.log(num);
// }

// exercicio 2
// let somaElementos = 0;
// for (let index = 0; index < numbers.length; index++) {
//   somaElementos += numbers[index];
// }
// console.log(somaElementos);

// exercicio 3
// let somaElementos = 0;
// for (let index = 0; index < numbers.length; index++) {
//   somaElementos += numbers[index];
// }
// console.log(somaElementos / numbers.length);

// exercicio 4
// let somaElementos = 0;
// for (let index = 0; index < numbers.length; index++) {
//   somaElementos += numbers[index];
// }
// if (somaElementos / numbers.length > 20) {
//   console.log("valor maior que 20");
// } else {
//   console.log("valor menor ou igual a 20");
// }

// exercicio 5 resolvido
// let maiorNumero = 0;
// for (let index = 0; index < numbers.length; index++) {
//   if (
//     numbers[index] > numbers[index + 1] &&
//     numbers[index] > numbers[index - 1] &&
//     numbers[index] >= maiorNumero
//   ) {
//     maiorNumero = numbers[index];
//   }
// }
// console.log(maiorNumero);

// let maiorNumero = 0; // outra forma de resolver!
// for (let index = 0; index < numbers.length; index++) {
//   for (let j = 0; j < numbers.length; j++)
//     if (numbers[index] > numbers[j] && numbers[index] > maiorNumero) {
//       maiorNumero = numbers[index];
//     }
// }
// console.log(maiorNumero);

// exercicio 6
// valoresImpar = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     valoresImpar++;
//   }
// }
// console.log(valoresImpar);

// // exercicio 7
// let menorNumero = 0;
// for (let i = 0; i < numbers.length; i++) {
//   for (let j = 0; j < numbers.length; j++) {
//     if (numbers[j] < numbers[i]) {
//       menorNumero = numbers[j];
//     }
//   }
// }
// console.log(menorNumero);

// exercicio 8

// let array = [];
// for (let i = 1; i <= 25; i++) {
//   array.push(i);
// }
// console.log(array);

// exercicio 9

let array = [];
for (let i = 1; i <= 25; i++) {
  array.push(i);
}
for (let j = 0; j < array.length; j++) {
  console.log(array[j] / 2);
}
