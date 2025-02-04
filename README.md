## Como Funciona o Código

### 1. Adicionar Nome
- O usuário digita um nome no campo de texto e clica no botão **Adicionar**.
- A função `adicionarAmigo()` é chamada, que valida o nome e o adiciona à lista interna `listaDeAmigos`.
- A lista de amigos é então atualizada na página usando a função `atualizarLista()`.

### 2. Sortear Amigo
- Quando o botão **Sortear amigo** é clicado, a função `sortearAmigo()` é executada.
- A função escolhe aleatoriamente um nome da lista `listaDeAmigos` usando `Math.random()`.
- O nome sorteado é exibido na seção de resultados.

### 3. Validação
- Antes de adicionar o nome à lista, é verificado se o campo de entrada não está vazio. Se estiver, um alerta é mostrado.

- Imagem do teste
![](https://github.com/IvoJucaBezerra/sorteioAmigo-ONE-ALURA/blob/main/assets/img-teste.png)
