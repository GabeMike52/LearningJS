// console.log("Olá, mundo");

// VARIÁVEIS
// const nome = "Gabriel";
// const idade = 20;
// let comidaFavorita = "Sushi";
// console.log("Olá, meu nome é" + " " + nome + ", " + "tenho" + " " + idade + " anos" + " " + "e minha comida favorita é" + " " + comidaFavorita + ".");

// ARRAYS
// EXERCÍCIO 1
// let animais = [];
// animais.push("Gato");
// animais.push("Leão");
// animais.push("Onça-parda");
// console.log(animais);

// EXERCÍCIO 2
// animais.shift(0);
// console.log(animais);

// EXERCÍCIO 3
// animais.unshift("Tigre");
// animais.unshift("Leopardo-das-neves");
// console.log(animais);

// EXERCÍCIO 4
// animais[1] = "Girafa";
// console.log(animais);

// EXERCÍCIO 5
// let frutas = ["Banana", "Goiaba", "Mamão", "Acerola"];
// console.log(frutas);
// let totalFrutas = frutas.length;
// console.log(totalFrutas);

// EXERCÍCIO 6
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// LOOPS
// EXERCÍCIO 1
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// EXERCÍCIO 2
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//     }

// EXERCÍCIO 3
// }
// let i = 0; while (i <= 10) {
//     console.log(i);
//     i++;
// }

 // EXERCÍCIO 4
// for (let i = 0; i <= 100; i++) {
//     if(i > 50) {
//         break;
//     }
//     console.log(i);
// }

// EXERCÍCIO 5
// for (let i = 0; i <= 20; i++) {
//     if (i === 13) {
//         continue;
//     }
//     console.log(i);
// }

// EXERCÍCIO 6
// let nomes = ["Gabriel", "Miqueias", "Brito", "Carneiro"];
// for (let nome of nomes) {
//     console.log(nome);
// }

// ESTRUTURAS DE CONTROLE
// EXERCÍCIO 1
// let idade = 68;
// if (idade < 13) {
//     console.log("Criança");
// } else if (idade > 13 && idade <= 17) {
//     console.log("Adolescente");
// } else if (idade > 17 && idade <= 34) {
//     console.log("Adulto");
// } else {
//     console.log("Idoso");
// }

// EXERCÍCIO 2
// let numero = 5;
// switch (numero) {
//     case 1:
//         console.log(`Errou`);
//         break;
//     case 2:
//         console.log(`Errou`);
//         break;
//     case 3:
//         console.log(`Acertou`);
//         break;
//     case 4:
//         console.log(`Errou`);
//         break;
//     case 5:
//         console.log(`Errou`);
//         break;
//     default:
//         console.log(`Números somente de 1 a 5`);
// }

// EXERCÍCIO 3
// let nota = 6.5;
// switch (nota) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("Reprovado");
//         break;
//     case 6:
//     case 7:
//         console.log("Recuperação");
//         break;
//     case 8:
//     case 9:
//     case 10:
//         console.log("Aprovado");
//         break;
//     default:
//         console.log("Nota inválida, insira um número inteiro");
// }

// FUNÇÕES

// EXERCÍCIO 1
// function calcularAreaRetangulo(largura, altura) {
//     let area = largura * altura;
//     console.log(`A área do retângulo é ${area}`);
// }
// calcularAreaRetangulo(5, 2);

// EXERCÍCIO 2
// let par = false;
// function verificarParidade(numero) {
//     if (numero % 2 === 0) {
//         par = true;
//         console.log(par);
//     } else {
//         par = false;
//         console.log(par);
//     }
//     return par;
// }
// verificarParidade(21);

// EXERCÍCIO 3
// const polegada = 2.54;
// function converterCentimetros(centimetro) {
//     let valorCentimetros = centimetro / polegada;
//     console.log(valorCentimetros);
// }
// converterCentimetros(127);

// EXERCÍCIO 4
// function calcularIMC(peso, altura) {
//     let imc = peso / (altura * altura);
//     console.log(`Seu IMC é: ${imc}`);
// }
// calcularIMC(75, 1.85);

// EXERCÍCIO 5
// function maiusculaParaMinuscula(palavra) {
//     let palavraMinuscula = palavra.toLowerCase();
//     console.log(palavraMinuscula);
// }
// maiusculaParaMinuscula(`BOIIIII`);

// EXERCÍCIO 6
// let numero = 5;
// let multiplicaPorDez = (numero) => numero * 10; A function multiplicaPorDez recebe numero como parametro e retorna numero vezes 10.
// console.log(multiplicaPorDez(numero));