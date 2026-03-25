/*PARTE 5 – Vetores (36 a 42) 🚨
(USAR for)
36. Crie um vetor com 10 números e exiba todos.
37. Calcule a soma dos elementos do vetor.
38. Calcule a média do vetor.
39. Encontre o maior valor do vetor.
40. Encontre o menor valor do vetor.
41. Conte quantos números são pares e ímpares.
42. Multiplique todos os elementos por 2.
*/

// 36.Vetor com 10 números exiba todos
var numero = ["4", "12", "33", "14", "5", "6", "69", "22", "1", "9"];
console.table(numero);

console.log("--------------------------------------------");

// 37. Calcule a soma dos elementos do vetor.
for (let i = 0; i < numero.length; i++) {
  numero[i] += numero; // numero [i] = numero [i] * 3
}
console.log(numero);

console.log("--------------------------------------------");

// 38. Calcule a média do vetor
var nota1 = 4;
var nota2 = 12;
var nota3 = 33;
var nota4 = 14;
var nota5 = 5;
var nota6 = 6;
var nota7 = 69;
var nota8 = 22;
var nota9 = 1;
var nota10 = 9;

var media =
  (nota1 +
    nota2 +
    nota3 +
    nota4 +
    nota5 +
    nota6 +
    nota7 +
    nota8 +
    nota9 +
    nota10) /
  10;

console.log(media);
