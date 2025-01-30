// Mensagem de boas-vindas no console
let nome = "Wedryson";
console.log(`Olá, ${nome}!`);

// Mensagem de boas-vindas com alert
alert(`Olá, ${nome}!`);

// Pergunta ao usuário sobre a linguagem de programação favorita
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(`Você gosta de ${linguagem}!`);

// Soma de dois valores
let valor1 = 5;
let valor2 = 7;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// Subtração de dois valores
valor1 = 10;
valor2 = 4;
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

// Verificar maioridade com base na idade
let idade = prompt("Qual a sua idade?");
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// Verificar se um número é positivo, negativo ou zero
let numero = prompt("Digite um número:");
numero = parseFloat(numero);
if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}

// Loop while para imprimir de 1 a 10
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Verificar aprovação com base na nota
let nota = 8; // Alterar o valor para testar
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// Gerar um número aleatório com Math.random
let numeroAleatorio = Math.random();
console.log(`Número aleatório: ${numeroAleatorio}`);

// Gerar um número inteiro entre 1 e 10
let inteiroEntre1e10 = Math.floor(Math.random() * 10) + 1;
console.log(`Número inteiro entre 1 e 10: ${inteiroEntre1e10}`);

// Gerar um número inteiro entre 1 e 1000
let inteiroEntre1e1000 = Math.floor(Math.random() * 1000) + 1;
console.log(`Número inteiro entre 1 e 1000: ${inteiroEntre1e1000}`);
