/*PARTE 3 – Switch Case (21 a 25)
21. Dado um número de 1 a 7, exiba o dia da semana.
22. Dado um mês (1 a 12), exiba o nome do mês.
23. Dado um mês, informe o trimestre.
24. Crie um menu simples:
       1: Somar
       2: Subtrair
       3: Multiplicar
       4: Dividir
25. Sistema de avaliação:
       A → Excelente
       B → Bom
       C → Regular
       D → Ruim */


//21. Dado um número de 1 a 7, exiba o dia da semana.
let numSemana = 3;
switch (numSemana) {
    case 1:
        console.log("Segunda-Feira");
        break
    case 2:
        console.log("Terça-Feira");
        break
    case 3:
        console.log("Quarta-Feira");
        break
    case 4:
        console.log("Quinta-Feira");
        break
    case 5:
        console.log("Sexta-Feira");
        break
    case 6:
        console.log("Sabádo");
        break
    case 7:
        console.log("Domingo");
        break
    default:
        console.log("Dia da Semana NÂO Existente!!");
        break;
}       

//22. Dado um mes (1 a 12), exiba o nome do mes
let numMes = 5;
switch (numMes) {
    case 1:
        console.log("Janeiro");
        break
    case 2:
        console.log("Fevereiro");
        break
    case 3:
        console.log("Março");
        break
    case 4:
        console.log("Abril");
        break
    case 5:
        console.log("Maio");
        break
    case 6:
        console.log("Junho");
        break
    case 7:
        console.log("Julho");
        break
    case 8:
        console.log("Agosto");
        break
    case 9:
        console.log("Setembro");
        break
    case 10:
        console.log("Outubro");
        break
    case 11:
        console.log("Novembro");
        break
    case 12:
        console.log("Dezembro");
        break
    default:
        console.log("Esse Mês não!!");
        break;
}

//23. Dado um mês, informe o trimestre.
let mes = 2;

switch (mes) {
    case 1:
    case 2:
    case 3:
        console.log("----------------------------------------");
        console.log(" 23.Dado um mês, informe o trimestre. ");
        console.log("----------------------------------------");
        console.log(" Você está no Primeiro 1º, Trimestre!");
        console.log("----------------------------------------");
        break
    case 4:
    case 5:
    case 6:
        console.log("----------------------------------------");
        console.log(" 23.Dado um mês, informe o trimestre. ");
        console.log("----------------------------------------");
        console.log(" Você está no Segundo 2º, Trimestre!");
        console.log("---------------------------------------");
        break;
    case 7:
    case 8:
    case 9:
        console.log("----------------------------------------");
        console.log(" 23.Dado um mês, informe o trimestre. ");
        console.log("----------------------------------------");
        console.log(" Você está no Terceiro 3º, Trimestre!");
        console.log("----------------------------------------");
        break
    default:
        console.log("----------------------------");
        console.log(" Esse Trimestre não Existente!!");
        console.log("----------------------------");
        break;
}

/* 24. Crie um menu simples:
       1: Somar
       2: Subtrair
       3: Multiplicar
       4: Dividir */
let menu = "Soma"
let num1 = 9
let num2 = 3

switch (menu) {
    case "Soma":
        let soma = 9 + 3
        console.log("--------------------------------------------------");
        console.log("A soma entre", num1, "e", num2,"é igual a:", soma);
        console.log("--------------------------------------------------");
        break;

    case "Subtrair":
        let subtrair = 9 - 3
        console.log("--------------------------------------------------");
        console.log("A Subtração entre", num1, "e", num2,"é igual a:", subtrair);
        console.log("--------------------------------------------------");
        break;

    case "Multiplicar":
        let multiplicar = 9 * 3
        console.log("--------------------------------------------------");
        console.log("A Multiplicação entre", num1, "e", num2,"é igual a:", multiplicar);
        console.log("--------------------------------------------------");
        break;

    case "Dividir":
        let dividir = 9 / 3
        console.log("--------------------------------------------------");
        console.log("A divisão entre", num1, "e", num2,"é igual a:", dividir);
        console.log("--------------------------------------------------");
        break;

    default:
        console.log("---------------------");
        console.log("Opção NÃO Existente!!");
        console.log("---------------------");
        break;
}

/* 25. Sistema de avaliação:
       A → Excelente
       B → Bom
       C → Regular
       D → Ruim */

 let nota = "B";

switch (nota) {
    case "A":
        console.log("------------------------------");
        console.log("Sua Avaliação está Excelente!!!!");
        console.log("------------------------------");
        break

    case "B":
        console.log("------------------------");
        console.log("Sua Avaliação está Bom!!!");
        console.log("------------------------");
        break

    case "C":
        console.log("----------------------------");
        console.log("Sua Avaliação está Regular!!");
        console.log("----------------------------");
        break

    case "D":
        console.log("-------------------------");
        console.log("Sua Avaliação está Ruim!");
        console.log("-------------------------");
        break
    default:
        console.log("------------------------");
        console.log("Avaliação NÃO Existente!");
        console.log("------------------------");
        break;
}
      