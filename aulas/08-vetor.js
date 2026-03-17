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

// pop -> Remover um elemento do final do vetor (ultimo elemento)
dinos.pop();
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos");

// shift -> Remover um elemento do inicio do vetor (primeiro elemento)
dinos.shift();
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos");

// splice -> Remove um elemento a partir de um indice, e tambem precisa ser informada a quantidade de registro a ser excluído a partir do indice
dinos.splice(1, 1);
console.table(dinos);
console.log("O vetor agora tem", dinos.length, "elementos");

// Adicionar mais elementos ao vetor
dinos.push("Pterodáctilo");
dinos.push("Estegossauro");
dinos.push("Argentinossauro");

// Procurar elemento a partir do nome (descrição)
// indexOf(procurado) -> reytorna o indice do elemento no vetor
let procurado = "Estegossauro";
let indice = dinos.indexOf(procurado);
console.log("O ", procurado, "está no índice: ", indice);

// indexOf (procurado) -> retorne -1 caso não encontre
procurado = "Daphinossauro";
indice = dinos.indexOf(procurado);
console.log("O ", procurado, "está no índice: ");

// Excluir um elemento com base em seu nome
// 1ª localizar o indice do elemento a partir do nome
// 2ª excluir o registro com base no indice retornado
procurado = "Estegossauro";
indice = dinos.indexOf(procurado);
console.log("O ", procurado, "está no indice:", indice);
dinos.splice(indice, 1);
console.table(dinos);

// Alterar o vetor de um elemento a partir do indice
dinos[1] = "Aquilossauro";
console.table(dinos);

// slice -> Criar uma cópia do Vetor
let novaLista = dinos.slice(); // Cópia completa do vetor dinos

let listaParcial = dinos.slice(1, 3);// Cria nova cópia do vetor dinos a partir do indice onde começa e onde termina
console.table(listaParcial);
console.table(listaParcial);
