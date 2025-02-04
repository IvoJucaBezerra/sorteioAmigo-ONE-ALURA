let listaDeAmigos = [];

// Função para adicionar nome à lista
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    listaDeAmigos.push(nome);
    nomeInput.value = '';
    atualizarLista();
}

// Função para atualizar a lista visível
function atualizarLista() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';

    listaDeAmigos.forEach(nome => {
        const item = document.createElement('li');
        item.textContent = nome;
        listaElement.appendChild(item);
    });
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Adicione pelo menos um nome para sortear!');
        return;
    }

    const indexAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indexAleatorio];

    // Exibe o resultado do sorteio
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}
