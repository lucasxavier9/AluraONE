// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Função para calcular o fatorial de um número
function calcularFatorial(n) {
    if (n === 0 || n === 1) return 1;
    let fatorial = 1;
    for (let i = 2; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}

// Função para converter dólar para real
function converterDolarParaReal(valorEmDolar) {
    const cotacaoDolar = 6.10;
    return valorEmDolar * cotacaoDolar;
}

// Função para calcular área e perímetro de uma sala retangular
function calcularSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    console.log(`Área: ${area} m², Perímetro: ${perimetro} m`);
}

// Função para calcular área e perímetro de uma sala circular
function calcularSalaCircular(raio) {
    const pi = 3.14;
    let area = pi * raio * raio;
    let perimetro = 2 * pi * raio;
    console.log(`Área: ${area} m², Perímetro: ${perimetro} m`);
}

// Função para exibir a tabuada de um número
function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
