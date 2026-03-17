/* Criar uma função que recebe o ano de nascimento de uma pessoa e retorne sua idade */
function apresentarPessoa(anoNascimento, idade) {
  console.log(
    "A pessoa nasceu em:",
    anoNascimento,
    "e atualmente tem:",
    idade, "anos."
  );
}

apresentarPessoa("2009", "16");

/*
2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode 
viajar com esse combustível. Considere que o veículo faz uma média de 12 Km/L.

*/
function kms(combustivel) {
  let veiculo = combustivel * 12;
  return veiculo;
}

console.log("---------------------------------------------------------------------------------");
console.log("Se você colocar 50 litros de combustível, seu carro poderá viajar", kms(50), "Km");
console.log("---------------------------------------------------------------------------------");