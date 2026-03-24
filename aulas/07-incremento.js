/* Operadores de incremento e decremento | pré e pós incremento
   icrmento => somar um intem a alguma variável
   decremento => subtrair algo de alguma variável
*/

let idade = 16;
console.log(idade);

//idade = idede +1; somei 1 na idade
idade++;
console.log(idade);
idade++;
console.log(idade);
console.log("--------------------------------------");

//idade = idede -1; subtrai 1 na idade
idade--;
console.log(idade);
idade--;
console.log(idade);

let novaIdade = idade + 1; // idade++ soma na mesma variável
console.log("Idade:", idade, "| Nova Idade:", novaIdade);

novaIdade = idade++;
console.log("Idade:", idade, "| Nova Idade:", novaIdade);
