// exemplo 1 - Fatorial

// let numero = 10;
// for (let i = numero - 1; i > 1; i--) {
//   numero *= i;
// }
// console.log(numero);

// exemplo 2 - Inverter palavras

// let word = "tryber";
// let newWord = "";
// for (let i = word.length - 1; i >= 0; i--) {
//   newWord += word[i];
// }
// console.log(newWord);

// exemplo 3 - Arrays

// let array = ["java", "javascript", "python", "html", "css"];
// let maiorWord = "";
// let menorWord = "";
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (
//       array[j].length > array[i].length &&
//       array[j].length > maiorWord.length
//     ) {
//       maiorWord = array[j];
//     }
//   }
// }
// console.log(maiorWord);

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (
//       array[j].length < array[i].length &&
//       array[j].length !== menorWord.length
//     ) {
//       menorWord = array[j];
//     }
//   }
// }
// console.log(menorWord);

// Exemplo 3 - solução do gabarito:

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let biggestWord = array[0];
// let smallestWord = array[0];

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > biggestWord.length) {
//     biggestWord = array[index];
//   }
// }

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length < smallestWord.length) {
//     smallestWord = array[index];
//   }
// }

// console.log(biggestWord);
// console.log(smallestWord);

// exercicio 4 - Maior numero primo entre 0 e 50  incompleto.

// let maiorNumPrimo = 0;
// let contador = 0; // Um numero é primo apenas se tiver 2 divisores, o 1 e ele mesmo.
// for (let i = 2; i <= 50; i++){
//   for( j = 50; j >= i; j--){
//     if()
//   }
// }
