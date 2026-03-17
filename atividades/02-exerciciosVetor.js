// Criando variáveis do tipo Array (Vetor)

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];

//Imprimindo os dados em forma de tabela
console.table(frutas);

// lenght Quantiodade de elemento
console.log("O vetor tem", frutas.lenght, "elementos");

// push -> Adiciona um novo elemento no final da fila
frutas.push("Tangerina");
console.table(frutas);
console.log("O vetor agora tem", frutas.length, "elementos");

//// unshift -> Adiciona um novo elemento no ínicio da fila
frutas.unshift("Goiaba");
console.table(frutas);
console.log("O vetor agora tem", frutas.length, "elementos");

// Obter um elemento a partir do índice
console.log("5ª posição:", frutas[5]);

// splice ->  Remove um elemento a partir de um indice, e tambem precisa ser informada a quantidade de registro a ser excluído a partir do indice
frutas.splice(4, 1);
console.table(frutas);
console.log("O vetor agora tem", frutas.length, "elementos");

// slice -> Criar uma cópia do Vetor
let listaParcial = frutas.slice(2, 5);
console.table(listaParcial);
console.log("O vetor agora tem", frutas.length, "elementos");