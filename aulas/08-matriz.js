// Criando uma matriz
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [6, 2, 8],
  [1, 3, 9],
];
console.table(matriz);

//Obtendo elemento com base e seus índice

console.log(matriz[0][1]);
console.log(matriz[2][0]);

/*-------------------------------------------------------
                     EXERCICIO
---------------------------------------------------------/*
/*
1. Crie uma matriz 3x3
2. Imprima os valores na diagonal principal x
3. Altere os valores do item matriz[1][2] para 20 e matriz[2][0] para 30
*/
console.log("----------------------------------------");

var matriz2 = [
  [9, 0, 1],
  [7, 1, 2],
  [6, 2, 8],
];
console.table(matriz2);

//Obtendo elemento com base e seus índice

console.log(matriz2[0][0]);
console.log(matriz2[1][1]);
console.log(matriz2[2][2]);
console.log(matriz2[0][2]);
console.log(matriz2[1][1]);
console.log(matriz2[2][0]);

matriz2[1][2] = 20;
matriz2[2][0] = 30;
console.table(matriz2);

//Dada uma matriz 2
