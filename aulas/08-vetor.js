//Criando variaveis do tipo Array (Vetor)

var dinos = ["Tiranossauro Rex", "Estegosauro", "Brotossauro", "Tricerátops"];

// Imprimindo os daos em forma de linha
console.log(dinos);
// Imprimindo os daos em forma de tabela
console.table(dinos);

// lenght -> "Tamanho" do Array (Quantidade de Elementos)
console.log("O vetor agora tem", dinos.length, "elementos");

// Imprimir Elemento a partir do índice
console.log(dinos[1]);

// push -> Acicione um novo elemento no final da fila
dinos.push("Anquilossauro");
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos");

// unshift -> Adiciona um novo elemento no ínicio da fila
dinos.unshift("Velociraptor");
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos");

// Obter um Elemento a partir do seu índice
console.log("1ª posição:", dinos[0]);
console.log("4ª posição:", dinos[3]);
console.log("20ª posição:", dinos[20]);
