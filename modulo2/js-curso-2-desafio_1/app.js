let titulo = document.querySelector('h1');
let somanumero

titulo.innerHTML = 'Hora do Desafio.';

function verificarChute(){
    console.log('O botao foi clicado');
    
}

function verificarAlerta(){
    console.log('Eu amo JS');
    
}

function verificaPrompt(){
    cidade = prompt('Qual sua cidade: ');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function soma(){
    alert(" SOMA DE DOIS NÚMEROS");
    n1 = Number(prompt('Número 1: '));
    n2 = Number(prompt('Número 2: '));
    somanumero = (n1 + n2);
    alert(`A soma de ${n1} com ${n2} é igual a: ${somanumero}`);
}








