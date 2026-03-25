/*PARTE2
    1. Crie um array de frutas com os seguintes elementos: Banana, Maçã,
    Pera, Uva, Morango.
    2. Adicione Tangerina no final.
    3. Adicione Goiaba no início.
    4. Exiba o conteúdo do índice 5.
    5. Exclua o elemento uva.
    6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4.
*/

// 1. Crie um array de frutas com os seguintes elementos: Banana, Maçã, Pera, Uva, Morango.
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

// 2. Adicione Tangerina no final.
frutas.push("Tangerina");
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

// 3. Adicione Goiaba no início.
frutas.unshift("Goiaba");
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

// 4. Exiba o conteúdo do índice 5.
let procurado = "Morango";
let indice = frutas.indexOf(procurado);
console.log("O ", procurado, "está no indice:", indice);

// 5. Exclua o elemento uva.
frutas.splice(4, 1);
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

// 6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4.
listaParcial = frutas.slice(2, 5);
console.table(listaParcial);
