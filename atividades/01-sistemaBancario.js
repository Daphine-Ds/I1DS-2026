/***************************************************** 
Exercícios para fixação 
*****************************************************/ 
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta; 
*/

//Criando uma variável com "Var" 
let nome = "Clóvis";
let bank = "Banco do Brasil";
let agencia = "578900245";
let number = "2255880";
let saldo = "999.99";

//Imprimindo os dados
console.log("-----------------------------------------------");

console.log("               ",bank,"                        ");
console.log("-----------------------------------------------")
console.log (nome);
console.log(agencia);
console.log(number);
console.log(saldo);

console.log("> Movimentações <");

// Movimentação 1
console.log(" |> Compra Aprovada!! de R$10,00.");
saldo = saldo - 10;
console.log("  |> Saldo: R$", saldo);

// Movimentação 2
console.log(" |> Compra Aprovada!! de R$69,95.");
saldo = saldo - 69.95;
console.log("  |> Saldo: R$", saldo);

// Movimentação 3
console.log(" |> Compra Aprovada!! de R$74,50.");
saldo = saldo - 74.5;
console.log("  |> Saldo: R$", saldo);

// Movimentação 4
console.log(" |> Compra Aprovada!! de R$85,00.");
saldo = saldo - 85.00;
console.log("  |> Saldo: R$", saldo);

// Movimentação 5
console.log(" |> PIX Recebido de R$200,00. ");
saldo = saldo + 200;

// Reusltado Final
console.log("==========================================");
console.log("->    Seu saldo final é de R$", saldo,"   <-");  
console.log("==========================================");



