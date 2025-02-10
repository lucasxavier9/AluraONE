let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }


    amigos.push(nome);

   
    atualizarLista();

    input.value = "";
    input.focus();
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach((nome, index) => {
        const li = document.createElement("li");
        li.textContent = nome;

        
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.onclick = () => removerAmigo(index);

        li.appendChild(botaoRemover);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1); 
    atualizarLista(); 
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos 1 amigo para o sorteio!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    exibirResultado(amigoSorteado);
}

function exibirResultado(amigo) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; 

    const li = document.createElement("li");
    li.textContent = `Sorteado: ${amigo} 🎉`;
    listaResultado.appendChild(li);
}
