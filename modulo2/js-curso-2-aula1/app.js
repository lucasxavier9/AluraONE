// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();

function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirNaTela('h1', 'Jogo do número secreto');
exibirNaTela('p', 'Escolha um número entre 1 e 100');

function verificarChute(){
    let chute = document.querySelector('input').value
    console.log(chute == numeroSecreto);

}


function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}


// DESAFIO DO CAPITULO: 

// 1. Função que exibe "Olá, mundo!" no console
function olaMundo() {
    console.log("Olá, mundo!");
}

// 2. Função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

// 3. Função que recebe um número como parâmetro e retorna o dobro desse número
function dobro(numero) {
    return numero * 2;
}

// 4. Função que recebe três números como parâmetros e retorna a média deles
function media(a, b, c) {
    return (a + b + c) / 3;
}

// 5. Função que recebe dois números como parâmetros e retorna o maior deles
function maiorNumero(num1, num2) {
    return Math.max(num1, num2);
}

// 6. Função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadrado(numero) {
    return numero * numero;
}

// Testando as funções
olaMundo();
saudacao("Alice");
console.log(dobro(4));
console.log(media(3, 6, 9));
console.log(maiorNumero(10, 20));
console.log(quadrado(5));


