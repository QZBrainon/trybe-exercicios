// exercicios dia 4.4

// exemplos para fixação!

// let moradores = [
//   {
//     nome: "Luiza",
//     sobrenome: "Guimarães",
//     andar: 10,
//     apartamento: 1005,
//   },
//   {
//     nome: "William",
//     sobrenome: "Albuquerque",
//     andar: 5,
//     apartamento: 502,
//   },
//   {
//     nome: "Murilo",
//     sobrenome: "Ferraz",
//     andar: 8,
//     apartamento: 804,
//   },
//   {
//     nome: "Zoey",
//     sobrenome: "Brooks",
//     andar: 1,
//     apartamento: 101,
//   },
// ];

//   let primeiroMorador = moradores[0];
//   console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
//   console.log(primeiroMorador['andar']); // 10

//   let ultimoMorador = moradores[moradores.length - 1];
//   console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
//   console.log(ultimoMorador.nome); // Zoey

// console.log(moradores[moradores.length - 1]["apartamento"]); // testando diferentes maneiras de acessar o array e objeto

// let objeto = [
//   1,
//   2,
//   3,
//   {
//     animal: "cachorro",
//     cor: "branco",
//     dono: ["Miguel", "Zoe", "Senna"],
//   },
//   4,
//   5,
// ];

// console.log(objeto[3].dono[1]); // exemplo com array contendo objeto cujo key possui outro array como valor

// -------------------------------------------------------------------------------------------------

// let player = {
//   name: "Marta",
//   lastName: "Silva",
//   age: 34,
//   medals: {
//     golden: 2,
//     silver: 3,
//   },
// };
// console.log(
//   "A jogadora " +
//     player.name +
//     " " +
//     player.lastName +
//     " " +
//     "tem " +
//     player.age +
//     " anos de idade"
// );
// player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];
// console.log(
//   "A jogadora " +
//     player.name +
//     " foi eleita a melhor do mundo por 6 vezes, nos anos de " +
//     player.bestInTheWorld[0] + // ["bestInTheWorld"][0] também funciona como notação de colchetes
//     ", " +
//     player.bestInTheWorld[1] +
//     ", " +
//     player.bestInTheWorld[2] +
//     ", " +
//     player.bestInTheWorld[3] +
//     ", " +
//     player.bestInTheWorld[4] +
//     " e " +
//     player.bestInTheWorld[5]
// );

// console.log(
//   "A jogadora possui " +
//     player.medals.golden +
//     " medalhas de ouro e " +
//     player.medals.silver +
//     " medalhas de prata"
// );
